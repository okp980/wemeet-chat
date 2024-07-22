import {
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
  View,
  ActivityIndicator,
  StyleSheet,
  TextStyle,
} from "react-native"
import React, { ReactElement } from "react"

import CustomText from "../customText/CustomText"
import { appColor } from "@/constants/color"

type Props = {
  textStyle?: StyleProp<TextStyle>
  btnStyle?: StyleProp<ViewStyle>
  variant: "primary" | "outline" | "accent" | "text"
  loading?: boolean
  startIcon?: ReactElement
  endIcon?: ReactElement
} & TouchableOpacityProps

const Button = ({
  textStyle,
  btnStyle,
  variant,
  startIcon,
  endIcon,
  children,
  loading,
  ...props
}: Props) => {
  if (variant === "text") {
    return (
      <TouchableOpacity {...props} style={btnStyle}>
        <CustomText style={[textStyle]}>{children}</CustomText>
      </TouchableOpacity>
    )
  }
  return (
    <TouchableOpacity
      style={[
        styles.default,
        variant === "primary" ? styles.primary : undefined,
        variant === "accent" ? styles.accent : undefined,
        variant === "outline" ? styles.primary : undefined,
        btnStyle,
      ]}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={"white"} />
      ) : (
        <View style={styles.btnContentContainer}>
          {startIcon && startIcon}

          <CustomText
            weight="medium"
            style={[
              variant === "primary" ? styles.primaryText : undefined,
              variant === "accent" ? styles.accentText : undefined,
              variant === "outline" ? styles.oulineText : undefined,
              textStyle,
            ]}
          >
            {children}
          </CustomText>

          {endIcon && endIcon}
        </View>
      )}
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  default: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 40,
  },
  primary: {
    backgroundColor: appColor.PRIMARY,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: appColor.PRIMARY,
  },
  accent: {
    backgroundColor: "white",
  },
  btnContentContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  primaryText: {
    color: appColor.WHITE,
  },
  accentText: {
    color: "#040415",
  },
  oulineText: {
    color: appColor.PRIMARY,
  },
})
