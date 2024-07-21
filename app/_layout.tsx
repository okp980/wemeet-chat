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
    NotoSansBlack: require("../assets/fonts/NotoSans-Black.ttf"),
    NotoSansBold: require("../assets/fonts/NotoSans-Black.ttf"),
    NotoSansLight: require("../assets/fonts/NotoSans-Black.ttf"),
    NotoSansMedium: require("../assets/fonts/NotoSans-Black.ttf"),
    NotoSansRegular: require("../assets/fonts/NotoSans-Black.ttf"),
    NotoSansSemiBold: require("../assets/fonts/NotoSans-Black.ttf"),
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
