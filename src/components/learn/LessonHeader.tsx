import { View, Text } from "../../tw";
import { Image } from "../../tw/image";
import { images } from "../../images";

interface LessonHeaderProps {
  unitTitle: string;
  unitOrder: number;
  completedCount: number;
  totalCount: number;
}

export default function LessonHeader({
  unitTitle,
  unitOrder,
  completedCount,
  totalCount,
}: LessonHeaderProps) {
  return (
    <View className="rounded-b-[24px] overflow-hidden" style={{ backgroundColor: "#5B4CF6" }}>
      <View style={{ minHeight: 180 }}>
        {/* Text content */}
        <View className="pl-6 pr-6 pt-6 pb-2">
          <Text className="text-white/70 text-[13px] mb-1">
            Unit {unitOrder}
          </Text>
          <Text className="font-bold text-white text-[26px] mb-1.5" numberOfLines={2}>
            {unitTitle}
          </Text>
          <Text className="text-white/80 text-[14px]">
            {completedCount} / {totalCount} lessons
          </Text>
        </View>

        {/* Illustration scene — palace background + mascot foreground */}
        <View className="absolute right-0 bottom-0 flex-row items-end" style={{ height: 140 }}>
          <Image
            source={images.palace}
            style={{ width: 140, height: 130 }}
            contentFit="contain"
          />
          <Image
            source={images.mascotWelcome}
            style={{ width: 100, height: 120, marginBottom: 0, marginLeft: -20 }}
            contentFit="contain"
          />
        </View>
      </View>
    </View>
  );
}
