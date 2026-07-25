import { useState, useMemo } from "react";
import { Dimensions } from "react-native";
import { View, Text, Pressable, ScrollView, TextInput } from "../src/tw";
import { Image } from "../src/tw/image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { languages, learnerCounts } from "../src/data/languages";
import { useLanguageStore } from "../src/stores/useLanguageStore";

export default function LanguageSelect() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const setSelectedLanguage = useLanguageStore((s) => s.setSelectedLanguage);
  const [selectedId, setSelectedId] = useState("spanish");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return languages;
    return languages.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.nativeName.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="px-7"
          style={{ paddingTop: insets.top + 8, paddingBottom: insets.bottom + 8 }}
        >
          {/* Back Button */}
          <Pressable
            className="w-10 h-10 items-center justify-center mb-2"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#1F2746" />
          </Pressable>

          {/* Title */}
          <Text className="font-bold text-[28px] text-[#1F2746] mb-4">
            Choose a language
          </Text>

          {/* Search Bar */}
          <View
            className="flex-row items-center rounded-[20px] px-4 h-[50px] mb-6 bg-white border border-[#E8E8EE]"
          >
            <Ionicons name="search-outline" size={20} color="#AFAFAF" />
            <TextInput
              className="flex-1 text-[15px] text-[#1F2746] ml-2 h-full"
              placeholder="Search languages"
              placeholderTextColor="#C4C4C4"
              value={search}
              onChangeText={setSearch}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {search.length > 0 && (
              <Pressable onPress={() => setSearch("")} hitSlop={8}>
                <Ionicons name="close-circle" size={20} color="#C4C4C4" />
              </Pressable>
            )}
          </View>

          {/* Section Title */}
          <Text className="font-bold text-[22px] text-[#1F2746] mb-4">
            Popular
          </Text>

          {/* Language Cards */}
          {filtered.length === 0 ? (
            <View className="items-center py-10">
              <Text className="text-[15px] text-[#8E93A8]">
                No languages found
              </Text>
            </View>
          ) : (
            filtered.map((lang) => {
              const isSelected = lang.id === selectedId;
              return (
                <Pressable
                  key={lang.id}
                  className="flex-row items-center rounded-[20px] px-[18px] py-[18px] mb-3"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderWidth: isSelected ? 2 : 1,
                    borderColor: isSelected ? "#5B4CF6" : "#E8E8EE",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.06,
                    shadowRadius: 8,
                    elevation: 2,
                  }}
                  onPress={() => setSelectedId(lang.id)}
                >
                  {/* Flag Circle */}
                  <View
                    className="w-[52px] h-[52px] rounded-full items-center justify-center mr-4 bg-[#F0F0F0]"
                  >
                    <Text className="text-[26px]">{lang.flag}</Text>
                  </View>

                  {/* Name + Learner Count */}
                  <View className="flex-1">
                    <Text className="font-bold text-[18px] text-[#1F2746]">
                      {lang.name}
                    </Text>
                    <Text className="text-[13px] text-[#8E93A8] mt-0.5">
                      {learnerCounts[lang.id] || ""}
                    </Text>
                  </View>

                  {/* Right Icon */}
                  {isSelected ? (
                    <View
                      className="w-[30px] h-[30px] rounded-full items-center justify-center bg-[#5B4CF6]"
                    >
                      <Ionicons name="checkmark" size={18} color="#FFFFFF" />
                    </View>
                  ) : (
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color="#C4C4C4"
                    />
                  )}
                </Pressable>
              );
            })
          )}

          {/* Confirmation Button */}
          <Pressable
            className="w-full flex-row items-center justify-center rounded-[20px] h-[56px] mt-4 mb-3 bg-white border border-[#E5E5E5]"
            onPress={() => {
              setSelectedLanguage(selectedId);
              router.replace("/");
            }}
          >
            <Ionicons
              name="globe-outline"
              size={22}
              color="#1F2746"
              style={{ marginRight: 10 }}
            />
            <Text className="font-medium text-[16px] text-[#1F2746]">
              Start Learning
            </Text>
          </Pressable>

          {/* Bottom Illustration — full-width, 1:1 aspect ratio */}
          <View className="items-center">
            <Image
              source={require("../assets/images/earth.png")}
              style={{
                width: Dimensions.get("window").width - 56,
                height: Dimensions.get("window").width - 56,
              }}
              contentFit="cover"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
