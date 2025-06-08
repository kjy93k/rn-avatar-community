import { colors } from "@/constants";
import { Foundation } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function AutoLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: { backgroundColor: colors.WHITE },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "로그인",
          headerShown: true,
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerLeft: () => (
            <Link href={"/"} replace>
              <Foundation name="home" size={24} color="black" />
            </Link>
          ),
        }}
      />

      <Stack.Screen
        name="signup"
        options={{
          title: "회원가입",
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
