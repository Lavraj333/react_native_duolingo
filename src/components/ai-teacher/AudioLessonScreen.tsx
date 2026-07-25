import { useState, useCallback } from "react";
import { View, Text, Pressable, ScrollView } from "../../tw";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import type { Lesson } from "../../types/learning";
import { getLanguageById } from "../../data/languages";
import TeacherPreview from "./TeacherPreview";
import SpeechBubble from "./SpeechBubble";
import CallControls from "./CallControls";
import PerformanceCard from "./PerformanceCard";
import SessionBottomNav from "./SessionBottomNav";

interface AudioLessonScreenProps {
  lesson: Lesson;
}

export default function AudioLessonScreen({ lesson }: AudioLessonScreenProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const language = getLanguageById(lesson.languageId);

  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(true);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [sessionStatus, setSessionStatus] = useState<"connecting" | "active" | "ended">("active");

  const openingLine = lesson.aiPrompt?.openingLine ?? "Hello! Let's practice together.";
  const [currentSpeech] = useState(openingLine);

  const handleEndCall = useCallback(() => {
    setSessionStatus("ended");
    setTimeout(() => router.back(), 600);
  }, [router]);

  const handleNavigate = useCallback(
    (route: string) => {
      router.dismissAll();
      if (route === "ai-teacher") return;
      router.replace(`/(tabs)/${route}` as any);
    },
    [router]
  );

  const goalText =
    lesson.goals.length > 0 ? lesson.goals[0].description : "Practice speaking";

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top,
          paddingBottom: 160,
        }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 mb-3">
          <Pressable
            className="w-[40px] h-[40px] rounded-full items-center justify-center"
            style={{
              backgroundColor: "#F6F6F8",
            }}
            onPress={handleEndCall}
          >
            <Ionicons name="arrow-back" size={20} color="#1F2746" />
          </Pressable>

          <View className="items-center flex-1 mx-2">
            <Text className="font-bold text-[18px] text-[#1F2746]">
              AI Teacher
            </Text>
            <View className="flex-row items-center mt-0.5">
              <View
                className="w-[6px] h-[6px] rounded-full mr-1.5"
                style={{
                  backgroundColor:
                    sessionStatus === "active"
                      ? "#4CAF50"
                      : sessionStatus === "connecting"
                        ? "#FFC800"
                        : "#FF4B4B",
                }}
              />
              <Text className="text-[12px] text-[#8E93A8]">
                {sessionStatus === "active"
                  ? "Online"
                  : sessionStatus === "connecting"
                    ? "Connecting..."
                    : "Ended"}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center">
            <View
              className="w-[38px] h-[38px] rounded-full items-center justify-center mr-2"
              style={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#F0F0F0",
              }}
            >
              <Ionicons name="videocam-outline" size={18} color="#1F2746" />
            </View>
            <View
              className="w-[38px] h-[38px] rounded-full items-center justify-center mr-2"
              style={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#F0F0F0",
              }}
            >
              <Ionicons name="flame-outline" size={18} color="#FF8A00" />
              <Text
                className="text-[10px] font-bold"
                style={{
                  position: "absolute",
                  top: -2,
                  right: -2,
                  color: "#FF8A00",
                }}
              >
                12
              </Text>
            </View>
            <View
              className="w-[38px] h-[38px] rounded-full items-center justify-center"
              style={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#F0F0F0",
              }}
            >
              <Ionicons name="notifications-outline" size={18} color="#1F2746" />
            </View>
          </View>
        </View>

        {/* Lesson info strip */}
        <View className="flex-row items-center px-5 mb-3">
          {language && (
            <View
              className="flex-row items-center px-2.5 py-1 rounded-full mr-2"
              style={{ backgroundColor: "#F0EDFF" }}
            >
              <Text className="text-[12px] mr-1">{language.flag}</Text>
              <Text className="text-[11px] font-semibold text-[#5B4CF6]">
                {language.name}
              </Text>
            </View>
          )}
          <Text
            className="text-[12px] font-medium text-[#1F2746] flex-1"
            numberOfLines={1}
          >
            {lesson.title}
          </Text>
          <Text className="text-[11px] text-[#8E93A8]">
            {lesson.estimatedMinutes} min
          </Text>
        </View>

        {/* Teacher area */}
        <View className="relative">
          <TeacherPreview
            teacherName="Maria"
            language={language?.name ?? "Spanish"}
            sessionStatus={sessionStatus}
          />

          <SpeechBubble text={currentSpeech} />
        </View>

        {/* Goals / topic chips */}
        <View className="flex-row flex-wrap px-5 mt-3 mb-1">
          {lesson.goals.slice(0, 3).map((goal) => (
            <View
              key={goal.id}
              className="px-3 py-1.5 rounded-full mr-2 mb-1.5"
              style={{ backgroundColor: "#F6F6F8" }}
            >
              <Text className="text-[11px] text-[#8E93A8]">
                {goal.type === "conversation" && "🗣 "}
                {goal.type === "vocabulary" && "📚 "}
                {goal.type === "grammar" && "✏️ "}
                {goal.type === "culture" && "🌍 "}
                {goalText === goal.description ? "" : ""}
                {goal.description}
              </Text>
            </View>
          ))}
        </View>

        {/* Call controls */}
        <CallControls
          isMuted={isMuted}
          isCameraOff={isCameraOff}
          showSubtitles={showSubtitles}
          onToggleMic={() => setIsMuted((prev) => !prev)}
          onToggleCamera={() => setIsCameraOff((prev) => !prev)}
          onToggleSubtitles={() => setShowSubtitles((prev) => !prev)}
          onEndCall={handleEndCall}
        />

        {/* Performance card */}
        <PerformanceCard />
      </ScrollView>

      {/* Bottom nav */}
      <SessionBottomNav onNavigate={handleNavigate} />
    </View>
  );
}
