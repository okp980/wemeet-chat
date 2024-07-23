import {
  View,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native"
import React from "react"
import FastImage from "react-native-fast-image"
import { CustomInput, CustomText, Form } from "../../components"
import { Svg } from "../../constants"
import { Controller } from "react-hook-form"
import * as Progress from "react-native-progress"
import { Stack, router } from "expo-router"
import { appColor } from "@/constants/color"

type Props = any
type FormValues = {
  message: string
}

const Photo = () => {
  const { width } = useWindowDimensions()
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  return (
    <ImageBackground
      source={{
        uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      }}
      style={{ flex: 1, padding: 40, justifyContent: "space-between" }}
    >
      <View>
        <Stack.Screen options={{ presentation: "fullScreenModal" }} />
        <Progress.Bar
          progress={0.2}
          width={width - 80}
          color={appColor.PRIMARY}
          height={2}
          borderWidth={0}
          unfilledColor="white"
        />
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            marginTop: 8,
            alignItems: "center",
          }}
        >
          <FastImage
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
            style={{
              height: 56,
              width: 56,
              borderRadius: 56 / 2,
              borderWidth: 1,
              borderColor: appColor.WHITE,
            }}
          />

          <View style={{ flex: 1, paddingVertical: 8 }}>
            <CustomText size="h3">Annabelle</CustomText>
          </View>
          <TouchableOpacity
            onPress={router.back}
            style={{
              height: 40,
              width: 40,
              borderRadius: 40 / 2,
              borderWidth: 1,
              borderColor: appColor.WHITE,
              backgroundColor: "#ffffff20",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Svg.Close />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Form<FormValues> onSubmit={onSubmit}>
          {({ handleSubmit, control, formState: { errors } }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Controller
                control={control}
                name="message"
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    error={errors.message}
                    placeholder="Enter Message"
                    inputClassName=" border-white bg-white/20"
                    contentContainerClassName="mb-0"
                    placeholderTextColor={"white"}
                    style={{
                      width: width * 0.55,
                    }}
                  />
                )}
              />
              <TouchableOpacity
                onPress={router.back}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: appColor.WHITE,
                  backgroundColor: "#ffffff20",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 12,
                }}
              >
                <Svg.Send height={18} fill={"#fff"} />
              </TouchableOpacity>
            </View>
          )}
        </Form>
      </View>
    </ImageBackground>
  )
}

export default Photo
