import { useEffect } from "react";
import { View, Text, Pressable } from "../../tw";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
} from "react-native-reanimated";

interface SpeechBubbleProps {
  text: string;
  onReplay?: () => void;
}

export default function SpeechBubble({ text, onReplay }: SpeechBubbleProps) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(12);

  useEffect(() => {
    opacity.value = withDelay(
      300,
      withTiming(1, { duration: 400, easing: Easing.out(Easing.cubic) })
    );
    translateY.value = withDelay(
      300,
      withTiming(0, { duration: 400, easing: Easing.out(Easing.cubic) })
    );
  }, [text, opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View
      style={animatedStyle}
      className="absolute bottom-4 left-4 right-4 z-10"
    >
      <View
        className="flex-row items-center rounded-2xl px-4 py-3"
        style={{
          backgroundColor: "#FFFFFF",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <View className="flex-1 mr-3">
          <Text className="text-[15px] font-semibold text-[#1F2746] leading-[1.4]">
            {text}
          </Text>
        </View>

        <Pressable
          className="w-[36px] h-[36px] rounded-full items-center justify-center"
          style={{ backgroundColor: "#F0EDFF" }}
          onPress={onReplay}
        >
          <Ionicons name="volume-high" size={18} color="#5B4CF6" />
        </Pressable>
      </View>

      <View
        className="absolute -bottom-2 left-10"
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 8,
          borderRightWidth: 8,
          borderTopWidth: 8,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderTopColor: "#FFFFFF",
        }}
      />
    </Animated.View>
  );
}
