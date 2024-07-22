import { Text, type TextProps, StyleSheet } from "react-native"
import { useThemeColor } from "@/hooks/useThemeColor"

type FontSize =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "b1"
  | "b2"
  | "small"
  | "tiny"
type FontWeight = "bold" | "medium" | "regular"

export type CustomTextProps = TextProps & {
  lightColor?: string
  darkColor?: string
  size?: FontSize
  weight?: FontWeight
  values?: any
}

export default function CustomText({
  style,
  lightColor,
  darkColor,
  size = "b2",
  weight = "regular",
  children,
  values,
  ...rest
}: CustomTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text")

  return (
    <Text
      style={[
        { color },

        size === "h1" ? styles.h1 : undefined,
        size === "h2" ? styles.h2 : undefined,
        size === "h3" ? styles.h3 : undefined,
        size === "h4" ? styles.h4 : undefined,
        size === "h5" ? styles.h5 : undefined,
        size === "h6" ? styles.h6 : undefined,
        size === "b1" ? styles.b1 : undefined,
        size === "b2" ? styles.b2 : undefined,
        size === "small" ? styles.small : undefined,
        size === "tiny" ? styles.tiny : undefined,

        weight === "bold" ? styles.bold : undefined,
        weight === "medium" ? styles.medium : undefined,
        weight === "regular" ? styles.regular : undefined,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
    lineHeight: 56,
  },
  h2: {
    fontSize: 40,
    lineHeight: 48,
  },
  h3: {
    fontSize: 36,
    lineHeight: 40,
  },
  h4: {
    fontSize: 32,
    lineHeight: 40,
  },
  h5: {
    fontSize: 24,
    lineHeight: 32,
  },
  h6: {
    fontSize: 20,
    lineHeight: 24,
  },
  b1: {
    fontSize: 18,
    lineHeight: 24,
  },
  b2: {
    fontSize: 14,
    lineHeight: 20,
  },
  small: {
    fontSize: 12,
    lineHeight: 16,
  },
  tiny: {
    fontSize: 10,
    lineHeight: 16,
  },
  bold: {
    fontFamily: "AirbnbCereal-SemiBold",
  },
  medium: {
    fontFamily: "AirbnbCereal-Medium",
  },
  regular: {
    fontFamily: "AirbnbCereal-Regular",
  },
})
