import { View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { Svg } from "../../constants";
import FastImage from "react-native-fast-image";
import { Stack, router } from "expo-router";
import { Layout } from "@/components";
import { appColor } from "@/constants/color";

type Props = {};

const Gallery = ({ navigation }: any) => {
  return (
    <Layout style={{ flex: 1 }}>
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

      <FastImage
        source={{
          uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
        style={{ flex: 1 }}
      />
      <View
        style={{
          height: 125,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View>
          <FlatList
            data={["", "", "", "", ""]}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
            renderItem={() => (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: appColor.BORDER,
                  borderRadius: 16,
                  width: 80,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FastImage
                  source={{
                    uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                  }}
                  style={{
                    borderRadius: 4,
                    height: "100%",
                    width: "100%",
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Gallery;
