import {
  View,
  Text,
  SectionList,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useEffect } from "react";
import { CustomText, Layout, MatchCard } from "../../../components";
import { useGetMeetRequestsQuery } from "../../../services/modules/meet-request";
import { getMatchData } from "../../../helpers/utils";
import { useNotification } from "../../../hooks";
import { appColor } from "@/constants/color";
import { ThemedView } from "@/components/ThemedView";
import LoadingView from "@/components/loadingView/LoadingView";
import ErrorView from "@/components/errorView/ErrorView";

type Props = {};

const Title = ({ title }: { title: string }) => (
  <ThemedView
    style={{
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 4,
    }}
  >
    <ThemedView
      lightColor="#E8E6EA"
      darkColor="#E8E6EA"
      className="h-[1px] flex-1 bg-[#E8E6EA]"
      style={{ height: 1, flex: 1 }}
    />
    <ThemedView style={{ flex: 1, alignItems: "center" }}>
      <CustomText size="small" style={{ textTransform: "capitalize" }}>
        {title}
      </CustomText>
    </ThemedView>
    <ThemedView
      lightColor="#E8E6EA"
      darkColor="#E8E6EA"
      className="h-[1px] flex-1 bg-[#E8E6EA]"
      style={{ height: 1, flex: 1 }}
    />
  </ThemedView>
);

const RenderSection = ({ data }: { data: any }) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({ item }) => <MatchCard {...item} />}
      keyExtractor={(item, index) => item.name + index}
      showsVerticalScrollIndicator={false}
    />
  );
};

const Match = (props: Props) => {
  const { changeHasMatchRequest } = useNotification();
  const {
    data: matches,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetMeetRequestsQuery({ status: "pending" });

  useEffect(() => {
    changeHasMatchRequest(false);
  }, []);

  if (isLoading) return <LoadingView />;
  // @ts-ignore
  if (isError) return <ErrorView message={error?.data?.message} />;

  return (
    <Layout style={{ paddingHorizontal: 20, paddingTop: 20 }}>
      <CustomText>
        This is a list of people who have liked you and your matches.
      </CustomText>
      <SectionList
        style={{ marginTop: 32 }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flex: 1,
        }}
        sections={getMatchData(matches?.data!) ?? []}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section: { title } }) => (
          <Title title={title} />
        )}
        renderItem={({ section: { data } }) => <RenderSection data={data} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View>
            <CustomText>No Likes yet</CustomText>
          </View>
        )}
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </Layout>
  );
};

export default Match;
