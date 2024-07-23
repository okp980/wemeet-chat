import { View, Text } from "react-native"
import React, { forwardRef } from "react"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import CustomBottomSheetModal from "../customBottomSheetModal/CustomBottomSheetModal"
import FastImage from "react-native-fast-image"
import CustomText from "../customText/CustomText"
import CustomChat from "../customChat/CustomChat"
import Layout from "../layout/Layout"
import { appColor } from "@/constants/color"
type Props = {
  // onChat: (message: string) => void;
  friendId: number | null
}
type Ref = BottomSheetModal

const Message = forwardRef<Ref, Props>(({ friendId }, ref) => {
  return (
    <CustomBottomSheetModal ref={ref} points={["90%"]}>
      <Layout style={{ flex: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <View
            style={{
              height: 64,
              width: 64,
              borderRadius: 64 / 2,
              backgroundColor: appColor.PRIMARY,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FastImage
              source={{
                uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: 60 / 2,
                borderWidth: 1,
                borderColor: "#ffffff",
              }}
            />
          </View>
          <View style={{ flex: 1, paddingTop: 8, paddingBottom: 8 }}>
            <CustomText size="h3">Joy</CustomText>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <View
                style={{
                  height: 7,
                  width: 7,
                  borderRadius: 7 / 2,
                  backgroundColor: appColor.PRIMARY,
                }}
              />
              <CustomText size="small" lightColor="gray" darkColor="gray">
                Online
              </CustomText>
            </View>
          </View>
        </View>
        <CustomChat friendId={friendId} />
      </Layout>
    </CustomBottomSheetModal>
  )
})

export default Message
