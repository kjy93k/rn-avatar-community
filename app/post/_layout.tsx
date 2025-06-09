import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function PostLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: colors.BLACK,
        contentStyle: { backgroundColor: colors.WHITE },
      }}
    >
      <Stack.Screen
        name="write"
        options={{
          title: "글쓰기",
          headerShown: true,
          headerTitleAlign: "center",
          headerBackButtonDisplayMode: "minimal",
          headerLeft: () => (
            <Link href={"/"} replace>
              <Feather name="arrow-left" size={24} color="black" />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
