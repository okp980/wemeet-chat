import { View, Text, FlatList } from "react-native"
import React, { useState } from "react"
import Button from "../button/Button"
import { interests } from "../../helpers/data"
import { appColor } from "@/constants/color"

type Props = {
  selectedInterests: string[]
  onSelectInterests: React.Dispatch<React.SetStateAction<string[]>>
}

const PassionList = ({ selectedInterests, onSelectInterests }: Props) => {
  const handleSelectInterest = (interest: string) => {
    const hasInterest = selectedInterests.includes(interest)
    if (hasInterest) {
      const newInterests = selectedInterests.filter((item) => item !== interest)
      onSelectInterests(newInterests)
      return
    }
    onSelectInterests((prev) => [...prev, interest])
  }

  return (
    <FlatList
      style={{ marginTop: 16 }}
      data={interests}
      renderItem={({ item: { Icon, interest } }) => (
        <Button
          style={{ margin: 4, paddingLeft: 4, paddingRight: 4 }}
          textStyle={{ fontSize: 10 }}
          variant={selectedInterests.includes(interest) ? "primary" : "outline"}
          startIcon={
            <Icon
              fill={
                selectedInterests.includes(interest) ? "#fff" : appColor.PRIMARY
              }
            />
          }
          onPress={() => handleSelectInterest(interest)}
        >
          {interest}
        </Button>
      )}
      keyExtractor={({ interest }, index) => interest + index}
      numColumns={2}
    />
  )
}

export default PassionList
