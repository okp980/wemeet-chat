import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import React from "react"
import { ThemedView } from "../ThemedView"
import { appColor } from "@/constants/color"

export default function LoadingView() {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator size="large" color={appColor.PRIMARY} />
    </ThemedView>
  )
}

const styles = StyleSheet.create({})
