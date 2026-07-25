import { useState } from "react";
import { Platform, KeyboardAvoidingView as RNKeyboardAvoidingView, ActivityIndicator } from "react-native";
import { useSignIn, useAuth, useSSO } from "@clerk/expo";
import { type Href, Redirect, useRouter } from "expo-router";
import { View, Text, TextInput, Pressable, ScrollView } from "../src/tw";
import { Image } from "../src/tw/image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import VerificationModal from "../src/components/VerificationModal";

function SocialButton({
  icon,
  label,
  onPress,
  loading,
}: {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  loading?: boolean;
}) {
  return (
    <Pressable
      className="w-full flex-row items-center rounded-2xl py-[15px] px-5 mb-3 bg-white border border-[#E5E5E5]"
      onPress={onPress}
      disabled={loading}
    >
      {icon}
      <Text className="flex-1 text-center text-[15px] font-medium text-[#1F2746]">
        {label}
      </Text>
    </Pressable>
  );
}

export default function SignIn() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { signIn, errors, fetchStatus } = useSignIn();
  const { isSignedIn } = useAuth();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [ssoLoading, setSsoLoading] = useState<"google" | "facebook" | "apple" | null>(null);

  if (isSignedIn) {
    return <Redirect href="/" />;
  }

  const handleSignIn = async () => {
    if (!email.trim()) return;
    setAuthError(null);

    try {
      if (password.trim()) {
        const { error } = await signIn.password({
          emailAddress: email.trim(),
          password,
        });

        if (error) {
          const code = error.errors?.[0]?.code;
          if (code === "form_identifier_not_found") {
            setAuthError("No account found with this email. Please sign up first.");
          } else {
            setAuthError(error.errors?.[0]?.message || "Sign in failed. Please try again.");
          }
          return;
        }

        if (signIn.status === "complete") {
          await signIn.finalize({
            navigate: ({ session, decorateUrl }: { session: any; decorateUrl: (path: string) => string }) => {
              if (session?.currentTask) {
                console.log(session?.currentTask);
                return;
              }
              const url = decorateUrl("/");
              if (url.startsWith("http")) {
                window.location.href = url;
              } else {
                router.push(url as Href);
              }
            },
          });
          return;
        }
      }

      const { error } = await signIn.emailCode.sendCode({
        emailAddress: email.trim(),
      });

      if (error) {
        const code = error.errors?.[0]?.code;
        if (code === "form_identifier_not_found") {
          setAuthError("No account found with this email. Please sign up first.");
        } else {
          setAuthError(error.errors?.[0]?.message || "Failed to send verification code.");
        }
        return;
      }

      setModalVisible(true);
    } catch (err: any) {
      setAuthError(err?.message || "An unexpected error occurred.");
    }
  };

  const handleSocialSignIn = async (strategy: "oauth_google" | "oauth_facebook" | "oauth_apple") => {
    const provider = strategy.split("_")[1] as "google" | "facebook" | "apple";
    setSsoLoading(provider);
    setAuthError(null);

    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
      }
    } catch (err: any) {
      if (err?.code !== "USER_CANCELLED_AUTHENTICATION" && err?.code !== "ERR_WEBbrowser/USER_CANCELLED") {
        setAuthError(err?.message || `${provider} sign in failed.`);
      }
    } finally {
      setSsoLoading(null);
    }
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
            Welcome back
          </Text>

          {/* Subtitle */}
          <Text className="text-[15px] text-[#8E93A8] mb-5 leading-[1.5]">
            Log in to continue your journey ✨
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
          <View className="mb-4">
            <Text className="text-[13px] font-medium text-[#8E93A8] mb-2 ml-1">
              Email
            </Text>
            <View
              className="flex-row items-center rounded-2xl px-4 h-[52px]"
              style={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: errors.fields?.identifier ? "#d32f2f" : "#E5E5E5",
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
                onChangeText={(text) => {
                  setEmail(text);
                  setAuthError(null);
                }}
              />
            </View>
            {errors.fields?.identifier && (
              <Text className="text-[12px] text-[#d32f2f] mt-1 ml-1">
                {errors.fields.identifier.message}
              </Text>
            )}
          </View>

          {/* Password Field */}
          <View className="mb-5">
            <Text className="text-[13px] font-medium text-[#8E93A8] mb-2 ml-1">
              Password <Text className="text-[11px] text-[#C4C4C4]">(optional)</Text>
            </Text>
            <View
              className="flex-row items-center rounded-2xl px-4 h-[52px]"
              style={{
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: errors.fields?.password ? "#d32f2f" : "#E5E5E5",
              }}
            >
              <TextInput
                className="flex-1 text-[15px] text-[#1F2746] h-full"
                placeholder="••••••••"
                placeholderTextColor="#C4C4C4"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setAuthError(null);
                }}
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
            {errors.fields?.password && (
              <Text className="text-[12px] text-[#d32f2f] mt-1 ml-1">
                {errors.fields.password.message}
              </Text>
            )}
          </View>

          {/* Auth Error */}
          {authError && (
            <View className="mb-3 px-3 py-2 rounded-lg bg-[#FEF0F0]">
              <Text className="text-[13px] text-[#d32f2f]">{authError}</Text>
            </View>
          )}

          {/* Sign In Button */}
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
            onPress={handleSignIn}
            disabled={!email.trim() || fetchStatus === "fetching"}
          >
            {fetchStatus === "fetching" ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="font-semibold text-white text-[16px]">
                {password.trim() ? "Sign In" : "Send Code"}
              </Text>
            )}
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
                {ssoLoading === "google" ? (
                  <ActivityIndicator size="small" color="#DB4437" />
                ) : (
                  <Ionicons name="logo-google" size={22} color="#DB4437" />
                )}
              </View>
            }
            label="Continue with Google"
            onPress={() => handleSocialSignIn("oauth_google")}
            loading={ssoLoading === "google"}
          />
          <SocialButton
            icon={
              <View className="w-6 h-6 items-center justify-center">
                {ssoLoading === "facebook" ? (
                  <ActivityIndicator size="small" color="#1877F2" />
                ) : (
                  <Ionicons name="logo-facebook" size={22} color="#1877F2" />
                )}
              </View>
            }
            label="Continue with Facebook"
            onPress={() => handleSocialSignIn("oauth_facebook")}
            loading={ssoLoading === "facebook"}
          />
          <SocialButton
            icon={
              <View className="w-6 h-6 items-center justify-center">
                {ssoLoading === "apple" ? (
                  <ActivityIndicator size="small" color="#1F2746" />
                ) : (
                  <Ionicons name="logo-apple" size={24} color="#1F2746" />
                )}
              </View>
            }
            label="Continue with Apple"
            onPress={() => handleSocialSignIn("oauth_apple")}
            loading={ssoLoading === "apple"}
          />

          {/* Bottom Sign Up Link */}
          <View className="flex-row justify-center mt-4">
            <Text className="text-[14px] text-[#8E93A8]">
              Don{"'"}t have an account?{" "}
            </Text>
            <Pressable onPress={() => router.push("/sign-up")}>
              <Text className="text-[14px] font-semibold text-[#5B4CF6]">
                Sign up
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <VerificationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        email={email || "your email"}
        mode="sign-in"
      />
    </RNKeyboardAvoidingView>
  );
}
