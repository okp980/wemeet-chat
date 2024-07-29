import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import FastImage from "react-native-fast-image";
import { User } from "../../types/auth";
import CustomText from "../customText/CustomText";

type Props = {
  info: User;
};
const { width, height } = Dimensions.get("screen");

export const cardWidth = width * 0.75;
export const cardHeight = height * 0.5;

const SwipeCard = ({ info }: Props) => {
  return (
    // <TouchableOpacity
    //   // @ts-ignore
    //   onPress={() => navigate(Navigation.PROFILE_MODAL)}
    //   className="absolute h-[450px] z-[2] flex-1 justify-end rounded-2xl w-full max-w-[295px] ">

    <View style={[styles.card]}>
      <FastImage
        source={{ uri: info?.profile?.image }}
        style={[styles.image, StyleSheet.absoluteFillObject]}
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.75)"]}
        style={[
          StyleSheet.absoluteFillObject,
          { top: "50%", borderRadius: 16 },
        ]}
      />
      <View style={styles.info}>
        <CustomText size="h2" style={{ color: "white" }}>
          {info?.profile?.firstName}, {info?.profile?.gender}
        </CustomText>
      </View>
    </View>

    // </TouchableOpacity>
  );
};

export default SwipeCard;

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    height: cardHeight,
    // aspectRatio: 1 / 1.5,
    justifyContent: "flex-end",
    borderRadius: 16,
  },
  image: {},
  info: {
    padding: 15,
  },
});
