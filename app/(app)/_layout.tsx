import LoadingView from "@/components/loadingView/LoadingView"
import { useAuth } from "@/hooks"
import { useGetProfileQuery } from "@/services/modules/auth"
import { Redirect, Stack } from "expo-router"
import { useEffect } from "react"

export default function AppLayout() {
  const { token, hasOnboardedProfile, compeleteProfileOnboarding } = useAuth()
  const { data: profile, isLoading, isSuccess } = useGetProfileQuery()

  useEffect(() => {
    // @ts-ignore
    if (profile && profile?.profile?.passion && !hasOnboardedProfile) {
      compeleteProfileOnboarding()
    }
  }, [isSuccess, profile])

  if (isLoading) return <LoadingView />
  if (!token) {
    return <Redirect href="/sign-in" />
  }
  // @ts-ignore
  if (!profile?.profile?.passion || !hasOnboardedProfile) {
    return <Redirect href="/bio" />
  }
  return <Stack screenOptions={{ headerShown: false }} />
}
