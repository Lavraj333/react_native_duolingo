import { Pressable, View, Text } from "../../tw";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const BRAND = "#5B4CF6";
const INACTIVE = "#8E93A8";
const CIRCLE_SIZE = 44;

const TABS = [
  { route: "index", label: "Home", icon: "home-outline" as const, iconActive: "home" as const },
  { route: "learn", label: "Learn", icon: "book-outline" as const, iconActive: "book" as const },
  { route: "ai-teacher", label: "AI Teacher", icon: "sparkles-outline" as const, iconActive: "sparkles" as const },
  { route: "chat", label: "Chat", icon: "chatbubble-outline" as const, iconActive: "chatbubble" as const },
  { route: "profile", label: "Profile", icon: "person-outline" as const, iconActive: "person" as const },
];

interface SessionBottomNavProps {
  onNavigate: (route: string) => void;
}

export default function SessionBottomNav({ onNavigate }: SessionBottomNavProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingBottom: insets.bottom,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 10,
      }}
    >
      <View
        className="flex-row"
        style={{ paddingTop: 10, paddingBottom: 4 }}
      >
        {TABS.map((tab) => {
          const isActive = tab.route === "ai-teacher";
          return (
            <Pressable
              key={tab.route}
              className="flex-1 items-center"
              style={{ paddingVertical: 4 }}
              onPress={() => onNavigate(tab.route)}
            >
              <View
                style={{
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
                  borderRadius: CIRCLE_SIZE / 2,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: isActive ? BRAND : "transparent",
                }}
              >
                <Ionicons
                  name={isActive ? tab.iconActive : tab.icon}
                  size={20}
                  color={isActive ? "#FFFFFF" : INACTIVE}
                />
              </View>
              <Text
                style={{
                  fontSize: 10,
                  lineHeight: 16,
                  marginTop: 2,
                  color: isActive ? BRAND : INACTIVE,
                  fontWeight: isActive ? "600" : "400",
                }}
                numberOfLines={1}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
