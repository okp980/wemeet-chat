import { View } from "react-native";
import React, { forwardRef, useState } from "react";
import CustomBottomSheetModal from "../customBottomSheetModal/CustomBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import CustomText from "../customText/CustomText";
import Button from "../button/Button";
import CustomSlider from "../customSlider/CustomSlider";
import CustomRangeSlider from "../customRangeSlider/CustomRangeSlider";
import { appColor } from "@/constants/color";

type Props = {};
type Ref = BottomSheetModal;

const Filter = forwardRef<Ref, Props>((props, ref) => {
  const [gender, setGender] = useState<"male" | "female" | "both">("male");

  const formatDistance = (value: string) => `${value}km`;
  const formatAgeRange = (min: number, max: number) => `${min}-${max}`;
  return (
    <CustomBottomSheetModal ref={ref} points={["80%"]}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            position: "relative",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomText size="h5" weight="medium">
            Filter
          </CustomText>
          <Button
            variant="text"
            textStyle={{
              fontFamily: "AirbnbCereal-Medium",
              color: appColor.PRIMARY,
            }}
            btnStyle={{ position: "absolute", top: "33.33%", right: 16 }}
          >
            Clear
          </Button>
        </View>
        <View style={{ flex: 1 }}>
          <CustomText size="h5" style={{ marginTop: 40, marginBottom: 20 }}>
            Interested in
          </CustomText>
          <View
            style={{
              borderRadius: 16,
              borderWidth: 1,
              borderColor: "#E8E6EA",
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <Button
              onPress={() => setGender("female")}
              variant="text"
              btnStyle={[
                {
                  flex: 1,
                  height: 56,
                  justifyContent: "center",
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 16,
                },
                gender === "female" && {
                  backgroundColor: appColor.PRIMARY,
                },
              ]}
              textStyle={[
                { alignItems: "center" },
                gender === "female" && { backgroundColor: appColor.WHITE },
              ]}
            >
              Girls
            </Button>
            <Button
              onPress={() => setGender("male")}
              variant="text"
              btnStyle={[
                {
                  flex: 1,
                  height: 56,
                  display: "flex",
                  justifyContent: "center",
                },
                gender === "male" && { backgroundColor: appColor.PRIMARY },
              ]}
              textStyle={[
                { alignItems: "center" },
                gender === "male" && { backgroundColor: appColor.WHITE },
              ]}
            >
              Boys
            </Button>
            <Button
              onPress={() => setGender("both")}
              variant="text"
              btnStyle={[
                {
                  flex: 1,
                  height: 56,
                  display: "flex",
                  justifyContent: "center",
                  borderTopRightRadius: 16,
                  borderBottomRightRadius: 16,
                },
                gender === "both" && {
                  backgroundColor: appColor.PRIMARY,
                },
              ]}
              textStyle={[
                { alignItems: "center" },
                gender === "both" && { backgroundColor: appColor.WHITE },
              ]}
            >
              Both
            </Button>
          </View>

          <CustomSlider
            title="Distance"
            format={formatDistance}
            minimumValue={1}
            maximumValue={100}
          />
          <CustomRangeSlider
            title="Age"
            format={formatAgeRange}
            min={18}
            max={100}
          />
        </View>
        <View style={{ paddingVertical: 8 }}>
          <Button variant="primary" style={{ marginHorizontal: "auto" }}>
            Continue
          </Button>
        </View>
      </View>
    </CustomBottomSheetModal>
  );
});

export default Filter;
