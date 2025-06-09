import { getMe, postLogin, postSignup } from "@/api/auth";
import queryClient from "@/api/queryClient";
import { removeHeader, setHeader } from "@/utils/header";
import { deleteSecureStore, saveSecureStore } from "@/utils/secureStore";
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
      queryClient.fetchQuery({ queryKey: ["auth", "getMe"] });
      router.replace("/");
    },
  });
};

const useGetMe = () => {
  const { data, isError } = useQuery({
    queryFn: getMe,
    queryKey: ["auth", "getMe"],
  });

  useEffect(() => {
    if (isError) {
      removeHeader("Authorization");
      deleteSecureStore("accessToken");
    }
  }, [isError]);
  return { data };
};

const useAuth = () => {
  const loginMutation = useLogin();
  const signupMutation = useSignup();
  const { data } = useGetMe();

  const logout = () => {
    removeHeader("Authorization");
    deleteSecureStore("accessToken");
    queryClient.resetQueries({ queryKey: ["auth"] });
  };

  return {
    loginMutation,
    signupMutation,
    auth: { id: data?.id || "" },
    logout,
  };
};

export default useAuth;
