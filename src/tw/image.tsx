import { useCssElement } from "react-native-css";
import React from "react";
import { StyleSheet } from "react-native";
import { Image as RNImage, ImageProps as RNImageProps } from "expo-image";

function CSSImage(props: RNImageProps) {
  const style = StyleSheet.flatten(props.style) as Record<string, unknown>;

  return (
    <RNImage
      contentFit={(style.objectFit as RNImageProps["contentFit"]) ?? "cover"}
      contentPosition={
        (style.objectPosition as RNImageProps["contentPosition"]) ?? "center"
      }
      {...props}
      source={
        typeof props.source === "string" ? { uri: props.source } : props.source
      }
      style={style}
    />
  );
}

export type ImageProps = React.ComponentProps<typeof CSSImage> & {
  className?: string;
};

export const Image = (props: ImageProps) => {
  return useCssElement(CSSImage, props, { className: "style" });
};

Image.displayName = "CSS(Image)";
