import { Profile } from "@/types";
import { getSecureStore } from "@/utils/secureStore";
import $axios from "./axios";

interface RequesterUser {
  email: string;
  password: string;
}

async function postSignup(body: RequesterUser): Promise<void> {
  const { data } = await $axios.post(`/auth/signup`, body);

  return data;
}

async function postLogin(
  body: RequesterUser
): Promise<{ accessToken: string }> {
  const { data } = await $axios.post(`/auth/signin`, body);

  return data;
}

async function getMe(): Promise<Profile> {
  const accessToken = await getSecureStore("accessToken");
  const { data } = await $axios.get(`/auth/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
}

export { getMe, postLogin, postSignup };
