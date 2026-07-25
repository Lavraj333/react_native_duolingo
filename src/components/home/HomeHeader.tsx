import { View, Text, Pressable } from "../../tw";
import { Image } from "../../tw/image";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@clerk/expo";
import { useLanguageStore } from "../../stores/useLanguageStore";
import { getLanguageById } from "../../data/languages";

interface HomeHeaderProps {
  streak?: number;
}

export default function HomeHeader({ streak = 12 }: HomeHeaderProps) {
  const { user } = useUser();
  const selectedLanguageId = useLanguageStore((s) => s.selectedLanguage);
  const language = selectedLanguageId
    ? getLanguageById(selectedLanguageId)
    : undefined;

  const firstName = user?.firstName || "Learner";

  return (
    <View className="flex-row items-center justify-between px-6 mb-5">
      <View className="flex-row items-center flex-1">
        <View className="w-[46px] h-[46px] rounded-full items-center justify-center mr-3 bg-[#F0F0F0]">
          <Text className="text-[22px]">{language?.flag || "🌍"}</Text>
        </View>
        <Text className="font-bold text-[22px] text-[#1F2746]" numberOfLines={1}>
          Hola, {firstName}! 👋
        </Text>
      </View>

      <View className="flex-row items-center">
        <View className="flex-row items-center mr-4">
          <Image
            source={require("../../../assets/images/streak-fire.png")}
            className="w-6 h-6"
            contentFit="contain"
          />
          <Text className="font-bold text-[16px] text-[#FF8A00] ml-1">
            {streak}
          </Text>
        </View>

        <Pressable className="w-[40px] h-[40px] items-center justify-center">
          <Ionicons name="notifications-outline" size={24} color="#1F2746" />
        </Pressable>
      </View>
    </View>
  );
}
