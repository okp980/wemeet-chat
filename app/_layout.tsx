import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Slot, Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { PersistGate } from "redux-persist/lib/integration/react"
import "react-native-reanimated"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Provider } from "react-redux"
import { persistor, store } from "@/store"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import FlashMessage from "react-native-flash-message"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import "../global.css"

// import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "AirbnbCereal-ExtraBold": require("@/assets/fonts/AirbnbCereal_W_Blk.otf"),
    "AirbnbCereal-Bold": require("@/assets/fonts/AirbnbCereal_W_XBd.otf"),
    "AirbnbCereal-SemiBold": require("@/assets/fonts/AirbnbCereal_W_Bd.otf"),
    "AirbnbCereal-Medium": require("@/assets/fonts/AirbnbCereal_W_Md.otf"),
    "AirbnbCereal-Regular": require("@/assets/fonts/AirbnbCereal_W_Bk.otf"),
    "AirbnbCereal-Light": require("@/assets/fonts/AirbnbCereal_W_Lt.otf"),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
              <Slot />
              <FlashMessage position="top" />
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
    // </ThemeProvider>
  )
}
