import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import React, { useEffect, useState } from "react"
import {
  Button,
  CustomInput,
  CustomPicker,
  CustomText,
  Layout,
} from "../../components"
import { Controller, useForm } from "react-hook-form"
import { Img, Navigation, Svg } from "../../constants"
import FastImage from "react-native-fast-image"
import { showMessage } from "react-native-flash-message"
import { useGetProfileQuery } from "../../services/modules/auth"
import { useBioDataMutation } from "../../services/modules/onboarding"
import { selectImage } from "@/helpers/utils"
import { appColor } from "@/constants/color"

type FormValues = {
  fullName: string
  age: number
}

const BioData = ({ navigation }: any) => {
  const [selectedImageURI, setSelectedImageURI] = useState("")
  const { data: profile, isSuccess, isError, error } = useGetProfileQuery()
  const [updateBioData, { isLoading: isLoadingBiodata }] = useBioDataMutation()

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      age: 18,
    },
  })

  useEffect(() => {
    if (profile) {
      reset({
        fullName: profile.name || "",
        age: profile.age || 18,
      })
      profile.image &&
        setSelectedImageURI(
          `${process.env.EXPO_PUBLIC_AWS_S3_LINK}/${profile.image}`
        )
    }
    if (error) {
      showMessage({
        message:
          "data" in error
            ? error?.data?.message
            : "Error fetching profile information",
        type: "danger",
      })
    }
  }, [isSuccess, profile, isError, error])

  const handleSelectImage = async () => {
    const uri = await selectImage()
    setSelectedImageURI(uri as string)
  }

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData()

    if (selectedImageURI.trim() === "") {
      showMessage({
        type: "danger",
        message: "Please attach an image of yourself before submitting.",
      })
      return
    }
    // @ts-ignore
    formData.append("image", {
      uri: selectedImageURI,
      name: "image.jpg",
      type: "image/jpeg",
    })
    formData.append("name", data.fullName)
    // @ts-ignore
    formData.append("age", data.age)
    try {
      await updateBioData(formData).unwrap()
      navigation.navigate(Navigation.GENDER_SCREEN)
    } catch (error: any) {
      console.log(error)
      showMessage({
        type: "danger",
        message:
          "data" in error ? error?.data?.message : "Error updating details",
      })
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Layout
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 40,
          paddingRight: 40,
          justifyContent: "space-between",
        }}
      >
        <CustomText size="h2">Profile details</CustomText>
        <View
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            position: "relative",
            borderRadius: 16,
            width: 112,
            height: 112,
          }}
        >
          <FastImage
            source={
              selectedImageURI || profile?.image
                ? { uri: selectedImageURI ?? profile?.image }
                : Img.UserPlaceholder
            }
            style={{ borderRadius: 16, width: 112, height: 112 }}
          />
          <TouchableOpacity onPress={handleSelectImage}>
            <View
              style={{
                backgroundColor: appColor.PRIMARY,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                height: 36,
                width: 36,
                borderRadius: 36 / 2,
                borderWidth: 1,
                borderColor: appColor.WHITE,
                right: -10,
                bottom: -10,
              }}
            >
              <Svg.Camera />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Controller
            control={control}
            name="fullName"
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                label="Full name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.fullName}
                placeholder="John Doe"
              />
            )}
          />

          <Controller
            control={control}
            name="age"
            render={({ field: { onChange } }) => (
              <CustomPicker label="Age" onChange={onChange} />
            )}
          />
          <Button
            variant="primary"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              marginTop: 20,
            }}
            loading={isLoadingBiodata}
            onPress={handleSubmit(onSubmit)}
          >
            Confirm
          </Button>
        </View>
      </Layout>
    </KeyboardAvoidingView>
  )
}

export default BioData
