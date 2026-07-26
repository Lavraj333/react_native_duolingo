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

export async function GET(request: Request) {
  try {
    const userId = await verifyClerkSession(request);

    if (!userId) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const streamUserId = `clerk_${userId}`;

    const token = streamClient.generateUserToken({
      user_id: streamUserId,
      validity_in_seconds: 60 * 60 * 4,
    });

    return Response.json({
      token,
      userId: streamUserId,
      apiKey: STREAM_API_KEY,
    });
  } catch (error) {
    console.error("Failed to generate Stream token:", error);
    return Response.json(
      { error: "Failed to generate token" },
      { status: 500 }
    );
  }
}
