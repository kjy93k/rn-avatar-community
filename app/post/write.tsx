import CustomButton from "@/components/CustomButton";
import ImagePreviewList from "@/components/ImagePreviewList";
import DescriptionInput from "@/components/InputField/DescriptionInput";
import TitleInput from "@/components/InputField/TitleInput";
import useCreatePost from "@/hooks/queries/useCreatePost";
import { CreatePostDto } from "@/types";
import { useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PostWriteFooter from "../../components/PostWriteFooter";

interface PostWriteScreenProps {}

function PostWriteScreen({}: PostWriteScreenProps) {
  const navigation = useNavigation();
  const createPost = useCreatePost();
  const postForm = useForm<CreatePostDto>({
    defaultValues: {
      title: "",
      description: "",
      imageUris: [],
    },
  });

  const onSubmit = (formValues: CreatePostDto) => {
    createPost.mutate(formValues);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton
          label="저장"
          size="medium"
          variant="standard"
          onPress={postForm.handleSubmit(onSubmit)}
        />
      ),
    });
  }, []);

  return (
    <FormProvider {...postForm}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <TitleInput />
        <DescriptionInput />
        <ImagePreviewList imageUris={postForm.watch().imageUris} />
      </KeyboardAwareScrollView>
      <PostWriteFooter />
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
