import { Redirect } from "expo-router";
import "../global.css";
import storage from "../src/utils/storage";
import useUser from "../src/store/hooks/useUserActions";
import AuthServices from "../src/services/user.services";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function index() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { login } = useUser();

  useEffect(() => {
    storage.getItem("token").then((token) => {
      if (token) {
        AuthServices.loginWithToken(token)
          .then((data) => {
            console.log(data);
            if (data) {
              login(data);
            }
          })
          .finally(() => {
            setAppIsReady(true);
          });
      }
    });
  }, []);

  if (!appIsReady) {
    return (
      <View>
        <Text> Cargando </Text>
      </View>
    );
  }

  return <Redirect href="/(home)/" />;
}
