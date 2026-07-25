import { View, Text, Pressable } from "../../tw";

export type TabType = "lessons" | "practice";

interface LessonTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function LessonTabs({ activeTab, onTabChange }: LessonTabsProps) {
  return (
    <View className="flex-row px-6 mt-1 mb-3">
      <Pressable
        className="flex-1 items-center py-3"
        onPress={() => onTabChange("lessons")}
      >
        <Text
          className="text-[16px] font-semibold"
          style={{ color: activeTab === "lessons" ? "#1F2746" : "#8E93A8" }}
        >
          Lessons
        </Text>
        {activeTab === "lessons" && (
          <View
            className="mt-1 rounded-full"
            style={{ width: 40, height: 3, backgroundColor: "#5B4CF6" }}
          />
        )}
      </Pressable>

      <Pressable
        className="flex-1 items-center py-3"
        onPress={() => onTabChange("practice")}
      >
        <Text
          className="text-[16px] font-semibold"
          style={{ color: activeTab === "practice" ? "#1F2746" : "#8E93A8" }}
        >
          Practice
        </Text>
        {activeTab === "practice" && (
          <View
            className="mt-1 rounded-full"
            style={{ width: 40, height: 3, backgroundColor: "#5B4CF6" }}
          />
        )}
      </Pressable>
    </View>
  );
}
