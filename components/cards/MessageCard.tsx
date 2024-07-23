import { View, TouchableOpacity } from "react-native"
import React from "react"
import FastImage from "react-native-fast-image"
import CustomText from "../customText/CustomText"
import { IChat } from "../../types/chat"
import { appColor } from "@/constants/color"

type Props = {
  item: IChat
  openMessage: () => void
}

const MessageCard = ({ item, openMessage }: Props) => {
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      }}
      onPress={openMessage}
    >
      <View
        style={{
          height: 64,
          width: 64,
          borderRadius: 64 / 2,
          backgroundColor: "#primary",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FastImage
          source={{ uri: item?.recipient?.profile?.image }}
          style={{
            height: 60,
            width: 60,
            borderRadius: 60 / 2,
            borderWidth: 1,
            borderColor: appColor.WHITE,
          }}
        />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#E8E6EA",
          display: "flex",
          flexDirection: "row",
          flex: 1,
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <CustomText size="h3">
            {item?.recipient?.profile?.firstName}
          </CustomText>
          <CustomText size="small">{item?.messages[0]?.content}</CustomText>
        </View>
        <View />
        <View
          style={{ justifyContent: "space-between", alignItems: "flex-end" }}
        >
          {/* TODO: come back to this */}
          {/* <CustomText size="small">23 min</CustomText>
          <View className="h-5 w-5 rounded-full bg-primary items-center justify-center">
            <CustomText size="small" className="font-semibold" color="white">
              1
            </CustomText>
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MessageCard
