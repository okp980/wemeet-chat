import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native"
import React, { useEffect, useState } from "react"
import { CustomText, Layout } from "../../components"
import { WebView } from "react-native-webview"
import { Stack, router } from "expo-router"
import { Svg } from "@/constants"

type Props = {}

const WebScreen = ({ route }: any) => {
  const { params } = route

  return (
    <Layout className="p-0">
      <Stack.Screen
        options={{
          headerShown: true,
          headerShadowVisible: false,
          // headerTintColor: '#E94057',
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity onPress={router.back}>
              <Svg.LeftCaret fill={tintColor} width={20} height={18} />
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
          headerTitle: () => <CustomText size="h2">weMeet</CustomText>,
        }}
      />
      <WebView
        source={{ uri: params?.url }}
        style={{ flex: 1 }}
        renderLoading={() => (
          <View style={{ flex: 1 }}>
            <ActivityIndicator size="large" color="#E94057" />
          </View>
        )}
        startInLoadingState={true}
      />
    </Layout>
  )
}

export default WebScreen
