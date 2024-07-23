import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import React from "react"
import { ThemedView } from "../ThemedView"
import { appColor } from "@/constants/color"
import CustomText from "../customText/CustomText"

type Props = {
  message?: string
}

export default function ErrorView({ message }: Props) {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <CustomText style={{ color: appColor.RED }}>
        {message ?? "Error Fetching Data"}
      </CustomText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({})
