import { useState } from "react";
import { Platform, KeyboardAvoidingView as RNKeyboardAvoidingView } from "react-native";
import { View, Text, TextInput, Pressable, ScrollView } from "../src/tw";
import { Image } from "../src/tw/image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import VerificationModal from "../src/components/VerificationModal";

function SocialButton({
  icon,
  label,
  onPress,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}) {
  return (
    <Pressable
      className="w-full flex-row items-center rounded-2xl py-[15px] px-5 mb-3"
      style={{
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#E5E5E5",
      }}
      onPress={onPress}
    >
      {icon}
      <Text className="flex-1 text-center text-[15px] font-medium text-[#1F2746]">
        {label}
      </Text>
    </Pressable>
  );
}

export default function SignUp() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSignUp = () => {
    if (!email.trim()) return;
    setModalVisible(true);
  };

  return (
    <RNKeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View
          className="flex-1 px-7"
          style={{ paddingTop: insets.top + 8, paddingBottom: insets.bottom + 12 }}
        >
          {/* Back Button */}
          <Pressable
            className="w-10 h-10 items-center justify-center mb-2"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#1F2746" />
          </Pressable>

          {/* Title */}
          <Text className="font-bold text-[28px] text-[#1F2746] mb-1">
            Create your account
          </Text>

          {/* Subtitle */}
          <Text className="text-[15px] text-[#8E93A8] mb-5 leading-[1.5]">
            Start your language journey today ✨
          </Text>

          {/* Mascot */}
          <View className="items-center mb-6">
            <Image
              source={require("../assets/images/mascot-auth.png")}
              className="w-[180px] h-[150px]"
              contentFit="contain"
            />
          </View>

          {/* Email Field */}
          <View className="mb-3">
            <Text className="text-[13px] font-medium text-[#8E93A8] mb-2 ml-1">
              Email
            </Text>
            <View
              className="flex-row items-center rounded-2xl px-4 h-[52px]"
              style={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#E5E5E5",
              }}
            >
              <TextInput
                className="flex-1 text-[15px] text-[#1F2746] h-full"
                placeholder="alex@gmail.com"
                placeholderTextColor="#C4C4C4"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* Password Field */}
          <View className="mb-5">
            <Text className="text-[13px] font-medium text-[#8E93A8] mb-2 ml-1">
              Password
            </Text>
            <View
              className="flex-row items-center rounded-2xl px-4 h-[52px]"
              style={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#E5E5E5",
              }}
            >
              <TextInput
                className="flex-1 text-[15px] text-[#1F2746] h-full"
                placeholder="••••••••"
                placeholderTextColor="#C4C4C4"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <Pressable
                onPress={() => setShowPassword(!showPassword)}
                hitSlop={12}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={22}
                  color="#AFAFAF"
                />
              </Pressable>
            </View>
          </View>

          {/* Sign Up Button */}
          <Pressable
            className="w-full rounded-2xl py-[16px] items-center mb-6 active:opacity-90"
            style={{
              backgroundColor: "#5B4CF6",
              shadowColor: "#5B4CF6",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 6,
            }}
            onPress={handleSignUp}
          >
            <Text className="font-semibold text-white text-[16px]">
              Sign Up
            </Text>
          </Pressable>

          {/* Divider */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-[1px] bg-[#E5E5E5]" />
            <Text className="mx-4 text-[13px] text-[#AFAFAF]">
              or continue with
            </Text>
            <View className="flex-1 h-[1px] bg-[#E5E5E5]" />
          </View>

          {/* Social Buttons */}
          <SocialButton
            icon={
              <View className="w-6 h-6 items-center justify-center">
                <Ionicons name="logo-google" size={22} color="#DB4437" />
              </View>
            }
            label="Continue with Google"
          />
          <SocialButton
            icon={
              <View className="w-6 h-6 items-center justify-center">
                <Ionicons name="logo-facebook" size={22} color="#1877F2" />
              </View>
            }
            label="Continue with Facebook"
          />
          <SocialButton
            icon={
              <View className="w-6 h-6 items-center justify-center">
                <Ionicons name="logo-apple" size={24} color="#1F2746" />
              </View>
            }
            label="Continue with Apple"
          />

          {/* Bottom Login Link */}
          <View className="flex-row justify-center mt-4">
            <Text className="text-[14px] text-[#8E93A8]">
              Already have an account?{" "}
            </Text>
            <Pressable onPress={() => router.push("/sign-in")}>
              <Text className="text-[14px] font-semibold text-[#5B4CF6]">
                Log in
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <VerificationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        email={email || "your email"}
      />
    </RNKeyboardAvoidingView>
  );
}
