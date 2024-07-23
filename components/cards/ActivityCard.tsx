import { View, Text, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import FastImage from "react-native-fast-image"
import CustomText from "../customText/CustomText"
import { MeetRequestResponse } from "../../types/meet"
import socket from "../../services/socket"
import { appColor } from "@/constants/color"
import { ThemedView } from "../ThemedView"

type Props = {
  meet: MeetRequestResponse
  userId: number
  openMessage: () => void
}

const ActivityCard = ({ meet, openMessage }: Props) => {
  const [isOnline, setIsOnline] = useState(false)
  useEffect(() => {
    const onActiveStatus = (activeUser: any) => {
      console.log("active user", activeUser)
      if (activeUser.id === meet.id) {
        setIsOnline(activeUser.isActive)
      }
    }
    socket.on("isActive", onActiveStatus)
    return () => {
      socket.off("isActive", onActiveStatus)
    }
  }, [socket])
  return (
    <TouchableOpacity
      style={{ alignItems: "center", gap: 4 }}
      onPress={openMessage}
    >
      <View
        style={{
          height: 64,
          width: 64,
          borderRadius: 64 / 2,
          backgroundColor: appColor.PRIMARY,
          justifyContent: "center",
          position: "relative",
        }}
      >
        <FastImage
          source={{ uri: meet?.profile?.image }}
          style={{
            height: 60,
            width: 60,
            borderRadius: 60 / 2,
            borderWidth: 1,
            borderColor: appColor.WHITE,
          }}
        />
        {isOnline && (
          <ThemedView
            lightColor={appColor.GREEN}
            darkColor={appColor.GREEN}
            style={{
              height: 16,
              width: 16,
              borderRadius: 16 / 2,
              backgroundColor: appColor.PRIMARY,
              justifyContent: "center",
              position: "absolute",
              right: 4,
              bottom: 0,

              borderWidth: 2,
              borderColor: appColor.WHITE,
            }}
          />
        )}
      </View>
      <CustomText size="small">{meet?.profile?.firstName}</CustomText>
    </TouchableOpacity>
  )
}

export default ActivityCard
