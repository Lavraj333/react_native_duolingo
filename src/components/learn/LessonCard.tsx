import { View, Text, Pressable } from "../../tw";
import { Ionicons } from "@expo/vector-icons";
import type { Lesson, LessonStatus } from "../../types/learning";

interface LessonCardProps {
  lesson: Lesson;
  status: LessonStatus;
  index: number;
  onPress: (lesson: Lesson) => void;
}

const LESSON_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  greetings: "hand-left-outline",
  daily: "sunny-outline",
  cafe: "cafe-outline",
  travel: "airplane-outline",
  shopping: "cart-outline",
  family: "people-outline",
  basics: "book-outline",
};

function getLessonIcon(title: string): keyof typeof Ionicons.glyphMap {
  const lower = title.toLowerCase();
  for (const [key, icon] of Object.entries(LESSON_ICONS)) {
    if (lower.includes(key)) return icon;
  }
  return "book-outline";
}

export default function LessonCard({ lesson, status, index, onPress }: LessonCardProps) {
  const icon = getLessonIcon(lesson.title);
  const isCompleted = status === "completed";
  const isInProgress = status === "in_progress";
  const isLocked = status === "locked";

  const cardBg = isInProgress ? "#F5F3FF" : "#FFFFFF";
  const borderColor = isInProgress ? "#5B4CF6" : isCompleted ? "#E8F5E9" : "#F0F0F0";
  const borderWidth = isInProgress ? 2 : 1;

  return (
    <Pressable
      className="flex-row items-center rounded-[16px] px-4 py-4 mb-3"
      style={{
        backgroundColor: cardBg,
        borderWidth,
        borderColor,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1,
        opacity: isLocked ? 0.6 : 1,
      }}
      onPress={() => onPress(lesson)}
    >
      {/* Icon circle */}
      <View
        className="w-[48px] h-[48px] rounded-full items-center justify-center mr-3"
        style={{
          backgroundColor: isCompleted
            ? "#E8F5E9"
            : isInProgress
              ? "#5B4CF6"
              : "#F0F0F0",
        }}
      >
        {isCompleted ? (
          <Ionicons name="checkmark-circle" size={28} color="#4CAF50" />
        ) : isLocked ? (
          <Ionicons name="lock-closed" size={20} color="#C4C4C4" />
        ) : (
          <Ionicons name={icon} size={22} color="#FFFFFF" />
        )}
      </View>

      {/* Title + subtitle */}
      <View className="flex-1">
        <Text
          className="font-semibold text-[16px] mb-0.5"
          style={{ color: isLocked ? "#B0B3C5" : "#1F2746" }}
          numberOfLines={1}
        >
          {lesson.title}
        </Text>
        <Text className="text-[13px] text-[#8E93A8]">
          {isCompleted
            ? `${lesson.activities.length}/${lesson.activities.length} lessons`
            : isInProgress
              ? `${Math.floor(lesson.activities.length * 0.5)}/${lesson.activities.length} lessons`
              : `0/${lesson.activities.length} lessons`}
        </Text>
      </View>

      {/* Right badge */}
      {isCompleted ? (
        <View
          className="w-[28px] h-[28px] rounded-full items-center justify-center"
          style={{ backgroundColor: "#4CAF50" }}
        >
          <Ionicons name="checkmark" size={16} color="#FFFFFF" />
        </View>
      ) : isInProgress ? (
        <View className="flex-row items-center">
          <View
            className="w-[28px] h-[28px] rounded-full items-center justify-center"
            style={{ backgroundColor: "#5B4CF6" }}
          >
            <Ionicons name="play" size={14} color="#FFFFFF" />
          </View>
        </View>
      ) : (
        <Ionicons name="lock-closed" size={18} color="#C4C4C4" />
      )}
    </Pressable>
  );
}
