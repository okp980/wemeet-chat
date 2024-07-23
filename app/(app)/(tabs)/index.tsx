import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect, useRef } from "react"
import { CustomSwiper, Filter, Layout, SwipeCard } from "../../../components"
import Svg from "../../../constants/svg"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useUsersQuery } from "../../../services/modules/user"
import Swiper from "react-native-deck-swiper"
import { useRequestMeetMutation } from "../../../services/modules/meet-request"
import { appColor } from "@/constants/color"

const Home = ({ navigation }: any) => {
  const bottomRef = useRef<BottomSheetModal>(null)
  const swiperRef = useRef<Swiper<any>>(null)

  const { data: users, isLoading } = useUsersQuery({ limit: 10, page: 1 })
  const [sendRequest] = useRequestMeetMutation()

  console.log(users)

  const openFilter = () => {
    bottomRef?.current?.present()
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ marginRight: 16 }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: appColor.BORDER,
              height: 48,
              width: 56,
              borderRadius: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={openFilter}
          >
            <Svg.Filter />
          </TouchableOpacity>
        </View>
      ),
    })
  }, [])

  if (isLoading)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={"small"} color={appColor.PRIMARY} />
      </View>
    )

  return (
    <Layout style={{ gap: 8 }}>
      <View style={{ flex: 1 }}>
        <CustomSwiper
          cards={(users?.data as any) ?? []}
          renderCard={(card) => <SwipeCard info={card} />}
          ref={swiperRef}
          onSwipedRight={async (cardIndex: number) => {
            console.log("id of the user is ", users?.data[cardIndex]?.id)

            const so = await sendRequest({
              recipient: users?.data[cardIndex]?.id as number,
            }).unwrap()
            console.log("soooo", so)
          }}
        />
      </View>

      <View
        style={{
          height: 112,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
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
          onPress={() => swiperRef.current?.swipeLeft()}
        >
          <Svg.Times fill={"#F27121"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              height: 96,
              width: 96,
              borderRadius: 96 / 2,
              alignItems: "center",
              justifyContent: "center",
            },
            styles.shadow,
            styles.likeBtn,
          ]}
          onPress={() => swiperRef.current?.swipeRight()}
        >
          <Svg.Heart fill={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
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
          <Svg.Star fill={"#8A2387"} />
        </TouchableOpacity>
      </View>
      <Filter ref={bottomRef} />
    </Layout>
  )
}

export default Home

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
  likeBtn: {
    backgroundColor: "#E94057",
  },
})
