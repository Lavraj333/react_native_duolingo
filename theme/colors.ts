export const colors = {
  green: "#58CC02",
  greenDark: "#46A302",
  greenLight: "#E5F5D1",

  blue: "#1CB0F6",
  blueDark: "#1899D6",
  blueLight: "#DDF4FF",

  red: "#FF4B4B",
  redDark: "#D32F2F",
  redLight: "#FFE0E0",

  yellow: "#FFC800",
  yellowDark: "#DBA500",
  yellowLight: "#FFF0C8",

  purple: "#AC36C6",
  purpleDark: "#8B2EA6",
  purpleLight: "#E9D4F5",

  orange: "#FF9600",
  orangeDark: "#D97F00",

  brand: "#5837EC",
  brandDark: "#4629C4",

  text: "#2B2B2B",
  textSecondary: "#777777",
  textTertiary: "#AFAFAF",

  background: "#FFFFFF",
  surface: "#F7F7F7",
  border: "#E5E5E5",
  divider: "#F0F0F0",

  white: "#FFFFFF",
  black: "#000000",
} as const;

export type ColorKey = keyof typeof colors;
