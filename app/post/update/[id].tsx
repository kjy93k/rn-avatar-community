import CustomButton from "@/components/CustomButton";
import DescriptionInput from "@/components/InputField/DescriptionInput";
import TitleInput from "@/components/InputField/TitleInput";
import useGetPost from "@/hooks/queries/useGetPost";
import useUpdatePost from "@/hooks/queries/useUpdatePost";
import { CreatePostDto } from "@/types";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function PostUpdateScreen() {
  const { id } = useLocalSearchParams();
  const { data: post } = useGetPost(Number(id));
  const updatePost = useUpdatePost();
  const navigation = useNavigation();

  const postForm = useForm<CreatePostDto>();

  const onSubmit = (formValues: CreatePostDto) => {
    updatePost.mutate({ id: Number(id), body: formValues });
  };

  useEffect(() => {
    if (post) {
      postForm.reset({
        title: post?.title,
        description: post?.description,
        imageUris: post?.imageUris,
      });
    }
  }, [post, postForm]);

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

export default PostUpdateScreen;
