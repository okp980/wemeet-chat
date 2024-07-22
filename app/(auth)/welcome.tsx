import React from "react"
import { OnboardFlow, DashDotPagination } from "react-native-onboard"
import { slides } from "../../helpers/data"
import { useAuth } from "../../hooks"
import { Navigation } from "../../constants"
import { appColor } from "@/constants/color"
import { useThemeColor } from "@/hooks/useThemeColor"

const Welcome = ({ navigation }: any) => {
  const { welcome } = useAuth()
  const background = useThemeColor({}, "background")

  const handleDone = () => {
    welcome()
    navigation.navigate(Navigation.SIGN_IN_SCREEN)
  }
  return (
    <OnboardFlow
      PaginationComponent={(props) => <DashDotPagination {...props} />}
      pages={slides}
      type={"fullscreen"}
      primaryButtonStyle={{ backgroundColor: appColor.PRIMARY }}
      paginationSelectedColor={appColor.PRIMARY}
      style={{ backgroundColor: background }}
      titleStyle={{
        fontWeight: "600",
        fontSize: 24,
        fontFamily: "NotoSans-Bold",
        color: appColor.PRIMARY,
      }}
      subtitleStyle={{
        fontWeight: "400",
        fontSize: 16,
        fontFamily: "NotoSans-Regular",
        color: appColor.BLACK100,
      }}
      onDone={handleDone}
    />
  )
}

export default Welcome
