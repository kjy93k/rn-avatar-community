import { editProfile, getMe, postLogin, postSignup } from "@/api/auth";
import queryClient from "@/api/queryClient";
import { queryKeys } from "@/constants";
import { removeHeader, setHeader } from "@/utils/header";
import {
  deleteSecureStore,
  getSecureStore,
  saveSecureStore,
} from "@/utils/secureStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { useEffect } from "react";

const useSignup = () => {
  return useMutation({
    mutationFn: postSignup,
    onSuccess: () => router.replace("/auth"),
    onError: () => {
      console.log("err");
    },
  });
};

const useLogin = () => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ accessToken }) => {
      setHeader("Authorization", `Bearer ${accessToken}`);
      await saveSecureStore("accessToken", accessToken);
      queryClient.fetchQuery({ queryKey: [queryKeys.AUTH, queryKeys.GET_ME] });
      router.replace("/");
    },
  });
};

const useGetMe = () => {
  const { data, isSuccess, isError } = useQuery({
    queryFn: getMe,
    queryKey: [queryKeys.AUTH, queryKeys.GET_ME],
  });

  useEffect(() => {
    (async () => {
      if (isSuccess) {
        const accessToken = await getSecureStore("accessToken");
        setHeader("Authorization", `Bearer ${accessToken}`);
      }
    })();
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      removeHeader("Authorization");
      deleteSecureStore("accessToken");
    }
  }, [isError]);

  return { data };
};

const useUpdateProfile = () => {
  return useMutation({
    mutationFn: editProfile,
    onSuccess: (newProfile) => {
      queryClient.setQueryData([queryKeys.AUTH, queryKeys.GET_ME], newProfile);
    },
  });
};

const useAuth = () => {
  const loginMutation = useLogin();
  const signupMutation = useSignup();
  const profileMutation = useUpdateProfile();
  const { data } = useGetMe();

  const logout = () => {
    removeHeader("Authorization");
    deleteSecureStore("accessToken");
    queryClient.resetQueries({ queryKey: [queryKeys.AUTH] });
  };

  return {
    loginMutation,
    signupMutation,
    profileMutation,
    auth: {
      id: data?.id || "",
      nickname: data?.nickname || "",
      imageUri: data?.imageUri || "",
      introduce: data?.introduce || "",
      hatId: data?.hatId || "",
      handId: data?.handId || "",
      skinId: data?.skinId || "",
      topId: data?.topId || "",
      bottomId: data?.bottomId || "",
      faceId: data?.faceId || "",
    },
    logout,
  };
};

export default useAuth;
