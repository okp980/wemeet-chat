import { View, Text } from "react-native"
import React, { useEffect, useState } from "react"
import Toggle from "react-native-toggle-element"

import CustomText from "../customText/CustomText"
import { Svg } from "../../constants"
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../services/modules/auth"
import { appColor } from "@/constants/color"

type Props = {}

const NotificationToggle = (props: Props) => {
  const { data, error } = useGetProfileQuery()
  const [update] = useUpdateProfileMutation()

  return (
    <View
      style={{
        marginTop: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View
        style={{
          borderRadius: 4,
          backgroundColor: appColor.PRIMARY,
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        <Svg.Send fill={"white"} width={15} />
      </View>
      <View style={{ flex: 1, paddingLeft: 16 }}>
        <CustomText>Push Notification</CustomText>
      </View>
      <View>
        <Toggle
          value={data?.getNotifications}
          onPress={(val) => update({ getNotifications: val as boolean })}
          trackBar={{
            width: 80,
            height: 35,
            radius: 20,
            activeBackgroundColor: appColor.PRIMARY,
            inActiveBackgroundColor: "#b4b8bb",
          }}
          thumbButton={{
            activeBackgroundColor: "#eadfdf",
            inActiveBackgroundColor: "#eadfdf",
          }}
          thumbStyle={{
            height: 35,
            width: 50,
          }}
        />
      </View>
    </View>
  )
}

export default NotificationToggle
