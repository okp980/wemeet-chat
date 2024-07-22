import { View, Text } from "react-native"
import React, { useState } from "react"
import { Button, CustomText, Layout } from "../../components"
import Svg from "../../constants/svg"
import { useGenderMutation } from "../../services/modules/onboarding"
import { showMessage } from "react-native-flash-message"
import { GenderDataBody } from "../../types/onboarding"
import { Navigation } from "../../constants"

type Props = any

const Gender = ({ navigation }: Props) => {
  const [gender, setGender] = useState<"male" | "female" | null>(null)
  const [updateGender, { isLoading }] = useGenderMutation()

  const onSubmit = async () => {
    if (!gender) {
      showMessage({
        type: "danger",
        message: "Please select your gender",
      })
      return
    }
    try {
      await updateGender({ gender } as GenderDataBody).unwrap()
      navigation.navigate(Navigation.PASSION_SCREEN)
    } catch (error: any) {
      showMessage({
        type: "danger",
        message:
          "data" in error ? error?.data?.message : "Error updating profile",
      })
    }
  }

  return (
    <Layout
      style={{
        justifyContent: "space-between",
        paddingHorizontal: 40,
        paddingVertical: 20,
      }}
    >
      <CustomText size="h2">I am a</CustomText>
      <View>
        <Button
          variant={gender === "male" ? "primary" : "outline"}
          btnStyle={{
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: 28,
          }}
          endIcon={gender === "male" ? <Svg.WhiteCheck /> : <Svg.DarkCheck />}
          onPress={() => setGender("male")}
        >
          Male
        </Button>
        <Button
          variant={gender === "female" ? "primary" : "outline"}
          btnStyle={{
            marginRight: "auto",
            marginLeft: "auto",
          }}
          endIcon={gender === "female" ? <Svg.WhiteCheck /> : <Svg.DarkCheck />}
          onPress={() => setGender("female")}
        >
          Female
        </Button>
      </View>
      <Button
        variant="primary"
        btnStyle={{
          marginRight: "auto",
          marginLeft: "auto",
        }}
        onPress={onSubmit}
        loading={isLoading}
      >
        Continue
      </Button>
    </Layout>
  )
}

export default Gender
