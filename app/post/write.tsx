import ContentInput from "@/components/InputField/ContentInput";
import TitleInput from "@/components/InputField/TitleInput";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface PostWriteScreenProps {}
type FormValues = {
  title: string;
  content: string;
};

function PostWriteScreen({}: PostWriteScreenProps) {
  const postForm = useForm<FormValues>({
    defaultValues: {
      title: "",
      content: "",
    },
  });
  return (
    <FormProvider {...postForm}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <TitleInput />
        <ContentInput />
      </KeyboardAwareScrollView>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    gap: 16,
  },
});

export default PostWriteScreen;
