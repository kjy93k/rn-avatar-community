import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { Link } from "expo-router";
import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.loginContainer}>
        <InputField label="Email" placeholder="이메일을 입력해주세요." />
        <InputField label="Password" placeholder="비밀번호를 입력해주세요." />
        <View style={styles.buttonContainer}>
          <CustomButton label="로그인하기" onPress={() => {}} />
          <Link href={"/auth/signup"} style={styles.signupText}>
            이메일로 가입하기
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 112,
    height: 112,
  },

  loginContainer: {
    flex: 1.5,
    paddingHorizontal: 32,
    gap: 16,
  },
  buttonContainer: {
    gap: 16,
    marginTop: 10,
  },

  signupText: {
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
