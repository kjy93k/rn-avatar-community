import FixedBottomCTA from "@/components/FixedBottomCTA";
import PasswordConfirmInput from "@/components/InputField/PasswordConfirmInput";
import PasswordInput from "@/components/InputField/PasswordInput";
import useAuth from "@/hooks/queries/useAuth";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import EmailInput from "../../components/InputField/EmailInput";
interface signupProps {}
type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};
const SignupScreen = ({}: signupProps) => {
  const { signupMutation } = useAuth();
  const signupForm = useForm<FormValues>({
    defaultValues: { email: "", password: "", passwordConfirm: "" },
  });

  const onSubmit: SubmitHandler<FormValues> = (formValues) => {
    const { email, password } = formValues;
    signupMutation.mutate({ email, password });
  };
  return (
    <FormProvider {...signupForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput submitBehavior="submit" />
        <PasswordConfirmInput />
      </View>
      <FixedBottomCTA
        label="회원가입하기"
        onPress={signupForm.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});

export default SignupScreen;
