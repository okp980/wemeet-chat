import { CustomText } from "@/components"
import { Navigation, Svg } from "@/constants"
import { useNotification } from "@/hooks"
import { Tabs } from "expo-router"
import React from "react"
import { View } from "react-native"

export default function TabLayout() {
  const { hasMatchRequest } = useNotification()

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 70 },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let icon
          switch ((route.name as string).toLowerCase()) {
            case Navigation.HOME_SCREEN.toLowerCase():
              icon = <Svg.Home fill={focused ? "#E94057" : "#ADAFBB"} />
              break
            case Navigation.MATCH_SCREEN.toLowerCase():
              icon = (
                <View>
                  <Svg.Heart
                    width={23}
                    fill={focused ? "#E94057" : "#ADAFBB"}
                  />
                  {hasMatchRequest && (
                    <View className="bg-[#E94057] h-3 w-3 justify-center items-center rounded-full absolute top-[6px] right-[-4px] border border-[#F3F3F3]" />
                  )}
                </View>
              )
              break
            case Navigation.CHAT_SCREEN.toLowerCase():
              icon = (
                <View>
                  <Svg.Message fill={focused ? "#E94057" : "#ADAFBB"} />
                  <View className="bg-[#E94057] h-5 w-5 justify-center items-center rounded-full absolute top-[-8px] right-[-10px] border border-[#F3F3F3]">
                    <CustomText size="tiny" color="white">
                      5
                    </CustomText>
                  </View>
                </View>
              )
              break
            case Navigation.PROFILE_SCREEN.toLowerCase():
              icon = <Svg.Person fill={focused ? "#E94057" : "#ADAFBB"} />
              break

            default:
              icon = null
              break
          }

          return icon
        },
        headerTitleAlign: "left",
        headerShadowVisible: false,
        headerStyle: {
          height: 80,
        },
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: "700",
        },
      })}
    >
      <Tabs.Screen
        name={"index"}
        options={{
          headerTitle: () => (
            <>
              <CustomText size="h1" className="text-3xl">
                Discover
              </CustomText>
              <CustomText size="small">Chicago,ll.</CustomText>
            </>
          ),
        }}
      />
      <Tabs.Screen name={"match"} options={{ headerTitle: "Matches" }} />
      <Tabs.Screen
        name={"chat"}
        options={{
          headerTitle: "Chats",
        }}
      />
      <Tabs.Screen name={"profile"} options={{ headerTitle: "Profile" }} />
    </Tabs>
  )
}
