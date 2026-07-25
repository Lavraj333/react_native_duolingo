import { View, Text } from "../../tw";

interface PerformanceCardProps {
  speaking?: string;
  speakingColor?: string;
  pronunciation?: string;
  pronunciationColor?: string;
  grammar?: string;
  grammarColor?: string;
}

export default function PerformanceCard({
  speaking = "Excellent",
  speakingColor = "#4CAF50",
  pronunciation = "Great",
  pronunciationColor = "#2F80ED",
  grammar = "Good",
  grammarColor = "#5B4CF6",
}: PerformanceCardProps) {
  return (
    <View className="mx-6 mt-4">
      <View
        className="rounded-[20px] bg-white overflow-hidden"
        style={{
          borderWidth: 1,
          borderColor: "#F0F0F0",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.06,
          shadowRadius: 8,
          elevation: 2,
        }}
      >
        <View className="flex-row items-center py-4 px-2">
          {/* Speaking */}
          <View className="flex-1 items-center">
            <Text className="text-[12px] text-[#8E93A8] mb-1">
              Speaking
            </Text>
            <Text
              className="text-[16px] font-bold"
              style={{ color: speakingColor }}
            >
              {speaking}
            </Text>
          </View>

          {/* Divider */}
          <View
            style={{
              width: 1,
              height: 36,
              backgroundColor: "#F0F0F0",
            }}
          />

          {/* Pronunciation */}
          <View className="flex-1 items-center">
            <Text className="text-[12px] text-[#8E93A8] mb-1">
              Pronunciation
            </Text>
            <Text
              className="text-[16px] font-bold"
              style={{ color: pronunciationColor }}
            >
              {pronunciation}
            </Text>
          </View>

          {/* Divider */}
          <View
            style={{
              width: 1,
              height: 36,
              backgroundColor: "#F0F0F0",
            }}
          />

          {/* Grammar */}
          <View className="flex-1 items-center">
            <Text className="text-[12px] text-[#8E93A8] mb-1">
              Grammar
            </Text>
            <Text
              className="text-[16px] font-bold"
              style={{ color: grammarColor }}
            >
              {grammar}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
