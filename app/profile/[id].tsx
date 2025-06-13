import { baseUrl } from "@/api/axios";
import AuthRoute from "@/components/AuthRoute";
import Tab from "@/components/Tab";
import UserFeedList from "@/components/UserFeedList";
import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import useGetUserProfile from "@/hooks/queries/useGetUserProfile";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { auth } = useAuth();
  const { id: userId } = useLocalSearchParams();
  const { data: profile } = useGetUserProfile(Number(userId));

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: colors.ORANGE_200,
      },
    });
  }, [navigation]);

  if (Number(userId) === Number(auth.id)) {
    return <Redirect href={"/my"} />;
  }

  return (
    <AuthRoute>
      <View style={styles.header}>
        <Image
          source={
            profile?.imageUri
              ? {
                  uri: `${
                    Platform.OS === "ios" ? baseUrl.ios : baseUrl.android
                  }/${profile?.imageUri}`,
                }
              : require("@/assets/images/avatar.png")
          }
          style={styles.avatar}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Text style={styles.nickname}>{profile?.nickname}</Text>
          <Text style={styles.introduce}>{profile?.introduce}</Text>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <Tab isActive>게시물</Tab>
      </View>

      <UserFeedList userId={Number(userId)} />
    </AuthRoute>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    backgroundColor: colors.ORANGE_200,
    width: "100%",
    height: 77,
  },
  avatar: {
    position: "absolute",
    left: 16,
    width: 154,
    height: 154,
    borderRadius: 154,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.Gray_500,
  },
  container: { marginTop: 77 },
  profile: { padding: 16, gap: 16 },
  nickname: {
    fontSize: 24,
    fontWeight: "bold",
  },
  introduce: {
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: "row",
  },
  tab: {},
});
