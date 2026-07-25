import { View, Text, Pressable } from "../../tw";
import { Image } from "../../tw/image";
import { images } from "../../images";
import { useLanguageStore } from "../../stores/useLanguageStore";
import { getLanguageById } from "../../data/languages";
import { getUnitsByLanguage } from "../../data/units";

interface ContinueLearningCardProps {
  onPress?: () => void;
}

export default function ContinueLearningCard({
  onPress,
}: ContinueLearningCardProps) {
  const selectedLanguageId = useLanguageStore((s) => s.selectedLanguage);
  const language = selectedLanguageId
    ? getLanguageById(selectedLanguageId)
    : undefined;
  const units = selectedLanguageId
    ? getUnitsByLanguage(selectedLanguageId)
    : [];
  const currentUnit = units.length > 0 ? units[Math.min(2, units.length - 1)] : null;

  const languageName = language?.name || "Spanish";
  const level = language?.levels?.[0] || "A1";
  const unitTitle = currentUnit?.title || "Unit 3";

  return (
    <View className="mx-6 mb-5 rounded-[20px] overflow-hidden min-h-[170px]">
      <View className="flex-row bg-[#5B4CF6] min-h-[170px]">
        <View className="flex-1 p-5 justify-between">
          <View>
            <Text className="text-[13px] text-white/70 mb-1.5">
              Continue learning
            </Text>
            <Text className="font-bold text-[28px] text-white mb-1">
              {languageName}
            </Text>
            <Text className="text-[14px] text-white/80">
              {level} • {unitTitle}
            </Text>
          </View>

          <Pressable
            className="bg-white rounded-2xl py-3 px-6 self-start mt-4"
            onPress={onPress}
          >
            <Text className="font-semibold text-[15px] text-[#5B4CF6]">
              Continue
            </Text>
          </Pressable>
        </View>

        <View className="w-[140px] items-center justify-center">
          <Image
            source={images.palace}
            className="w-[140px] h-[170px]"
            contentFit="cover"
          />
        </View>
      </View>
    </View>
  );
}
