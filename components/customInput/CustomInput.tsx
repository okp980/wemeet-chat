import { View, TextInput, TextInputProps, ViewStyle } from "react-native"
import React from "react"
import { FieldError } from "react-hook-form"

import { useThemeColor } from "@/hooks/useThemeColor"
import CustomText from "../customText/CustomText"
import { appColor } from "@/constants/color"
import { ThemedView } from "../ThemedView"

type Props = {
  label?: string
  error?: string | FieldError
  inputStyle?: ViewStyle
  contentContainerStyle?: ViewStyle
} & TextInputProps

const CustomInput = ({
  label,
  error,
  inputStyle,
  contentContainerStyle,
  ...props
}: Props) => {
  const iconColor = useThemeColor({}, "icon")

  return (
    <View style={[{ marginBottom: 20 }, contentContainerStyle]}>
      <View
        style={[
          {
            borderRadius: 16,
            borderWidth: 1,
            borderColor: appColor.BORDER,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 20,
            paddingBottom: 20,
            position: "relative",
          },
          inputStyle,
        ]}
      >
        {label && (
          <ThemedView style={{ position: "absolute", top: -10, left: 6 }}>
            <CustomText size="small">{label}</CustomText>
          </ThemedView>
        )}
        <TextInput
          {...props}
          style={{ color: iconColor, fontSize: 14, padding: 0 }}
        />
      </View>
      {error && (
        <CustomText size="tiny" style={{ marginTop: 4 }}>
          {error as string}
        </CustomText>
      )}
    </View>
  )
}

export default CustomInput
