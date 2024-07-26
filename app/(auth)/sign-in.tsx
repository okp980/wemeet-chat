import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin"

import { Navigation, Svg } from "../../constants"
import { useSignInWithSocialMutation } from "../../services/modules/auth"
import { SocialProvider } from "../../types/auth"
import { useAuth } from "../../hooks"
import { showMessage } from "react-native-flash-message"
import { Button, CustomText, Layout } from "../../components"
import { Link } from "expo-router"
import { appColor } from "@/constants/color"
import LoadingView from "@/components/loadingView/LoadingView"

const { Apple, Facebook, Google, Logo } = Svg

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  offlineAccess: true,
})

const SignIn = () => {
  const [signInWithSocial, { isLoading }] = useSignInWithSocialMutation()
  const { authenticateUser, fcmToken } = useAuth()
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      const response = await signInWithSocial({
        token: userInfo.idToken!,
        provider: SocialProvider.GOOGLE,
        fcmToken: "",
      }).unwrap()
      authenticateUser(response.access_token)
    } catch (error: any) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // user cancelled the login flow
            break
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // play services not available or outdated
            break
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  }

  if (isLoading) return <LoadingView />
  return (
    <Layout style={{ paddingHorizontal: 20 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Logo width={108} height={100} />
      </View>
      <View
        style={{
          flex: 0.2,
          width: "100%",
        }}
      >
        <View>
          <Button
            variant="primary"
            startIcon={
              <Google width={30} height={30} onPress={signIn} fill="white" />
            }
            onPress={signIn}
          >
            Sign in with Google
          </Button>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 0.1,
          justifyContent: "space-around",
        }}
      >
        <Link
          href={{
            pathname: "web",
            params: {
              url: "https://okp980.github.io/weMeet/terms_and_condition",
            },
          }}
        >
          <CustomText weight="medium" lightColor={appColor.PRIMARY}>
            Terms of use
          </CustomText>
        </Link>
        <Link
          href={{
            pathname: "web",
            params: {
              url: "https://okp980.github.io/weMeet/policy",
            },
          }}
        >
          <CustomText weight="medium" lightColor={appColor.PRIMARY}>
            Privacy policy
          </CustomText>
        </Link>
      </View>
    </Layout>
  )
}

export default SignIn
