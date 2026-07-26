import { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/expo";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StreamVideo,
  StreamVideoClient,
  type Theme,
  type DeepPartial,
  type User,
} from "@stream-io/video-react-native-sdk";

const STREAM_API_KEY = process.env.EXPO_PUBLIC_STREAM_API_KEY!;

function getBaseUrl(): string {
  const origin = process.env.EXPO_PUBLIC_SERVER_ORIGIN;
  if (origin) return origin;
  return "http://localhost:8081";
}

interface StreamVideoProviderProps {
  children: React.ReactNode;
}

export default function StreamVideoProvider({
  children,
}: StreamVideoProviderProps) {
  const { isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const insets = useSafeAreaInsets();
  const [client, setClient] = useState<StreamVideoClient>();

  useEffect(() => {
    if (!isSignedIn || !user) return;

    let cancelled = false;
    let current: StreamVideoClient | undefined;

    const streamUser: User = {
      id: `clerk_${user.id}`,
      name: user.firstName || user.username || "Learner",
      image: user.imageUrl,
    };

    const tokenProvider = async (): Promise<string> => {
      const sessionToken = await getToken();
      if (!sessionToken) throw new Error("No Clerk session token");

      const res = await fetch(`${getBaseUrl()}/api/stream-token`, {
        headers: { Authorization: `Bearer ${sessionToken}` },
      });

      if (!res.ok) {
        throw new Error(`Stream token request failed: ${res.status}`);
      }

      const data = await res.json();
      return data.token as string;
    };

    current = StreamVideoClient.getOrCreateInstance({
      apiKey: STREAM_API_KEY,
      user: streamUser,
      tokenProvider,
    });

    if (!cancelled) {
      setClient(current);
    }

    return () => {
      cancelled = true;
      current?.disconnectUser().catch((err) => console.error(err));
      setClient(undefined);
    };
  }, [isSignedIn, user?.id]);

  if (!client) return null;

  const theme = {
    variants: { insets: { top: insets.top, right: insets.right, bottom: insets.bottom, left: insets.left } },
  } as DeepPartial<Theme>;

  return (
    <StreamVideo client={client} style={theme}>
      {children}
    </StreamVideo>
  );
}
