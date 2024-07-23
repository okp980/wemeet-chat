import React from "react"
import { OnboardFlow, DashDotPagination } from "react-native-onboard"
import { slides } from "../../helpers/data"
import { useAuth } from "../../hooks"
import { Navigation } from "../../constants"
import { appColor } from "@/constants/color"
import { useThemeColor } from "@/hooks/useThemeColor"
import { router } from "expo-router"

const Welcome = () => {
  const { welcome } = useAuth()
  const background = useThemeColor({}, "background")

  const handleDone = () => {
    welcome()
    router.navigate("sign-in")
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
        fontSize: 24,
        fontFamily: "AirbnbCereal-Bold",
        color: appColor.PRIMARY,
      }}
      subtitleStyle={{
        fontWeight: "400",
        fontSize: 16,
        fontFamily: "AirbnbCereal-Regular",
        color: appColor.BLACK100,
      }}
      onDone={handleDone}
    />
  )
}

export default Welcome
