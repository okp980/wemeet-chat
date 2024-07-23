import { View, Text, ImageProps } from "react-native"
import React from "react"
import FastImage, {
  FastImageProps,
  FastImageStaticProperties,
} from "react-native-fast-image"

type Props = any

const CustomImage = ({ source, ...restProps }: Props) => {
  return (
    <FastImage
      source={
        source?.uri
          ? { uri: source?.uri }
          : require("@/assets/images/user_placeholder.png")
      }
      {...restProps}
      style={{ width: 112, height: 112, borderRadius: 16 }}
    />
  )
}

export default CustomImage
