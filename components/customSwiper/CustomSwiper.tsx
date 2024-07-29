import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { forwardRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Svg from "../../constants/svg";
import SwipeCard, { cardHeight, cardWidth } from "../cards/SwipeCard";
import { dummyCards } from "../../helpers/data";
import Swiper, { SwiperProps } from "react-native-deck-swiper";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "../../constants";
import { User } from "../../types/auth";
import { appColor } from "@/constants/color";
import { router } from "expo-router";

type Ref = Swiper<any>;
type Props = {} & SwiperProps<any>;

const { width } = Dimensions.get("screen");

const CustomSwiper = forwardRef<Ref, Props>((props, ref) => {
  return (
    <Swiper
      ref={ref}
      stackSize={2}
      verticalSwipe={false}
      // infinite={true}
      stackSeparation={-20}
      cardHorizontalMargin={(width - 40 - cardWidth) / 2}
      cardVerticalMargin={10}
      disableTopSwipe
      onTapCard={(props) => {
        console.log("well");
        // @ts-ignore
        router.navigate(Navigation.PROFILE_MODAL);
      }}
      disableBottomSwipe
      outputRotationRange={["-20deg", "0deg", "20deg"]}
      containerStyle={{
        backgroundColor: "transparent",
        alignItems: "center",
      }}
      backgroundColor="transparent"
      cardStyle={{
        width: cardWidth,
        height: cardHeight,
        borderRadius: 16,
      }}
      overlayLabels={{
        left: {
          element: (
            <LinearGradient
              colors={["transparent", "#E9405775"]}
              style={{
                borderRadius: 16,
                width: "100%",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={[
                  {
                    height: 80,
                    width: 80,
                    borderRadius: 80 / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  styles.shadow,
                ]}
              >
                <Svg.Times fill={appColor.PRIMARY} />
              </View>
            </LinearGradient>
          ),
          title: "Cancel",
          style: {
            wrapper: {
              alignItems: "center",
              justifyContent: "center",
            },
          },
        },
        right: {
          element: (
            <LinearGradient
              colors={["transparent", "#E9405775"]}
              style={{
                borderRadius: 16,
                width: "100%",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={[
                  {
                    height: 80,
                    width: 80,
                    borderRadius: 80 / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  styles.shadow,
                ]}
              >
                <Svg.Heart fill={appColor.PRIMARY} width={30} height={30} />
              </View>
            </LinearGradient>
          ),
          title: "Accept",
          style: {
            wrapper: {
              alignItems: "center",
              justifyContent: "center",
            },
          },
        },
      }}
      {...props}
    />
  );
});

export default CustomSwiper;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    elevation: 3,
    backgroundColor: "white",
  },
});
