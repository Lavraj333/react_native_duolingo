import { View, ScrollView } from "../../src/tw";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "../../src/components/home/HomeHeader";
import DailyGoalCard from "../../src/components/home/DailyGoalCard";
import ContinueLearningCard from "../../src/components/home/ContinueLearningCard";
import TodaysPlanSection from "../../src/components/home/TodaysPlanSection";

export default function HomeTab() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: insets.top + 8, paddingBottom: insets.bottom + 100 }}
      >
        <HomeHeader streak={12} />
        <DailyGoalCard currentXP={15} targetXP={20} />
        <ContinueLearningCard />
        <TodaysPlanSection />
      </ScrollView>
    </View>
  );
}
