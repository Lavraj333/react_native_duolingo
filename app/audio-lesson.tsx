import { useEffect } from "react";
import { View, Text } from "../src/tw";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getLessonById } from "../src/data/lessons";
import AudioLessonScreen from "../src/components/ai-teacher/AudioLessonScreen";

export default function AudioLessonRoute() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const lesson = lessonId ? getLessonById(lessonId) : undefined;

  useEffect(() => {
    if (lessonId && !lesson) {
      router.back();
    }
  }, [lessonId, lesson, router]);

  if (!lesson) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <View style={{ paddingBottom: insets.bottom }} className="items-center">
          <Text className="font-bold text-[18px] text-[#1F2746]">
            Lesson not found
          </Text>
        </View>
      </View>
    );
  }

  return <AudioLessonScreen lesson={lesson} />;
}
