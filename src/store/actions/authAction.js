import { AsyncStorage } from "react-native";

const saveUserToken = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message || "Error saving token");
  }
};

const getUserToken = async () => {
  try {
    await AsyncStorage.getItem("userToken");
  } catch (error) {
    console.log(error.message || "Error getting token");
  }
};

const removeUserToken = async () => {
  try {
    return await AsyncStorage.removeItem("userToken");
  } catch (error) {
    console.log(error || "Error removing token");
  }
};

export { saveUserToken, getUserToken, removeUserToken };
