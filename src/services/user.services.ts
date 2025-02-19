import axios from "axios";
import { userMapper } from "./user.mapper";
import storage from "../utils/storage";
const URL = process.env.EXPO_PUBLIC_API_URL;

interface loginProps {
  email: string;
  password: string;
}

const login = async ({ email, password }: loginProps) => {
  try {
    const { data } = await axios.post(URL + "/auth/login", { email, password });
    const user = userMapper(data.data);
    storage.setItem({ key: "token", value: user.token });
    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const loginWithToken = async (token: string) => {
  try {
    const { data } = await axios.post(
      URL + "/auth/token",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return userMapper(data.data);
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default {
  login,
  loginWithToken,
};
