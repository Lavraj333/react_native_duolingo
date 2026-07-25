import { View, Text } from "../../src/tw";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileTab() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <View
        style={{ paddingBottom: insets.bottom + 80 }}
        className="items-center"
      >
        <Text className="font-bold text-[24px] text-[#1F2746]">Profile</Text>
        <Text className="text-[14px] text-[#8E93A8] mt-2">
          Your profile coming soon
        </Text>
      </View>
    </View>
  );
}
