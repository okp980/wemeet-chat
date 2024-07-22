import { SafeAreaView, ViewProps } from "react-native"
import { ThemedView } from "../ThemedView"
import { StatusBar } from "expo-status-bar"

export default function Layout({ style, children, ...props }: ViewProps) {
  return (
    <ThemedView style={[{ flex: 1 }, style]} {...props}>
      <SafeAreaView
        style={{
          flex: 1,
          // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <StatusBar
          style="auto"
          // style={colorScheme === "dark" ? "dark-content" : "light-content"}
        />
        {children}
      </SafeAreaView>
    </ThemedView>
  )
}
