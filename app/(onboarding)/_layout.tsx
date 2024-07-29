import React from "react";
import { OnboardHeader } from "../../components";
import { OnboardHeaderWithOutGoBack } from "../../components/onboardHeader/OnboardHeader";
import { Navigation } from "../../constants";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/hooks";

const Profilelayout = () => {
  const { token } = useAuth();

  if (!token) {
    return <Redirect href="/sign-in" />;
  }
  return (
    <Stack initialRouteName={Navigation.BIO_DATA_SCREEN}>
      <Stack.Screen
        name="bio"
        options={{
          header: () => <OnboardHeaderWithOutGoBack next={"gender"} />,
        }}
      />
      <Stack.Screen
        name="gender"
        options={{
          header: () => <OnboardHeader next={Navigation.PASSION_SCREEN} />,
        }}
      />
      <Stack.Screen
        name="passion"
        options={{
          header: () => <OnboardHeader next={Navigation.HOME_SCREEN} />,
        }}
      />
    </Stack>
  );
};

export default Profilelayout;
