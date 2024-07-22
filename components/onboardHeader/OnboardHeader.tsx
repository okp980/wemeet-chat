import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import Svg from "../../constants/svg"
import { Navigation } from "../../constants"
import { ThemedView } from "../ThemedView"
import { useAuth } from "@/hooks"
import { useThemeColor } from "@/hooks/useThemeColor"
import CustomText from "../customText/CustomText"
import { appColor } from "@/constants/color"

type Props = {
  next: keyof typeof Navigation
}

export const OnboardHeaderWithOutGoBack = ({ next }: Props) => {
  const navigation = useNavigation()

  return (
    <ThemedView
      style={{
        height: 56,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity
        onPress={() =>
          next === Navigation.HOME_SCREEN
            ? // @ts-ignore
              navigation.navigate(Navigation.TAB_NAVIGATION, {
                path: Navigation.HOME_SCREEN,
              })
            : // @ts-ignore
              navigation.navigate(next)
        }
      >
        <CustomText style={{ color: appColor.PRIMARY }}>skip</CustomText>
      </TouchableOpacity>
    </ThemedView>
  )
}

const OnboardHeader = ({ next }: Props) => {
  const iconColor = useThemeColor({}, "icon")
  const navigation = useNavigation()
  const { compeleteProfileOnboarding } = useAuth()
  const onNavigate = (next: string) => {
    if (next === Navigation.HOME_SCREEN) {
      compeleteProfileOnboarding()
      // @ts-ignore
      navigation.navigate(Navigation.TAB_NAVIGATION, {
        screen: Navigation.HOME_SCREEN,
      })
    } else {
      // @ts-ignore
      navigation.navigate(next)
    }
  }
  return (
    <ThemedView
      style={{
        height: 64,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: appColor.BORDER,
          borderRadius: 16,
          height: 48,
          width: 56,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={navigation.goBack}
      >
        <Svg.LeftCaret fill={iconColor} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onNavigate(next)}>
        <CustomText style={{ color: appColor.PRIMARY }}>skip</CustomText>
      </TouchableOpacity>
    </ThemedView>
  )
}

export default OnboardHeader
