import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native"
import React from "react"
// import {
//   GoogleSignin,
//   statusCodes,
// } from "@react-native-google-signin/google-signin"

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

const SignIn = ({ navigation }: any) => {
  const [signInWithSocial, { isLoading }] = useSignInWithSocialMutation()
  const { authenticateUser, fcmToken } = useAuth()
  //   const signIn = async () => {
  //     try {
  //       // await GoogleSignin.hasPlayServices();
  //     //   const userInfo = await GoogleSignin.signIn()
  //       const response = await signInWithSocial({
  //         token: userInfo.idToken!,
  //         provider: SocialProvider.GOOGLE,
  //         fcmToken,
  //       }).unwrap()
  //       authenticateUser(response.access_token)
  //     } catch (error: any) {
  //       console.log("error", error)

  //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //         // user cancelled the login flow
  //         console.log("cancelled", error)
  //       } else if (error.code === statusCodes.IN_PROGRESS) {
  //         // operation (e.g. sign in) is in progress already
  //         console.log("in progress", error)
  //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //         // play services not available or outdated
  //         console.log("not available", error)
  //       } else {
  //         // some other error happened
  //         console.log("wild card", error)
  //         showMessage({
  //           type: "danger",
  //           message: error?.data?.error ?? "Error signing in with Google",
  //         })
  //       }
  //     }
  //   }

  const signIn = () => {}

  const handleOpenWeb = (url: string) => {
    navigation.navigate(Navigation.WEB_SCREEN, {
      url,
    })
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
