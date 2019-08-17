import { AsyncStorage } from "react-native";

const saveUserToken = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error || "Error saving token");
  }
};

const getUserToken = async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    return token;
  } catch (error) {
    console.log(error || "Error getting token");
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
