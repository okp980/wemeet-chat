import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import { Svg } from "../../constants";
import { Button, CustomText, Layout } from "../../components";
import FastImage from "react-native-fast-image";
import { Link, Stack, router } from "expo-router";
import { appColor } from "@/constants/color";
import { ThemedView } from "@/components/ThemedView";

type Props = {};

const interests = ["Travelling", "Books", "Music", "Dancing", "Modeling"];

const Profile = ({ navigation }: any) => {
  return (
    <Layout>
      <ScrollView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            presentation: "fullScreenModal",
            headerShown: true,
            headerTransparent: true,
            title: "",
            headerLeft: () => (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: appColor.BORDER,
                  borderRadius: 16,
                  height: 48,
                  width: 56,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#ffffff20",
                }}
                onPress={router.back}
              >
                <Svg.LeftCaret fill={"#fff"} />
              </TouchableOpacity>
            ),
          }}
        />
        <ImageBackground
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
          resizeMode="cover"
          style={{ height: 500 }}
        ></ImageBackground>
        <ThemedView
          style={{
            position: "relative",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            top: -35,
            paddingHorizontal: 40,
            paddingTop: 80,
            paddingBottom: 40,
            gap: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <CustomText size="h6" weight="medium">
                Jessica Parker, 23
              </CustomText>
              <CustomText>Professional model</CustomText>
            </View>

            <TouchableOpacity
              style={[
                // styles.shadow,
                {
                  height: 56,
                  width: 56,
                  borderRadius: 56 / 2,
                  borderWidth: 1,
                  borderColor: appColor.PRIMARY,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: 'transparent",',
                },
              ]}
            >
              <Svg.Send fill={appColor.PRIMARY} />
            </TouchableOpacity>
          </View>

          <View>
            <CustomText size="h6" weight="medium">
              Location
            </CustomText>
            <CustomText size="small">Chicago, IL United States</CustomText>
          </View>
          <View>
            <CustomText size="h6" weight="medium">
              About
            </CustomText>
            <CustomText>
              My name is Jessica Parker and I enjoy meeting new people and
              finding ways to help them have an uplifting experience. I enjoy
              reading..
            </CustomText>
            <Button
              variant="text"
              btnStyle={{ marginTop: 8 }}
              textStyle={{
                color: appColor.PRIMARY,
                fontFamily: "AirbnbCereal-Medium",
              }}
            >
              Read more
            </Button>
          </View>
          <View>
            <CustomText size="h6" weight="medium">
              Interests
            </CustomText>
            <View
              style={{
                flexDirection: "row",
                gap: 6,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {interests.map((interest, index) => (
                <View
                  key={index}
                  style={{
                    width: "25%",
                    borderWidth: 1,
                    borderRadius: 4,
                    borderColor: "#E8E6EA",
                    padding: 8,
                  }}
                >
                  <CustomText size="small">{interest}</CustomText>
                </View>
              ))}
            </View>
          </View>
          <View style={{ marginTop: 8 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <CustomText size="h6" weight="medium">
                Gallery
              </CustomText>

              <Link href={{ pathname: "gallery", params: { user: "1" } }}>
                <CustomText
                  size="small"
                  weight="medium"
                  lightColor={appColor.PRIMARY}
                  darkColor={appColor.PRIMARY}
                >
                  See all
                </CustomText>
              </Link>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <FastImage
                source={{
                  uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                style={{
                  flex: 1,
                  height: 196,
                  borderRadius: 4,
                }}
              />
              <FastImage
                source={{
                  uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                style={{
                  flex: 1,
                  height: 196,
                  borderRadius: 4,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: 4,
              }}
            >
              <FastImage
                source={{
                  uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                style={{
                  flex: 1,
                  height: 122,
                  borderRadius: 4,
                }}
              />
              <FastImage
                source={{
                  uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                style={{
                  flex: 1,
                  height: 122,
                  borderRadius: 4,
                }}
              />
              <FastImage
                source={{
                  uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                style={{
                  flex: 1,
                  height: 122,
                  borderRadius: 4,
                }}
              />
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              top: -50,
              left: "10%",
              right: "10%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={[
                  {
                    height: 64,
                    width: 64,
                    borderRadius: 64 / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  styles.shadow,
                ]}
              >
                <Svg.Times height={30} fill={"red"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.shadow,
                  {
                    backgroundColor: appColor.PRIMARY,

                    height: 96,
                    width: 96,
                    borderRadius: 96 / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Svg.Heart height={30} fill={"orange"} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.shadow,
                  {
                    height: 64,
                    width: 64,
                    borderRadius: 64 / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Svg.Star height={30} fill={"#8A2387"} />
              </TouchableOpacity>
            </View>
          </View>
        </ThemedView>
      </ScrollView>
    </Layout>
  );
};

export default Profile;

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
