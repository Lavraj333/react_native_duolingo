import React, { useState, useCallback, useRef, useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const BRAND = "#5B4CF6";
const INACTIVE = "#8E93A8";
const CIRCLE_SIZE = 48;

const TABS = [
  { route: "index", label: "Home", icon: "home-outline" as const, iconActive: "home" as const },
  { route: "learn", label: "Learn", icon: "book-outline" as const, iconActive: "book" as const },
  { route: "ai-teacher", label: "AI Teacher", icon: "sparkles-outline" as const, iconActive: "sparkles" as const },
  { route: "chat", label: "Chat", icon: "chatbubble-outline" as const, iconActive: "chatbubble" as const },
  { route: "profile", label: "Profile", icon: "person-outline" as const, iconActive: "person" as const },
];

function CustomTabBar({ state, navigation }: any) {
  const insets = useSafeAreaInsets();
  const [tabLayouts, setTabLayouts] = useState<
    { x: number; width: number }[]
  >([]);
  const circleX = useSharedValue(0);
  const initialized = useRef(false);
  const prevIndex = useRef(state.index);

  const onTabLayout = useCallback(
    (index: number, x: number, width: number) => {
      setTabLayouts((prev) => {
        const next = [...prev];
        next[index] = { x, width };
        return next;
      });
    },
    []
  );

  useEffect(() => {
    const layout = tabLayouts[state.index];
    if (!layout) return;

    if (!initialized.current) {
      circleX.value = layout.x;
      initialized.current = true;
      prevIndex.current = state.index;
      return;
    }

    if (state.index !== prevIndex.current) {
      circleX.value = withTiming(layout.x, {
        duration: 250,
        easing: Easing.linear,
      });
      prevIndex.current = state.index;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.index, tabLayouts]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: circleX.value }],
  }));

  const activeLayout = tabLayouts[state.index];

  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
      <View style={styles.tabBarInner}>
        {activeLayout && (
          <Animated.View
            style={[
              styles.indicator,
              { width: activeLayout.width },
              indicatorStyle,
            ]}
          />
        )}

        {TABS.map((tab, index) => {
          const focused = state.index === index;
          return (
            <Pressable
              key={tab.route}
              style={styles.tabItem}
              onLayout={(e) => {
                const { x, width } = e.nativeEvent.layout;
                onTabLayout(index, x, width);
              }}
              onPress={() => navigation.navigate(tab.route)}
            >
              <View style={styles.iconContainer}>
                {focused ? (
                  <View style={styles.activeCircle}>
                    <Ionicons name={tab.iconActive} size={22} color="#FFFFFF" />
                  </View>
                ) : (
                  <Ionicons name={tab.icon} size={22} color={INACTIVE} />
                )}
              </View>
              <View style={styles.labelContainer}>
                <Animated.Text
                  style={[
                    styles.label,
                    { color: focused ? BRAND : INACTIVE },
                    focused && styles.labelBold,
                  ]}
                  numberOfLines={1}
                >
                  {tab.label}
                </Animated.Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="learn" options={{ title: "Learn" }} />
      <Tabs.Screen name="ai-teacher" options={{ title: "AI Teacher" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 10,
  },
  tabBarInner: {
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 6,
    position: "relative",
  },
  indicator: {
    position: "absolute",
    top: 14,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: BRAND,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  activeCircle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: BRAND,
    alignItems: "center",
    justifyContent: "center",
  },
  labelContainer: {
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    zIndex: 1,
  },
  label: {
    fontSize: 10,
    lineHeight: 18,
  },
  labelBold: {
    fontWeight: "600",
  },
});
