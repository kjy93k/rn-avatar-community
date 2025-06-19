import AuthRoute from "@/components/AuthRoute";
import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import { Entypo, Octicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ListItem from "../../../components/ListItem";

export default function SettingScreen() {
  const { logout } = useAuth();

  return (
    <AuthRoute>
      <SafeAreaView>
        <View style={styles.space} />
        <ListItem
          title={"언어설정"}
          // onPress={}
          icon={<Entypo name="language" size={16} color={colors.BLACK} />}
        />
        <View style={styles.space} />
        <ListItem
          title={"로그아웃"}
          onPress={logout}
          icon={<Octicons name="sign-out" size={16} color={colors.BLACK} />}
        />
      </SafeAreaView>
    </AuthRoute>
  );
}

const styles = StyleSheet.create({
  space: {
    height: 30,
  },
});
