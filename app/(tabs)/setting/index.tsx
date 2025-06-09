import AuthRouter from "@/components/AuthRouter";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function MyScreen() {
  return (
    <AuthRouter>
      <SafeAreaView>
        <Text>설정 스크린</Text>
      </SafeAreaView>
    </AuthRouter>
  );
}

const styles = StyleSheet.create({});
