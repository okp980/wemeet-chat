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
import { Button, Layout } from "../../components"

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

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size={"large"} />
      </View>
    )
  }
  return (
    <Layout>
      <View className="flex-1 justify-center items-center w-full">
        <Logo width={108} height={100} />
      </View>
      <View className="flex-[.2] w-full">
        <View>
          <Button
            variant="primary"
            startIcon={
              <Google width={30} height={30} onPress={signIn} fill="white" />
            }
            textStyle={"text-white"}
            onPress={signIn}
          >
            Sign in with Google
          </Button>
        </View>
      </View>
      <View className="flex-row justify-around flex-[.1]">
        <Button
          variant="text"
          textStyle={"text-primary"}
          onPress={() =>
            handleOpenWeb("https://okp980.github.io/weMeet/terms_and_condition")
          }
        >
          Terms of use
        </Button>
        <Button
          variant="text"
          textStyle={"text-primary"}
          onPress={() =>
            handleOpenWeb("https://okp980.github.io/weMeet/policy")
          }
        >
          Privacy policy
        </Button>
      </View>
    </Layout>
  )
}

export default SignIn
