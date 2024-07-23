import { appColor } from "@/constants/color"
import React, { memo } from "react"
import { View, Text, StyleSheet } from "react-native"
import CustomText from "../customText/CustomText"

type Props = {
  text: string
}

const Label = ({ text, ...restProps }: Props) => {
  return (
    <View style={styles.root} {...restProps}>
      <CustomText style={styles.text}>{text}</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 8,
    backgroundColor: appColor.PRIMARY,
    borderRadius: 4,
  },
  text: {
    color: "#fff",
  },
})

export default memo(Label)
