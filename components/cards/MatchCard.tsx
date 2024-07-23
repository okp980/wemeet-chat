import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import FastImage from "react-native-fast-image"
import CustomText from "../customText/CustomText"
import Svg from "../../constants/svg"
import { MeetRequestResponse } from "../../types/meet"
import { useUpdateMeetRequestMutation } from "../../services/modules/meet-request"
import { showMessage } from "react-native-flash-message"
import { appColor } from "@/constants/color"

// @ts-ignore
const MatchCard = ({ creator, id }: MeetRequestResponse) => {
  console.log("creator: " + JSON.stringify(creator))
  const [updateMeet] = useUpdateMeetRequestMutation()

  const handleUpdateMeet = async (status: "accepted" | "rejected") => {
    try {
      await updateMeet({ id, status }).unwrap()
    } catch (error) {
      showMessage({
        type: "danger",
        message: `Error occurred while ${status.slice(0, -2)}ing request`,
      })
    }
  }

  return (
    <View
      style={{
        width: "45%",
        margin: 12,
        borderRadius: 16,
        height: 208,
        backgroundColor: "#fed7aa",
      }}
    >
      <FastImage
        source={{ uri: creator?.profile?.image }}
        style={{ height: "100%", width: "100%", borderRadius: 16 }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        <View
          style={{
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <CustomText
            size="h3"
            lightColor={appColor.WHITE}
            darkColor={appColor.WHITE}
          >
            {creator?.profile?.firstName}, {creator?.profile?.age}
          </CustomText>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 40,
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fed7d7",
              borderBottomLeftRadius: 16,
            }}
            onPress={() => handleUpdateMeet("rejected")}
          >
            <Svg.Times width={20} height={20} fill={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#bfdbfe",
              borderBottomRightRadius: 16,
            }}
            onPress={() => handleUpdateMeet("accepted")}
          >
            <Svg.Heart width={20} height={20} fill={"white"} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#000000",
          borderRadius: 16,
          opacity: 0.3,
        }}
      />
    </View>
  )
}

export default MatchCard
