import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth, useUser } from "@clerk/expo";
import {
  CallingState,
  useCallStateHooks,
  useStreamVideoClient,
  type Call,
} from "@stream-io/video-react-native-sdk";

export type CallState =
  | "idle"
  | "connecting"
  | "joined"
  | "reconnecting"
  | "error"
  | "ended";

function getBaseUrl(): string {
  const origin = process.env.EXPO_PUBLIC_SERVER_ORIGIN;
  if (origin) return origin;
  return "http://localhost:8081";
}

interface UseAudioCallOptions {
  lessonId: string;
  languageId: string;
}

export function useAudioCall({ lessonId, languageId }: UseAudioCallOptions) {
  const client = useStreamVideoClient();
  const { getToken } = useAuth();
  const { user } = useUser();
  const { useCallCallingState, useMicrophoneState, useParticipants, useLocalParticipant } =
    useCallStateHooks();
  const callingState = useCallCallingState();
  const { isMute } = useMicrophoneState();
  const participants = useParticipants();
  const localParticipant = useLocalParticipant();

  const [call, setCall] = useState<Call | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const callRef = useRef<Call | null>(null);

  const callState: CallState = (() => {
    switch (callingState) {
      case CallingState.IDLE:
        return "idle";
      case CallingState.JOINING:
        return "connecting";
      case CallingState.JOINED:
        return "joined";
      case CallingState.RECONNECTING:
        return "reconnecting";
      case CallingState.RECONNECTING_FAILED:
      case CallingState.OFFLINE:
        return "error";
      case CallingState.LEFT:
        return "ended";
      default:
        return "connecting";
    }
  })();

  // Duration timer
  useEffect(() => {
    if (callState === "joined") {
      setDuration(0);
      timerRef.current = setInterval(() => {
        setDuration((d) => d + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [callState]);

  // Listen for call errors
  useEffect(() => {
    if (!call) return;
    const unsubscribe = call.on("call.error" as any, (event: any) => {
      console.error("Call error:", event);
      setError(
        event?.error?.message ?? event?.message ?? "An unexpected error occurred"
      );
    });
    return () => {
      unsubscribe();
    };
  }, [call]);

  // Cleanup on unmount: leave call if still connected
  useEffect(() => {
    return () => {
      const activeCall = callRef.current;
      if (activeCall && activeCall.state.callingState !== CallingState.LEFT) {
        activeCall.leave().catch((err) => console.error("Cleanup leave failed:", err));
      }
      callRef.current = null;
    };
  }, []);

  const createAndJoinCall = useCallback(async () => {
    if (!client || !user || !getToken) {
      setError("Not authenticated");
      return;
    }

    setError(null);

    try {
      // 1. Create the call via server API (validates Clerk session, creates Stream call)
      const sessionToken = await getToken();
      if (!sessionToken) {
        setError("No session token");
        return;
      }

      const callId = `lesson-${lessonId}-${user.id}`;

      const res = await fetch(`${getBaseUrl()}/api/stream-call`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          callId,
          callType: "default",
          lessonId,
          languageId,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Failed to create call (${res.status})`);
      }

      // 2. Get or create the Call instance (reuseInstance handles duplicates)
      const streamCall = client.call("default", callId, { reuseInstance: true });
      setCall(streamCall);
      callRef.current = streamCall;

      // 3. Set a generous disconnection timeout for network hiccups
      streamCall.setDisconnectionTimeout(120);

      // 4. Join the call (create: true lets it work even if server-side call was just created)
      await streamCall.join({ create: true });
    } catch (err) {
      console.error("Failed to create/join call:", err);
      setError(err instanceof Error ? err.message : "Failed to start audio lesson");
    }
  }, [client, user, getToken, lessonId, languageId]);

  const toggleMic = useCallback(async () => {
    if (!call) return;
    try {
      await call.microphone.toggle();
    } catch (err) {
      console.error("Failed to toggle mic:", err);
      setError(err instanceof Error ? err.message : "Failed to toggle microphone");
    }
  }, [call]);

  const leave = useCallback(async () => {
    if (!call) return;
    try {
      if (call.state.callingState !== CallingState.LEFT) {
        await call.leave();
      }
    } catch (err) {
      console.error("Failed to leave call:", err);
    }
  }, [call]);

  const endCall = useCallback(async () => {
    if (!call) return;
    try {
      if (call.state.callingState !== CallingState.LEFT) {
        await call.leave();
      }
    } catch (err) {
      console.error("Failed to end call:", err);
    }
    callRef.current = null;
  }, [call]);

  return {
    call,
    callState,
    isMuted: isMute,
    error,
    duration,
    participants,
    localParticipant,
    createAndJoinCall,
    toggleMic,
    leave,
    endCall,
  };
}
