import * as SecureStore from "expo-secure-store";

const saveSecureStore = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

const getSecureStore = async (key: string) => {
  const storeData = (await SecureStore.getItemAsync(key)) ?? null;
  return storeData;
};

const deleteSecureStore = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
};

export { deleteSecureStore, getSecureStore, saveSecureStore };
