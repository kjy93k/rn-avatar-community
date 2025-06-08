import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import EmailInput from "../../components/InputField/EmailInput";
import PasswordInput from "../../components/InputField/PasswordInput";

type FormValues = {
  email: string;
  password: string;
};

export default function AuthScreen() {
  const loginForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (formValues) => {
    console.log("formValues", formValues);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FormProvider {...loginForm}>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.loginContainer}>
          <EmailInput />
          <PasswordInput />
          <View style={styles.buttonContainer}>
            <CustomButton
              label="로그인하기"
              onPress={loginForm.handleSubmit(onSubmit)}
            />
            <Link href={"/auth/signup"} style={styles.signupText}>
              이메일로 가입하기
            </Link>
          </View>
        </View>
      </FormProvider>
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
    flex: 3,
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
