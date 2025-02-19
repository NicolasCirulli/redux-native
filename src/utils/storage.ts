import AsyncStorage from "@react-native-async-storage/async-storage";

interface setItemProps {
  key: string;
  value: object | string;
}

const setItem = async (data: setItemProps) => {
  try {
    await AsyncStorage.setItem(data.key, JSON.stringify(data.value));
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const getItem = async (key: string) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const removeItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default {
  setItem,
  getItem,
  removeItem,
};
