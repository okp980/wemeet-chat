import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
// import Share from "react-native-share"
import * as Sharing from "expo-sharing";
import * as StoreReview from "expo-store-review";

import {
  CustomText,
  EditProfile,
  Layout,
  NotificationToggle,
  PassionList,
  ProfileItem,
} from "../../../components";
import FastImage from "react-native-fast-image";
import { Svg, Navigation } from "../../../constants";
import {
  useGetProfileQuery,
  useUpdateProfilePicMutation,
} from "../../../services/modules/auth";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { selectImage } from "../../../helpers/utils";
import { showMessage } from "react-native-flash-message";
// import { GoogleSignin } from "@react-native-google-signin/google-signin"
import { useAuth } from "../../../hooks";
import { appColor } from "@/constants/color";
import LoadingView from "@/components/loadingView/LoadingView";
import { router, useNavigation } from "expo-router";

type Props = {};

const Profile = () => {
  const navigation = useNavigation();
  const { data: profile, isLoading, refetch } = useGetProfileQuery();
  const [updatePic] = useUpdateProfilePicMutation();
  const { removeAuth } = useAuth();
  const [modalType, setModalType] = useState<"bio" | "name" | null>(null);
  const bottomRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 16 }} onPress={signOut}>
          <CustomText weight="bold">Sign Out</CustomText>
        </TouchableOpacity>
      ),
    });
  }, []);

  const openEditProfileModal = (type: "name" | "bio") => {
    setModalType(type);
    bottomRef?.current?.present({ type });
  };

  const handleShare = async () => {
    try {
      // await Share.open({
      //   title: "weMeet",
      //   message: "Checkout weMeet chat",
      //   url: "https://wemeet.page.link",
      // })
    } catch (error) {
      console.log("error with sharing app", error);
    }
  };

  const handleSelectImage = async () => {
    const uri = await selectImage();
    if (!uri) return;
    const formData = new FormData();
    // @ts-ignore
    formData.append("image", {
      uri: uri,
      name: "image.jpg",
      type: "image/jpeg",
    });
    try {
      await updatePic(formData).unwrap();
    } catch (error) {
      showMessage({ message: "Failed to update profile pic", type: "danger" });
    }
  };

  const handleRateApp = () => {
    // This package is only available on android version >= 21 and iOS >= 10.3

    // Give you result if version of device supported to rate app or not!
    StoreReview.isAvailableAsync();

    // trigger UI InAppreview
    StoreReview.requestReview()
      .then((hasFlowFinishedSuccessfully) => {
        // when return true in android it means user finished or close review flow
        console.log("InAppReview in android", hasFlowFinishedSuccessfully);

        // when return true in ios it means review flow lanuched to user.
        console.log(
          "InAppReview in ios has launched successfully",
          hasFlowFinishedSuccessfully
        );

        // 1- you have option to do something ex: (navigate Home page) (in android).
        // 2- you have option to do something,
        // ex: (save date today to lanuch InAppReview after 15 days) (in android and ios).

        // 3- another option:
        // if (hasFlowFinishedSuccessfully) {
        //   // do something for ios
        //   // do something for android
        // }

        // for android:
        // The flow has finished. The API does not indicate whether the user
        // reviewed or not, or even whether the review dialog was shown. Thus, no
        // matter the result, we continue our app flow.

        // for ios
        // the flow lanuched successfully, The API does not indicate whether the user
        // reviewed or not, or he/she closed flow yet as android, Thus, no
        // matter the result, we continue our app flow.
      })
      .catch((error) => {
        //we continue our app flow.
        // we have some error could happen while lanuching InAppReview,
        // Check table for errors and code number that can return in catch.
        console.log(error);
      });
  };

  const signOut = async () => {
    try {
      //   await GoogleSignin.signOut()
      removeAuth();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <LoadingView />;

  return (
    <Layout style={{ padding: 30 }}>
      <View
        style={{
          paddingTop: 8,
          marginBottom: 32,
          flexDirection: "row",
          gap: 16,
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "relative",
            height: 96,
            width: 96,
            borderRadius: 36 / 2,
          }}
        >
          <FastImage
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
            style={{ height: 96, width: 96, borderRadius: 36 / 2 }}
          />
          <TouchableOpacity onPress={handleSelectImage}>
            <View
              style={{
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: appColor.PRIMARY,
                height: 36,
                width: 36,
                borderRadius: 36 / 2,
                borderWidth: 1,
                borderColor: "#ffffff",
                right: 5,
                bottom: 5,
              }}
            >
              <Svg.Camera />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ position: "relative" }}>
          <CustomText size="h6" weight="medium">
            {profile?.name}
          </CustomText>
          <CustomText>
            <CustomText weight="bold">22</CustomText> Meets
          </CustomText>
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 4,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 24 / 2,
              width: 24,
              height: 24,
              right: 30,
            }}
            onPress={() => openEditProfileModal("name")}
          >
            <Svg.Edit fill={"white"} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      >
        <ProfileItem
          title="Edit Bio"
          icon={
            <View
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 4,
                backgroundColor: appColor.PRIMARY,
              }}
            >
              <Svg.Person fill={"white"} width={16} />
            </View>
          }
          showCaret={false}
          handlePress={() => openEditProfileModal("bio")}
        />
        {/* <ThemeToggle /> */}
        <NotificationToggle />
        <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#D1D5DB",
            marginVertical: 20,
          }}
        >
          <ProfileItem
            title="Terms and conditions"
            icon={
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 4,
                  backgroundColor: appColor.PRIMARY,
                }}
              >
                <Svg.Home fill={"white"} width={16} />
              </View>
            }
            handlePress={() => {
              router.navigate({
                pathname: "web",
                params: {
                  url: "https://okp980.github.io/weMeet/terms_and_condition",
                },
              });
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <ProfileItem
            title="Privacy policy"
            icon={
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 4,
                  backgroundColor: appColor.PRIMARY,
                }}
              >
                <Svg.Info fill={"white"} width={18} />
              </View>
            }
            handlePress={() => {
              router.navigate({
                pathname: "web",
                params: {
                  url: "https://okp980.github.io/weMeet/terms_and_condition",
                },
              });
            }}
          />
          <View style={{ marginVertical: 8 }} />
          <ProfileItem
            title="Share with friends"
            icon={
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 4,
                  backgroundColor: appColor.PRIMARY,
                }}
              >
                <Svg.Share fill={"white"} width={16} />
              </View>
            }
            showCaret={false}
            handlePress={handleShare}
          />
          <View style={{ marginVertical: 8 }} />
          <ProfileItem
            title="Rate app"
            icon={
              <View
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 4,
                  backgroundColor: appColor.PRIMARY,
                }}
              >
                <Svg.Star fill={"white"} width={16} />
              </View>
            }
            showCaret={false}
            handlePress={handleRateApp}
          />
        </View>
        <CustomText style={{ textAlign: "center", marginVertical: 16 }}>
          Version 0.1.1
        </CustomText>
      </ScrollView>
      <EditProfile ref={bottomRef} type={modalType as "bio" | "name"} />
    </Layout>
  );
};

export default Profile;
