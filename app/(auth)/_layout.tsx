import { Stack } from "expo-router"
import { Navigation } from "../../constants"
import { useAuth } from "../../hooks"

const AuthLayout = () => {
  const { hasBeenWelcome } = useAuth()
  return (
    <Stack
      initialRouteName={
        hasBeenWelcome ? Navigation.SIGN_IN_SCREEN : Navigation.WELCOME_SCREEN
      }
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="sign-in" />
    </Stack>
  )
}

export default AuthLayout
