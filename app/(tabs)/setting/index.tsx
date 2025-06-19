import AuthRoute from "@/components/AuthRoute";
import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Entypo, Octicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ListItem from "../../../components/ListItem";

import { saveSecureStore } from "@/utils/secureStore";
import { useTranslation } from "react-i18next";

export default function SettingScreen() {
  const { logout } = useAuth();
  const { showActionSheetWithOptions } = useActionSheet();
  const { i18n, t } = useTranslation();

  const handlePressLanguage = () => {
    const options = ["English", "한국어", t("Cancel")];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 0:
            i18n.changeLanguage("en");
            saveSecureStore("language", "en");
            break;
          case 1:
            i18n.changeLanguage("ko");
            saveSecureStore("language", "ko");
            break;
          default:
            break;
        }
      }
    );
  };

  return (
    <AuthRoute>
      <SafeAreaView>
        <View style={styles.space} />
        <ListItem
          title={"언어설정"}
          onPress={handlePressLanguage}
          icon={<Entypo name="language" size={16} color={colors.BLACK} />}
        />
        <View style={styles.space} />
        <ListItem
          title={"로그아웃"}
          onPress={logout}
          icon={<Octicons name="sign-out" size={16} color={colors.BLACK} />}
        />
      </SafeAreaView>
    </AuthRoute>
  );
}

const styles = StyleSheet.create({
  space: {
    height: 30,
  },
});
