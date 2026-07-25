import { View, Text } from "../../tw";
import { Image } from "../../tw/image";
import { images } from "../../images";

interface DailyGoalCardProps {
  currentXP?: number;
  targetXP?: number;
}

export default function DailyGoalCard({
  currentXP = 15,
  targetXP = 20,
}: DailyGoalCardProps) {
  const progress = targetXP > 0 ? Math.min(currentXP / targetXP, 1) : 0;

  return (
    <View className="mx-6 mb-5 rounded-[20px] p-5 flex-row items-center overflow-hidden bg-[#FFF7ED]">
      <View className="flex-1 mr-4">
        <Text className="font-semibold text-[15px] text-[#8E93A8] mb-3">
          Daily goal
        </Text>
        <View className="flex-row items-baseline mb-3">
          <Text className="font-bold text-[28px] text-[#1F2746]">
            {currentXP}
          </Text>
          <Text className="text-[16px] text-[#8E93A8] ml-1.5">
            / {targetXP} XP
          </Text>
        </View>
        <View className="h-[10px] rounded-full overflow-hidden bg-[#F0E0CC]">
          <View
            className="h-full rounded-full bg-[#FF8A00]"
            style={{ width: `${progress * 100}%` }}
          />
        </View>
      </View>

      <View className="w-20 h-20 items-center justify-center">
        <Image
          source={images.treasure}
          className="w-20 h-20"
          contentFit="contain"
        />
      </View>
    </View>
  );
}
