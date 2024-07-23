import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native"
import React from "react"
import { Svg } from "../../constants"
import { Button, CustomText, Layout } from "../../components"
import FastImage from "react-native-fast-image"
import { Link, Stack, router } from "expo-router"
import { appColor } from "@/constants/color"
import { ThemedView } from "@/components/ThemedView"

type Props = {}

const interests = ["Travelling", "Books", "Music", "Dancing", "Modeling"]

const Profile = ({ navigation }: any) => {
  return (
    <Layout>
      <ScrollView style={{ flex: 1 }}>
        <Stack.Screen options={{ presentation: "fullScreenModal" }} />
        <ImageBackground
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
          resizeMode="cover"
          style={{ height: 500 }}
        >
          <View style={{ paddingTop: 40, paddingLeft: 28 }}>
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
          </View>
        </ImageBackground>
        <ThemedView
          style={{
            position: "relative",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            top: -10,
            paddingHorizontal: 40,
            paddingTop: 80,
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
              <CustomText size="h2">Jessica Parker, 23</CustomText>
              <CustomText size="small">Professional model</CustomText>
            </View>
            <Button
              variant="outline"
              style={{ margin: 0, height: 56, width: 56 }}
              startIcon={<Svg.Send fill={appColor.PRIMARY} />}
            />
          </View>
          <View style={{ marginTop: 8 }}>
            <CustomText size="h3" style={{ marginBottom: 16 }}>
              Location
            </CustomText>
            <CustomText size="small">Chicago, IL United States</CustomText>
          </View>
          <View style={{ marginTop: 8 }}>
            <CustomText size="h3" style={{ marginBottom: 8 }}>
              About
            </CustomText>
            <CustomText>
              My name is Jessica Parker and I enjoy meeting new people and
              finding ways to help them have an uplifting experience. I enjoy
              reading..
            </CustomText>
            <Button variant="text" btnStyle={{ marginTop: 8 }}>
              Read more
            </Button>
          </View>
          <View style={{ marginTop: 8 }}>
            <CustomText size="h3" style={{ marginBottom: 8 }}>
              Interests
            </CustomText>
            <View
              style={{
                flexDirection: "row",
                gap: 4,
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
              }}
            >
              <CustomText size="h3" style={{ marginBottom: 16 }}>
                Gallery
              </CustomText>

              <Link href={{ pathname: "gallery", params: { user: "1" } }}>
                <CustomText
                  size="tiny"
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
          <View style={{ position: "absolute", top: -50, left: 0, right: 0 }}>
            <View
              style={{
                width: "80%",
                marginHorizontal: "auto",
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
                <Svg.Times height={30} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.shadow,
                  {
                    backgroundColor: appColor.PRIMARY,
                    shadowColor: appColor.PRIMARY,
                    shadowRadius: 10,
                    shadowOpacity: 0.25,
                    height: 96,
                    width: 96,
                    borderRadius: 96 / 2,
                  },
                ]}
              >
                <Svg.Heart height={30} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.shadow,
                  {
                    backgroundColor: appColor.PRIMARY,
                    shadowColor: appColor.PRIMARY,
                    shadowRadius: 10,
                    shadowOpacity: 0.25,
                    height: 96,
                    width: 96,
                    borderRadius: 96 / 2,
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
  )
}

export default Profile

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
    position: "relative",
  },
})
