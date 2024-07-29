import LoadingView from "@/components/loadingView/LoadingView";
import { useAuth } from "@/hooks";
import { useGetProfileQuery } from "@/services/modules/auth";
import { useNetInfo } from "@react-native-community/netinfo";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

export default function AppLayout() {
  const { token, hasOnboardedProfile, compeleteProfileOnboarding } = useAuth();
  const { type, isConnected } = useNetInfo();

  useEffect(() => {
    if (isConnected === false) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Warning",
        textBody:
          "No internet connection. Please check your connection and try again.",
      });
    }
  }, [isConnected]);

  console.log(isConnected);

  // const { data: profile, isLoading, isSuccess } = useGetProfileQuery();

  // useEffect(() => {
  //   // @ts-ignore
  //   if (profile && profile?.profile?.passion && !hasOnboardedProfile) {
  //     compeleteProfileOnboarding();
  //   }
  // }, [isSuccess, profile]);

  // if (isLoading) return <LoadingView />;
  if (!token) {
    return <Redirect href="/sign-in" />;
  }
  if (!hasOnboardedProfile) {
    return <Redirect href="/bio" />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
