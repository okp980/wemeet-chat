import { View, Text } from "react-native"
import React, { forwardRef } from "react"
import CustomBottomSheetModal from "../customBottomSheetModal/CustomBottomSheetModal"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { Calendar } from "react-native-calendars"
import { format, getMonth } from "date-fns"
import CustomText from "../customText/CustomText"
import { appColor } from "@/constants/color"

type Props = {
  onChange: (data: string) => void
}
type Ref = BottomSheetModal

const Birthday = forwardRef<Ref, Props>(({ onChange }, ref) => {
  return (
    <CustomBottomSheetModal ref={ref} points={["70%"]}>
      <>
        <CustomText style={{ marginBottom: 8, textAlign: "center" }}>
          Birthday
        </CustomText>
        <Calendar
          onDayPress={(day) => onChange(day.dateString)}
          theme={{
            arrowColor: "#000000",
            dayTextColor: "#000000",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: appColor.PRIMARY,
            selectedDayTextColor: "#ffffff",
            todayTextColor: appColor.PRIMARY,
          }}
          renderHeader={(date) => (
            <View>
              <CustomText
                weight="regular"
                size="h3"
                lightColor={appColor.PRIMARY}
                darkColor={appColor.PRIMARY}
                style={{
                  textAlign: "center",
                }}
              >
                {format(new Date(date), "yyyy")}
              </CustomText>
              <CustomText
                lightColor={appColor.PRIMARY}
                darkColor={appColor.PRIMARY}
                style={{
                  textAlign: "center",
                }}
              >
                {format(new Date(date), "MMMM")}
              </CustomText>
            </View>
          )}
        />
      </>
    </CustomBottomSheetModal>
  )
})

export default Birthday
