import { View } from "react-native"
import React, { useState } from "react"
import Slider, { SliderProps } from "@react-native-community/slider"
import CustomText from "../customText/CustomText"
import { appColor } from "@/constants/color"

type Props = {
  title: string
  format: (value: string) => string
} & SliderProps

const CustomSlider = ({ title, format, ...props }: Props) => {
  const [currentValue, setCurrentValue] = useState("1")
  return (
    <View style={{ marginBottom: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CustomText size="h3" weight="bold">
          {title}
        </CustomText>
        <CustomText weight="medium">{format(currentValue)}</CustomText>
      </View>
      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor={appColor.PRIMARY}
        maximumTrackTintColor="#E8E6EA"
        onValueChange={(value) => setCurrentValue(value.toString())}
        thumbTintColor={appColor.PRIMARY}
        step={1}
        {...props}
      />
    </View>
  )
}

export default CustomSlider
