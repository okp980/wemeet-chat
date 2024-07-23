import { CustomText } from "@/components"
import { Svg } from "@/constants"
import { appColor } from "@/constants/color"
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
            case "index":
              icon = <Svg.Home fill={focused ? appColor.PRIMARY : "#ADAFBB"} />
              break
            case "match":
              icon = (
                <View>
                  <Svg.Heart
                    width={23}
                    fill={focused ? appColor.PRIMARY : "#ADAFBB"}
                  />
                  {hasMatchRequest && (
                    <View
                      style={{
                        backgroundColor: appColor.PRIMARY,
                        height: 12,
                        width: 12,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 12 / 6,
                        position: "absolute",
                        top: 6,
                        right: -4,
                        borderWidth: 1,
                        borderColor: "##F3F3F3",
                      }}
                    />
                  )}
                </View>
              )
              break
            case "chat":
              icon = (
                <View>
                  <Svg.Message fill={focused ? appColor.PRIMARY : "#ADAFBB"} />
                  <View
                    style={{
                      backgroundColor: appColor.PRIMARY,
                      height: 20,
                      width: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 12 / 6,
                      position: "absolute",
                      top: -8,
                      right: -10,
                      borderWidth: 1,
                      borderColor: "##F3F3F3",
                    }}
                  >
                    <CustomText size="tiny" style={{ color: "white" }}>
                      5
                    </CustomText>
                  </View>
                </View>
              )
              break
            case "profile":
              icon = (
                <Svg.Person fill={focused ? appColor.PRIMARY : "#ADAFBB"} />
              )
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
          fontSize: 32,
          fontFamily: "NotoSansBold",
        },
      })}
    >
      <Tabs.Screen
        name={"index"}
        options={{
          headerTitle: () => (
            <>
              <CustomText size="h4" className="text-3xl">
                Discover
              </CustomText>
              <CustomText size="small">Chicago,ll.</CustomText>
            </>
          ),
        }}
      />
      <Tabs.Screen name={"match"} options={{ title: "Matches" }} />
      <Tabs.Screen
        name={"chat"}
        options={{
          title: "Chats",
        }}
      />
      <Tabs.Screen name={"profile"} options={{ title: "Profile" }} />
    </Tabs>
  )
}
