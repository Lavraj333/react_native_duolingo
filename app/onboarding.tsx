import { View, Text, Pressable } from "../src/tw";
import { Image } from "../src/tw/image";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

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
      <View className="rounded-full w-[10px] h-[10px] bg-[#5B4CF6]" />
      {[1, 2, 3].map((i) => (
        <View key={i} className="rounded-full w-2 h-2 bg-[#D4D5DC]" />
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
          <Text className="font-bold text-[28px] ml-2 text-[#1F2746]">
            muolingo
          </Text>
        </View>

        <View className="mb-2">
          <Text className="font-bold text-[30px] leading-[1.15] text-[#1F2746]">
            Your AI language
          </Text>
          <Text className="font-bold text-[30px] leading-[1.15] text-[#5B4CF6]">
            teacher.
          </Text>
        </View>

        <Text className="text-[15px] leading-[1.5] mb-3 text-[#8E93A8]">
          Real conversations, personalized{"\n"}lessons, anytime, anywhere.
        </Text>

        <View className="flex-1 items-center justify-center">
          <View className="relative w-[280px] h-[260px]">
            <SpeechBubble
              color="#1F2746"
              style={{ top: 8, left: -16, transform: [{ rotate: "-8deg" }] }}
            >
              Hello!
            </SpeechBubble>

            <SpeechBubble
              color="#5B4CF6"
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
          className="w-full rounded-[20px] py-[18px] active:opacity-90 bg-[#5B4CF6]"
          style={{
            shadowColor: "#5B4CF6",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 6,
          }}
          onPress={() => router.push("/sign-up")}
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
