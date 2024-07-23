import { Stack } from "expo-router"
import { Navigation } from "../../constants"
import { useAuth } from "../../hooks"

const AuthLayout = () => {
  const { hasBeenWelcome } = useAuth()
  return (
    <Stack
      initialRouteName={hasBeenWelcome ? "sign-in" : "welcome"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="welcome" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="web" />
    </Stack>
  )
}

export default AuthLayout
