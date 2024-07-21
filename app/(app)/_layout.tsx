import { useAuth } from "@/hooks"
import { useGetProfileQuery } from "@/services/modules/auth"
import { Redirect, Stack } from "expo-router"
import { useEffect } from "react"
import { ActivityIndicator, View } from "react-native"

export default function AppLayout() {
  const { token, hasOnboardedProfile, compeleteProfileOnboarding } = useAuth()
  const { data: profile, isLoading, isSuccess } = useGetProfileQuery()

  useEffect(() => {
    // @ts-ignore
    if (profile && profile?.profile?.passion && !hasOnboardedProfile) {
      compeleteProfileOnboarding()
    }
  }, [isSuccess, profile])

  if (isLoading)
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size={"large"} color={"#E94057"} />
      </View>
    )
  if (!token) {
    return <Redirect href="/sign-in" />
  }
  // @ts-ignore
  if (!profile?.profile?.passion || !hasOnboardedProfile) {
    return <Redirect href="/bio" />
  }
  return <Stack screenOptions={{ headerShown: false }} />
}
