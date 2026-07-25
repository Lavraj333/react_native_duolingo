import { useState } from "react";
import { Alert } from "react-native";
import { View, Text, ScrollView } from "../../tw";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLanguageStore } from "../../stores/useLanguageStore";
import { getLanguageById } from "../../data/languages";
import { getUnitsByLanguage } from "../../data/units";
import { getLessonsByUnit } from "../../data/lessons";
import { useLessonProgressStore } from "../../stores/useLessonProgressStore";
import LessonHeader from "./LessonHeader";
import LessonTabs, { type TabType } from "./LessonTabs";
import LessonCard from "./LessonCard";

export default function LessonScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<TabType>("lessons");

  const selectedLanguageId = useLanguageStore((s) => s.selectedLanguage);
  const language = selectedLanguageId ? getLanguageById(selectedLanguageId) : null;
  const units = selectedLanguageId ? getUnitsByLanguage(selectedLanguageId) : [];
  const currentUnit = units.length > 0 ? units[0] : null;
  const lessons = currentUnit ? getLessonsByUnit(currentUnit.id) : [];
  const sortedLessons = [...lessons].sort((a, b) => a.order - b.order);

  const getLessonStatus = useLessonProgressStore((s) => s.getLessonStatus);
  const getUnitProgress = useLessonProgressStore((s) => s.getUnitProgress);

  const unitProgress = currentUnit
    ? getUnitProgress(currentUnit.id)
    : { completed: 0, total: 0 };

  const handleLessonPress = (lesson: typeof sortedLessons[number]) => {
    const status = getLessonStatus(lesson.id);
    if (status === "locked") {
      Alert.alert("Lesson Locked", "Complete previous lessons to unlock this one.");
    } else {
      Alert.alert("Opening Lesson", `Starting: ${lesson.title}`);
    }
  };

  if (!language || !currentUnit) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <View style={{ paddingBottom: insets.bottom + 80 }} className="items-center">
          <Text className="font-bold text-[24px] text-[#1F2746]">Learn</Text>
          <Text className="text-[14px] text-[#8E93A8] mt-2">
            Select a language to start learning
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom + 100,
        }}
      >
        <LessonHeader
          unitTitle={currentUnit.title}
          unitOrder={currentUnit.order}
          completedCount={unitProgress.completed}
          totalCount={unitProgress.total}
        />

        <LessonTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "lessons" ? (
          <View className="px-6">
            {sortedLessons.map((lesson, index) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                status={getLessonStatus(lesson.id)}
                index={index}
                onPress={handleLessonPress}
              />
            ))}
          </View>
        ) : (
          <View className="px-6 items-center pt-16">
            <View
              className="w-[80px] h-[80px] rounded-full items-center justify-center mb-4"
              style={{ backgroundColor: "#F0EDFF" }}
            >
              <Text className="text-[36px]">🎯</Text>
            </View>
            <Text className="font-bold text-[20px] text-[#1F2746] mb-2">
              Practice Mode
            </Text>
            <Text className="text-[15px] text-[#8E93A8] text-center px-8">
              Practice exercises will be available here soon. Complete your lessons first!
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
