import { StreamClient } from "@stream-io/node-sdk";

const STREAM_API_KEY = process.env.STREAM_API_KEY!;
const STREAM_API_SECRET = process.env.STREAM_API_SECRET!;

const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

async function verifyClerkSession(request: Request): Promise<string | null> {
  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return null;
  }

  const token = authHeader.slice(7);

  try {
    const res = await fetch("https://api.clerk.com/v1/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) return null;
    const user = (await res.json()) as { id: string };
    return user.id;
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const userId = await verifyClerkSession(request);

    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = (await request.json()) as {
      callId?: string;
      callType?: string;
      lessonId?: string;
      languageId?: string;
    };

    const { callId, callType = "default", lessonId, languageId } = body;

    if (!callId || !lessonId || !languageId) {
      return Response.json(
        { error: "Missing callId, lessonId, or languageId" },
        { status: 400 }
      );
    }

    const streamUserId = `clerk_${userId}`;

    const call = streamClient.video.call(callType, callId);

    await call.getOrCreate({
      data: {
        created_by_id: streamUserId,
        members: [{ user_id: streamUserId, role: "user" }],
        custom: {
          lesson_id: lessonId,
          language_id: languageId,
          created_by: streamUserId,
        },
      },
    });

    return Response.json({
      callId,
      callType,
      lessonId,
      languageId,
    });
  } catch (error) {
    console.error("Failed to create Stream call:", error);
    return Response.json(
      { error: "Failed to create call" },
      { status: 500 }
    );
  }
}
