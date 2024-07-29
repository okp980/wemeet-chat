import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomText from "../customText/CustomText";
import DatePicker from "react-native-date-picker";
import {
  differenceInYears,
  format,
  intervalToDuration,
  subYears,
} from "date-fns";
import { ThemedView } from "../ThemedView";
import { appColor } from "@/constants/color";

type Props = {
  label: string;
  onChange: (text: number) => void;
};

const CustomPicker = ({ label, onChange }: Props) => {
  const [date, setDate] = useState(subYears(new Date(), 18));
  const [open, setOpen] = useState(false);

  const handleConfirm = (date: Date) => {
    const { years } = intervalToDuration({ start: date, end: new Date() });
    setOpen(false);
    setDate(date);
    onChange(years!);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <TouchableOpacity onPress={() => setOpen(true)}>
      <ThemedView
        style={{
          borderRadius: 16,
          borderWidth: 1,
          borderColor: appColor.BORDER,
          paddingHorizontal: 12,
          paddingVertical: 16,
          position: "relative",
        }}
      >
        <CustomText>{format(date, "dd-MM-yyyy")}</CustomText>
        <ThemedView
          style={{
            position: "absolute",
            top: -8,
            left: 15,
            paddingHorizontal: 15,
          }}
        >
          <CustomText size="small">{label}</CustomText>
        </ThemedView>
      </ThemedView>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={handleClose}
        maximumDate={subYears(new Date(), 18)}
      />
    </TouchableOpacity>
  );
};

export default CustomPicker;
