import { useCallback, useEffect } from "react";
import { ActivityIndicator } from "react-native";
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
import { useAudioCall, type CallState } from "../../hooks/useAudioCall";

interface AudioLessonScreenProps {
  lesson: Lesson;
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function statusLabel(state: CallState): string {
  switch (state) {
    case "connecting":
      return "Connecting...";
    case "joined":
      return "Online";
    case "reconnecting":
      return "Reconnecting...";
    case "error":
      return "Error";
    case "ended":
      return "Ended";
    default:
      return "Preparing...";
  }
}

function statusColor(state: CallState): string {
  switch (state) {
    case "joined":
      return "#4CAF50";
    case "connecting":
    case "reconnecting":
      return "#FFC800";
    case "error":
    case "ended":
      return "#FF4B4B";
    default:
      return "#8E93A8";
  }
}

export default function AudioLessonScreen({ lesson }: AudioLessonScreenProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const language = getLanguageById(lesson.languageId);

  const {
    callState,
    isMuted,
    error,
    duration,
    createAndJoinCall,
    toggleMic,
    endCall,
  } = useAudioCall({
    lessonId: lesson.id,
    languageId: lesson.languageId,
  });

  // Auto-join when the screen mounts
  useEffect(() => {
    createAndJoinCall();
  }, [createAndJoinCall]);

  const openingLine = lesson.aiPrompt?.openingLine ?? "Hello! Let's practice together.";
  const currentSpeech = openingLine;

  const handleEndCall = useCallback(() => {
    endCall();
    setTimeout(() => router.back(), 600);
  }, [endCall, router]);

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
                style={{ backgroundColor: statusColor(callState) }}
              />
              <Text className="text-[12px] text-[#8E93A8]">
                {statusLabel(callState)}
              </Text>
              {callState === "joined" && duration > 0 && (
                <Text className="text-[12px] text-[#8E93A8] ml-1.5">
                  {formatDuration(duration)}
                </Text>
              )}
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
              <Ionicons name="videocam-off-outline" size={18} color="#8E93A8" />
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

        {/* Connecting overlay */}
        {callState === "connecting" && (
          <View className="mx-5 mb-3 rounded-2xl overflow-hidden" style={{ backgroundColor: "#FFF5EB" }}>
            <View className="items-center justify-center py-10">
              <ActivityIndicator size="large" color="#5B4CF6" />
              <Text className="text-[14px] text-[#8E93A8] mt-3">
                Joining audio lesson...
              </Text>
            </View>
          </View>
        )}

        {/* Error banner */}
        {callState === "error" && error && (
          <View
            className="mx-5 mb-3 rounded-2xl px-4 py-3"
            style={{ backgroundColor: "#FFF0F0" }}
          >
            <View className="flex-row items-center">
              <Ionicons name="alert-circle" size={18} color="#FF4B4B" />
              <Text className="text-[13px] text-[#FF4B4B] ml-2 flex-1">
                {error}
              </Text>
            </View>
            <Pressable
              className="mt-2 rounded-full py-2 items-center"
              style={{ backgroundColor: "#FF4B4B" }}
              onPress={createAndJoinCall}
            >
              <Text className="text-[13px] font-semibold text-white">Retry</Text>
            </Pressable>
          </View>
        )}

        {/* Teacher area */}
        <View className="relative">
          <TeacherPreview
            teacherName="Maria"
            language={language?.name ?? "Spanish"}
            sessionStatus={
              callState === "joined"
                ? "active"
                : callState === "connecting" || callState === "reconnecting"
                  ? "connecting"
                  : "ended"
            }
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

        {/* Muted speaking hint */}
        {isMuted && callState === "joined" && (
          <View className="mx-5 mb-2 rounded-xl px-4 py-2" style={{ backgroundColor: "#FFF8E1" }}>
            <View className="flex-row items-center">
              <Ionicons name="mic-off" size={14} color="#FFC800" />
              <Text className="text-[12px] text-[#8E93A8] ml-2">
                You are muted. Tap the mic to speak.
              </Text>
            </View>
          </View>
        )}

        {/* Call controls */}
        <CallControls
          isMuted={isMuted}
          isCameraOff={true}
          showSubtitles={false}
          onToggleMic={toggleMic}
          onToggleCamera={() => {}}
          onToggleSubtitles={() => {}}
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
