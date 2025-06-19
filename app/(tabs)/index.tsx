import FeedList from "@/components/Feed/FeedList";
import SearchInput from "@/components/InputField/SearchInput";
import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

export default function HomeScreen() {
  const { auth } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <SearchInput
          readOnly
          placeholder="글 제목 검색"
          onPress={() => {
            router.push("/post/search");
          }}
        />
      </View>
      <FeedList />
      {auth.id && (
        <Pressable
          style={styles.writeButton}
          onPress={() => {
            router.push("/post/write");
          }}
        >
          <Ionicons name="pencil" size={32} color={colors.WHITE} />
        </Pressable>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    backgroundColor: colors.WHITE,
  },
  logo: { width: 44, height: 44 },
  writeButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: colors.ORANGE_600,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    // for Android
    elevation: 2,
  },
});
