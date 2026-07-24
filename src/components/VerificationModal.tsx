import { useState, useRef, useEffect } from "react";
import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  TextInput as RNTextInput,
  type NativeSyntheticEvent,
  type TextInputKeyPressEventData,
} from "react-native";
import { View, Text, Pressable } from "../tw";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  email: string;
}

const CODE_LENGTH = 6;

export default function VerificationModal({
  visible,
  onClose,
  email,
}: VerificationModalProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const inputRefs = useRef<(RNTextInput | null)[]>([]);

  useEffect(() => {
    if (visible) {
      setCode(Array(CODE_LENGTH).fill(""));
      setTimeout(() => inputRefs.current[0]?.focus(), 300);
    }
  }, [visible]);

  useEffect(() => {
    if (code.every((d) => d !== "")) {
      setTimeout(() => {
        onClose();
        router.replace("/");
      }, 200);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) text = text.slice(-1);
    if (!/^\d*$/.test(text)) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
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
              style={{ backgroundColor: "#D4D5DC" }}
            >
              <Text className="font-semibold text-white text-[16px]">
                Verify
              </Text>
            </Pressable>

            <View className="flex-row justify-center">
              <Text className="text-[14px] text-[#8E93A8]">
                Didn{"'"}t receive it?{" "}
              </Text>
              <Pressable>
                <Text className="text-[14px] font-semibold text-[#5B4CF6]">
                  Resend
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
