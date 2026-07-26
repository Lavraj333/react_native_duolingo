import { useEffect } from "react";
import { View, Text } from "../../tw";
import { Image } from "../../tw/image";
import { images } from "../../images";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withRepeat,
  withSequence,
  Easing,
} from "react-native-reanimated";

interface TeacherPreviewProps {
  teacherName: string;
  language: string;
  sessionStatus: "connecting" | "active" | "ended";
}

export default function TeacherPreview({
  teacherName,
  language,
  sessionStatus,
}: TeacherPreviewProps) {
  const scale = useSharedValue(0.85);

  useEffect(() => {
    scale.value = withDelay(
      200,
      withRepeat(
        withSequence(
          withTiming(1, { duration: 800, easing: Easing.out(Easing.cubic) }),
          withTiming(0.97, { duration: 1200, easing: Easing.inOut(Easing.cubic) }),
          withTiming(1, { duration: 800, easing: Easing.inOut(Easing.cubic) })
        ),
        -1,
        true
      )
    );
  }, [scale]);

  const teacherAnimStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const statusColor = sessionStatus === "active" ? "#4CAF50" : sessionStatus === "connecting" ? "#FFC800" : "#FF4B4B";
  const statusLabel = sessionStatus === "active" ? "Live" : sessionStatus === "connecting" ? "Connecting..." : "Ended";

  return (
    <View
      className="mx-5 rounded-[20px] overflow-hidden"
      style={{
        height: 320,
        backgroundColor: "#FFF5EB",
      }}
    >
      <View
        className="absolute inset-0"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <View
          className="absolute inset-0"
          style={{
            backgroundColor: "#FFF5EB",
          }}
        />
        <View
          className="absolute"
          style={{
            bottom: 0,
            left: 0,
            right: 0,
            height: 160,
            backgroundColor: "#FFE8D6",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        />
      </View>

      {/* Session status badge */}
      <View className="flex-row justify-between items-start px-4 pt-4 z-10">
        <View className="flex-row items-center">
          <View
            className="w-2 h-2 rounded-full mr-2"
            style={{ backgroundColor: statusColor }}
          />
          <Text className="text-[12px] font-medium text-[#1F2746]/70">
            {statusLabel}
          </Text>
        </View>
        <View
          className="px-3 py-1 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
        >
          <Text className="text-[11px] font-semibold text-[#1F2746]">
            {language}
          </Text>
        </View>
      </View>

      {/* AI Teacher */}
      <Animated.View
        style={[teacherAnimStyle, { alignItems: "center", justifyContent: "center", flex: 1 }]}
        className="z-10"
        accessible
        accessibilityLabel={`AI teacher ${teacherName}`}
      >
        <Image
          source={images.foxTeacher}
          style={{
            width: 200,
            height: 260,
          }}
          contentFit="contain"
        />
      </Animated.View>

      {/* Teacher name tag */}
      <View className="absolute bottom-4 left-4 z-10 flex-row items-center">
        <View
          className="w-[32px] h-[32px] rounded-full items-center justify-center mr-2"
          style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
        >
          <Ionicons name="sparkles" size={16} color="#5B4CF6" />
        </View>
        <View>
          <Text className="text-[13px] font-semibold text-[#1F2746]">
            {teacherName}
          </Text>
          <Text className="text-[10px] text-[#8E93A8]">AI Tutor</Text>
        </View>
      </View>
    </View>
  );
}
