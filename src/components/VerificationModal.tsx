import { useState, useRef, useEffect } from "react";
import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  TextInput as RNTextInput,
  ActivityIndicator,
  type NativeSyntheticEvent,
  type TextInputKeyPressEventData,
} from "react-native";
import { View, Text, Pressable } from "../tw";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSignIn, useSignUp } from "@clerk/expo";
import type { Href } from "expo-router";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  email: string;
  mode: "sign-up" | "sign-in";
}

const CODE_LENGTH = 6;
const RESEND_COOLDOWN = 60;

export default function VerificationModal({
  visible,
  onClose,
  email,
  mode,
}: VerificationModalProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { signIn } = useSignIn();
  const { signUp } = useSignUp();
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const inputRefs = useRef<(RNTextInput | null)[]>([]);
  const [verifying, setVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const [resendCooldown, setResendCooldown] = useState(0);

  useEffect(() => {
    if (visible) {
      setCode(Array(CODE_LENGTH).fill(""));
      setVerifyError(null);
      setVerifying(false);
      setResendCooldown(0);
      setTimeout(() => inputRefs.current[0]?.focus(), 300);
    }
  }, [visible]);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setTimeout(() => setResendCooldown((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  const navigateAfterAuth = ({ session, decorateUrl }: { session: any; decorateUrl: (path: string) => string }) => {
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
  };

  const handleVerify = async () => {
    const codeStr = code.join("");
    if (codeStr.length !== CODE_LENGTH) return;

    setVerifying(true);
    setVerifyError(null);

    try {
      if (mode === "sign-up" && signUp) {
        await signUp.verifications.verifyEmailCode({ code: codeStr });

        if (signUp.status === "complete") {
          await signUp.finalize({ navigate: navigateAfterAuth });
        }
      } else if (mode === "sign-in" && signIn) {
        await signIn.emailCode.verifyCode({ code: codeStr });

        if (signIn.status === "complete") {
          await signIn.finalize({ navigate: navigateAfterAuth });
        }
      }
    } catch (err: any) {
      const message =
        err?.errors?.[0]?.message ||
        err?.message ||
        "Invalid verification code. Please try again.";
      setVerifyError(message);
      setCode(Array(CODE_LENGTH).fill(""));
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } finally {
      setVerifying(false);
    }
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;

    try {
      if (mode === "sign-up" && signUp) {
        await signUp.verifications.sendEmailCode();
      } else if (mode === "sign-in" && signIn) {
        await signIn.emailCode.sendCode();
      }
      setResendCooldown(RESEND_COOLDOWN);
    } catch (err: any) {
      console.error("Resend failed:", JSON.stringify(err, null, 2));
    }
  };

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) text = text.slice(-1);
    if (!/^\d*$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    setVerifyError(null);

    if (text && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newCode.every((d) => d !== "")) {
      setTimeout(() => {
        const codeStr = newCode.join("");
        if (codeStr.length === CODE_LENGTH && !verifying) {
          handleVerify();
        }
      }, 200);
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          className="flex-1 justify-end"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <View
            className="bg-white rounded-t-3xl px-7 pt-8 pb-10"
            style={{ paddingBottom: insets.bottom + 32 }}
          >
            <Pressable
              className="absolute right-5 top-5"
              onPress={onClose}
            >
              <Ionicons name="close" size={24} color="#8E93A8" />
            </Pressable>

            <Text className="font-bold text-[22px] text-[#1F2746] mb-2">
              Verify your email
            </Text>
            <Text className="text-[14px] text-[#8E93A8] mb-8 leading-[1.5]">
              We{"'"}ve sent a 6-digit code to{"\n"}
              <Text className="font-semibold text-[#1F2746]">{email}</Text>
            </Text>

            {verifyError && (
              <View className="mb-4 px-3 py-2 rounded-lg" style={{ backgroundColor: "#FEF0F0" }}>
                <Text className="text-[13px] text-[#d32f2f]">{verifyError}</Text>
              </View>
            )}

            <View className="flex-row justify-between mb-8">
              {code.map((digit, i) => (
                <RNTextInput
                  key={i}
                  ref={(el) => {
                    inputRefs.current[i] = el;
                  }}
                  style={{
                    width: 48,
                    height: 56,
                    borderRadius: 16,
                    textAlign: "center",
                    fontSize: 22,
                    fontWeight: "bold",
                    backgroundColor: digit ? "#F0EDFF" : "#F7F7F7",
                    borderWidth: digit ? 2 : 1,
                    borderColor: digit ? "#5B4CF6" : "#E5E5E5",
                    color: "#1F2746",
                  }}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onChangeText={(text) => handleChange(text, i)}
                  onKeyPress={(e) => handleKeyPress(e, i)}
                  selectTextOnFocus
                />
              ))}
            </View>

            <Pressable
              className="w-full rounded-2xl py-[16px] items-center mb-6"
              style={{
                backgroundColor: verifying || code.some((d) => !d) ? "#D4D5DC" : "#5B4CF6",
              }}
              onPress={handleVerify}
              disabled={verifying || code.some((d) => !d)}
            >
              {verifying ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text className="font-semibold text-white text-[16px]">
                  Verify
                </Text>
              )}
            </Pressable>

            <View className="flex-row justify-center">
              <Text className="text-[14px] text-[#8E93A8]">
                Didn{"'"}t receive it?{" "}
              </Text>
              <Pressable
                onPress={handleResend}
                disabled={resendCooldown > 0}
              >
                <Text
                  className="text-[14px] font-semibold"
                  style={{ color: resendCooldown > 0 ? "#C4C4C4" : "#5B4CF6" }}
                >
                  {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
