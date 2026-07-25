import { View, Text, Pressable } from "../../tw";
import { Ionicons } from "@expo/vector-icons";

interface CallControlsProps {
  isMuted: boolean;
  isCameraOff: boolean;
  showSubtitles: boolean;
  onToggleMic: () => void;
  onToggleCamera: () => void;
  onToggleSubtitles: () => void;
  onEndCall: () => void;
}

interface ControlButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active?: boolean;
  onPress: () => void;
  variant?: "default" | "danger";
}

function ControlButton({
  icon,
  label,
  active = false,
  onPress,
  variant = "default",
}: ControlButtonProps) {
  const isDanger = variant === "danger";
  const bgColor = isDanger ? "#FF4D4F" : active ? "#F0EDFF" : "#FFFFFF";
  const iconColor = isDanger ? "#FFFFFF" : active ? "#5B4CF6" : "#1F2746";
  const borderColor = isDanger ? "#FF4D4F" : active ? "#5B4CF6" : "#F0F0F0";
  const textColor = isDanger ? "#FF4D4F" : active ? "#5B4CF6" : "#1F2746";

  return (
    <Pressable className="items-center" onPress={onPress}>
      <View
        className="rounded-full items-center justify-center mb-1.5"
        style={{
          width: isDanger ? 60 : 52,
          height: isDanger ? 60 : 52,
          backgroundColor: bgColor,
          borderWidth: 1.5,
          borderColor,
          shadowColor: isDanger ? "#FF4D4F" : "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: isDanger ? 0.3 : 0.06,
          shadowRadius: 4,
          elevation: isDanger ? 4 : 2,
        }}
      >
        <Ionicons
          name={icon}
          size={isDanger ? 26 : 22}
          color={iconColor}
        />
      </View>
      <Text className="text-[11px] font-medium" style={{ color: textColor }}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function CallControls({
  isMuted,
  isCameraOff,
  showSubtitles,
  onToggleMic,
  onToggleCamera,
  onToggleSubtitles,
  onEndCall,
}: CallControlsProps) {
  return (
    <View className="flex-row items-center justify-center px-6 mt-4">
      <View className="flex-row items-start justify-between w-full">
        <ControlButton
          icon={isCameraOff ? "videocam-off" : "videocam"}
          label="Camera"
          active={!isCameraOff}
          onPress={onToggleCamera}
        />
        <ControlButton
          icon={isMuted ? "mic-off" : "mic"}
          label="Mic"
          active={!isMuted}
          onPress={onToggleMic}
        />
        <ControlButton
          icon={showSubtitles ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
          label="Subtitles"
          active={showSubtitles}
          onPress={onToggleSubtitles}
        />
        <ControlButton
          icon="call"
          label="End Call"
          variant="danger"
          onPress={onEndCall}
        />
      </View>
    </View>
  );
}
