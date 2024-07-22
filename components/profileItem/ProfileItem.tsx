import React, { ReactElement } from "react"
import { TouchableOpacity, View } from "react-native"
import CustomText from "../customText/CustomText"
import { Svg } from "../../constants"
import { useThemeColor } from "@/hooks/useThemeColor"

type Props = {
  icon: ReactElement
  title: string
  showCaret?: boolean
  handlePress: () => void
}

const ProfileItem = ({ icon, title, handlePress, showCaret = true }: Props) => {
  const iconColor = useThemeColor({}, "icon")
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", gap: 16, alignItems: "center" }}
      onPress={handlePress}
    >
      {icon}
      <View style={{ flex: 1 }}>
        <CustomText>{title}</CustomText>
      </View>
      {showCaret && <Svg.RightCaret stroke={iconColor} />}
    </TouchableOpacity>
  )
}

export default ProfileItem
