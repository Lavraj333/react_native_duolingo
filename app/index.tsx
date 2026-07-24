import { View, Text, Link } from "../src/tw";

export default function Index() {
  return (
    <View className="flex-1 bg-background items-center justify-center p-6">
      <Link href="/onboarding" className="mb-4">
        <View className="bg-brand rounded-xl py-4 px-8 items-center">
          <Text className="font-bold text-white text-lg">Open Onboarding</Text>
        </View>
      </Link>
    </View>
  );
}
