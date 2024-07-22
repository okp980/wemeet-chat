/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4"
const tintColorDark = "#fff"

export const appColor = {
  // base
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  BACKGROUND: "#F6F9FF",
  // BACKGROUND_DARK: "#151718",
  BACKGROUND_DARK: "#040415",
  PRIMARY: "#3843FF",

  BLACK10: "#EAECF0",
  BLACK20: "#CDCDD0",
  BLACK40: "#9B9BA1",
  BLACK60: "#686873",
  BLACK100: "#040415",
  RED: "#E3524F",
  GREEN: "#3BA935",
  BORDER: "#EAECF0",
}

const Colors = {
  light: {
    text: "#11181C",
    background: appColor.BACKGROUND,
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: appColor.BACKGROUND_DARK,
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
}

export default Colors
