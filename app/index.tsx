import { useAuth, useUser } from "@clerk/expo";
import { Redirect, useRouter } from "expo-router";
import { View, Text, Pressable } from "../src/tw";
import { ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const { isSignedIn, isLoaded, signOut } = useAuth();
  const { user } = useUser();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  if (!isLoaded) {
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <ActivityIndicator size="large" color="#5B4CF6" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  const initials = ((user?.firstName?.[0] ?? "") + (user?.lastName?.[0] ?? "")).toUpperCase() || user?.emailAddresses?.[0]?.emailAddress?.[0]?.toUpperCase() || "?";

  return (
    <View className="flex-1 bg-surface">
      <View
        className="px-6"
        style={{ paddingTop: insets.top + 16, paddingBottom: insets.bottom + 16 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between mb-8">
          <Text className="font-bold text-[26px] text-text">Home</Text>
          <Pressable
            onPress={() => signOut()}
            className="flex-row items-center rounded-xl py-2.5 px-4"
            style={{ backgroundColor: "#FEF0F0" }}
          >
            <Ionicons name="log-out-outline" size={18} color="#D32F2F" />
            <Text className="text-[13px] font-semibold text-red-dark ml-1.5">
              Sign Out
            </Text>
          </Pressable>
        </View>

        {/* User Card */}
        <View
          className="rounded-2xl p-6 mb-6"
          style={{
            backgroundColor: "#FFFFFF",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 12,
            elevation: 3,
          }}
        >
          <View className="flex-row items-center mb-5">
            <View
              className="w-16 h-16 rounded-full items-center justify-center mr-4"
              style={{ backgroundColor: "#5B4CF6" }}
            >
              <Text className="font-bold text-white text-[22px]">{initials}</Text>
            </View>
            <View className="flex-1">
              <Text className="font-bold text-[18px] text-text mb-0.5">
                {user?.fullName || "User"}
              </Text>
              <Text className="text-[13px] text-text-secondary" numberOfLines={1}>
                {user?.emailAddresses?.[0]?.emailAddress || "No email"}
              </Text>
            </View>
          </View>

          {/* Stats */}
          <View className="flex-row">
            <View className="flex-1 items-center py-3 rounded-xl" style={{ backgroundColor: "#F7F7F7" }}>
              <Text className="font-bold text-[18px] text-brand mb-0.5">
                {user?.createdAt ? Math.floor((Date.now() - new Date(user.createdAt).getTime()) / 86400000) : 0}
              </Text>
              <Text className="text-[11px] text-text-secondary">Days Active</Text>
            </View>
            <View className="w-3" />
            <View className="flex-1 items-center py-3 rounded-xl" style={{ backgroundColor: "#F7F7F7" }}>
              <Text className="font-bold text-[18px] text-green mb-0.5">
                {user?.emailAddresses?.length || 0}
              </Text>
              <Text className="text-[11px] text-text-secondary">Emails</Text>
            </View>
            <View className="w-3" />
            <View className="flex-1 items-center py-3 rounded-xl" style={{ backgroundColor: "#F7F7F7" }}>
              <Text className="font-bold text-[18px] text-orange mb-0.5">
                {user?.phoneNumbers?.length || 0}
              </Text>
              <Text className="text-[11px] text-text-secondary">Phones</Text>
            </View>
          </View>
        </View>

        {/* User ID */}
        <View
          className="rounded-2xl p-5"
          style={{
            backgroundColor: "#FFFFFF",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 12,
            elevation: 3,
          }}
        >
          <Text className="text-[13px] font-medium text-text-secondary mb-2">
            User ID
          </Text>
          <Text className="text-[13px] text-text-tertiary" selectable>
            {user?.id || "N/A"}
          </Text>
        </View>

        {/* Select Language */}
        <Pressable
          className="flex-row items-center rounded-2xl p-5 mt-4"
          style={{
            backgroundColor: "#FFFFFF",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.06,
            shadowRadius: 12,
            elevation: 3,
          }}
          onPress={() => router.push("/language-select")}
        >
          <View
            className="w-12 h-12 rounded-full items-center justify-center mr-4"
            style={{ backgroundColor: "#F0EDFF" }}
          >
            <Ionicons name="globe-outline" size={22} color="#5B4CF6" />
          </View>
          <View className="flex-1">
            <Text className="font-semibold text-[16px] text-text mb-0.5">
              Select Language
            </Text>
            <Text className="text-[13px] text-text-secondary">
              Choose what to learn
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#C4C4C4" />
        </Pressable>
      </View>
    </View>
  );
}
