import AuthRoute from "@/components/AuthRoute";
import useAuth from "@/hooks/queries/useAuth";
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";

export default function SettingScreen() {
  const { logout } = useAuth();

  return (
    <AuthRoute>
      <SafeAreaView>
        <Text>설정 스크린</Text>
        <Pressable onPress={logout}>
          <Text>로그아웃</Text>
        </Pressable>
      </SafeAreaView>
    </AuthRoute>
  );
}

const styles = StyleSheet.create({});
