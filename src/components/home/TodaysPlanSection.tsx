import { View, Text, Pressable } from "../../tw";
import { Ionicons } from "@expo/vector-icons";
import { useLanguageStore } from "../../stores/useLanguageStore";
import { getLessonsByLanguage } from "../../data/lessons";

interface TaskItem {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  iconBg: string;
  title: string;
  subtitle: string;
  completed: boolean;
}

interface TodaysPlanSectionProps {
  onTaskPress?: (taskId: string) => void;
  onViewAll?: () => void;
}

export default function TodaysPlanSection({
  onTaskPress,
  onViewAll,
}: TodaysPlanSectionProps) {
  const selectedLanguageId = useLanguageStore((s) => s.selectedLanguage);
  const lessons = selectedLanguageId
    ? getLessonsByLanguage(selectedLanguageId)
    : [];
  const firstLesson = lessons[0];

  const tasks: TaskItem[] = [
    {
      id: "lesson",
      icon: "book",
      iconColor: "#5B4CF6",
      iconBg: "#F0EDFF",
      title: "Lesson",
      subtitle: firstLesson?.title || "At the café",
      completed: true,
    },
    {
      id: "ai-conversation",
      icon: "headset",
      iconColor: "#5B4CF6",
      iconBg: "#F0EDFF",
      title: "AI Conversation",
      subtitle: "Talk about your day",
      completed: false,
    },
    {
      id: "new-words",
      icon: "chatbubble",
      iconColor: "#FF4B4B",
      iconBg: "#FFE0E0",
      title: "New words",
      subtitle: `${firstLesson?.vocabulary?.length || 10} words`,
      completed: false,
    },
  ];

  return (
    <View className="mx-6 mb-5">
      <View className="flex-row items-center justify-between mb-3">
        <Text className="font-bold text-[18px] text-[#1F2746]">
          Today&apos;s plan
        </Text>
        <Pressable onPress={onViewAll}>
          <Text className="font-semibold text-[14px] text-[#5B4CF6]">
            View all
          </Text>
        </Pressable>
      </View>

      <View
        className="rounded-[20px] bg-white overflow-hidden border border-[#F0F0F0]"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.06,
          shadowRadius: 8,
          elevation: 2,
        }}
      >
        {tasks.map((task, index) => (
          <Pressable
            key={task.id}
            className="flex-row items-center px-4 py-4 border-b border-[#F0F0F0]"
            style={{
              borderBottomWidth: index < tasks.length - 1 ? 1 : 0,
            }}
            onPress={() => onTaskPress?.(task.id)}
          >
            <View
              className="w-[44px] h-[44px] rounded-xl items-center justify-center mr-3"
              style={{ backgroundColor: task.iconBg }}
            >
              <Ionicons name={task.icon} size={20} color={task.iconColor} />
            </View>

            <View className="flex-1">
              <Text className="font-semibold text-[15px] text-[#1F2746]">
                {task.title}
              </Text>
              <Text className="text-[13px] text-[#8E93A8] mt-0.5">
                {task.subtitle}
              </Text>
            </View>

            {task.completed ? (
              <View className="w-[28px] h-[28px] rounded-full items-center justify-center bg-[#5B4CF6]">
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              </View>
            ) : (
              <View className="w-[28px] h-[28px] rounded-full border-2 border-[#D4D5DC]" />
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
}
