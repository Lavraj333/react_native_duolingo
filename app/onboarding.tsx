import { Pressable, Text, View } from "../src/tw";
import { Image } from "../src/tw/image";

import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const PURPLE = "#5B4CF6";
const NAVY = "#1F2746";
const GRAY = "#8E93A8";
const DOT_INACTIVE = "#D4D5DC";

function SpeechBubble({
  children,
  color,
  style,
}: {
  children: React.ReactNode;
  color: string;
  style?: object;
}) {
  return (
    <View
      className="absolute bg-white px-4 py-2.5 rounded-2xl"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        ...style,
      }}
    >
      <Text className="font-bold text-[13px]" style={{ color }}>
        {children}
      </Text>
    </View>
  );
}

function PaginationDots() {
  return (
    <View className="flex-row items-center justify-center gap-2">
      {[0, 1, 2, 3].map((i) => (
        <View
          key={i}
          className="rounded-full"
          style={{
            width: i === 0 ? 10 : 8,
            height: i === 0 ? 10 : 8,
            backgroundColor: i === 0 ? PURPLE : DOT_INACTIVE,
          }}
        />
      ))}
    </View>
  );
}

export default function Onboarding() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <View
        className="flex-1 px-7 pt-3 pb-2"
        style={{
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 8,
        }}
      >
        <View className="flex-row items-center justify-center mb-4">
          <Image
            source={require("../assets/images/moscot-logo.png")}
            className="w-11 h-11"
            contentFit="contain"
          />
          <Text className="font-bold text-[28px] ml-2" style={{ color: NAVY }}>
            muolingo
          </Text>
        </View>

        <View className="mb-2">
          <Text
            className="font-bold text-[30px] leading-[1.15]"
            style={{ color: NAVY }}
          >
            Your AI language
          </Text>
          <Text
            className="font-bold text-[30px] leading-[1.15]"
            style={{ color: PURPLE }}
          >
            teacher.
          </Text>
        </View>

        <Text
          className="text-[15px] leading-[1.5] mb-3"
          style={{ color: GRAY }}
        >
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>

        <View className="flex-1 items-center justify-center">
          <View className="relative w-[280px] h-[260px]">
            <SpeechBubble
              color={NAVY}
              style={{ top: 8, left: -16, transform: [{ rotate: "-8deg" }] }}
            >
              Hello!
            </SpeechBubble>

            <SpeechBubble
              color={PURPLE}
              style={{ top: -4, right: -8, transform: [{ rotate: "5deg" }] }}
            >
              ¡Hola!
            </SpeechBubble>

            <SpeechBubble
              color="#FF4B4B"
              style={{
                top: 72,
                right: -20,
                transform: [{ rotate: "-4deg" }],
              }}
            >
              你好!
            </SpeechBubble>

            <Image
              source={require("../assets/images/mascot-welcome.png")}
              className="w-full h-full"
              contentFit="contain"
            />
          </View>
        </View>

        <View className="mb-2">
          <PaginationDots />
        </View>
      </View>

      <View
        className="px-7 items-center"
        style={{ paddingBottom: insets.bottom + 12 }}
      >
        <Pressable
          className="w-full rounded-[20px] py-[18px] active:opacity-90"
          style={{
            backgroundColor: PURPLE,
            shadowColor: PURPLE,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 6,
          }}
          onPress={() => router.push("/sign-in")}
        >
          <View className="flex-row items-center justify-center relative">
            <Text className="font-semibold text-white text-[17px]">
              Get Started
            </Text>
            <View className="absolute right-6">
              <Ionicons name="arrow-forward" size={20} color="white" />
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
