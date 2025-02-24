import { Redirect, router } from "expo-router";
import "../global.css";
import storage from "../src/utils/storage";
import useUser from "../src/store/hooks/useUserActions";
import AuthServices from "../src/services/user.services";
import { useEffect, useState } from "react";
import { Text, View, PermissionsAndroid } from "react-native";
import {
  AuthorizationStatus,
  getMessaging,
  getToken,
  onMessage,
  onNotificationOpenedApp,
  requestPermission,
  setBackgroundMessageHandler,
} from "@react-native-firebase/messaging";

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

const messaging = getMessaging();

async function requestUserPermission() {
  const authStatus = await requestPermission(messaging);
  const enabled =
    authStatus === AuthorizationStatus.AUTHORIZED ||
    authStatus === AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    return enabled;
  }
  return false;
}

export default function index() {
  const [permission, setPermission] = useState<
    typeof AuthorizationStatus | boolean
  >(false);
  const [appIsReady, setAppIsReady] = useState(false);
  const { login } = useUser();

  useEffect(() => {
    requestUserPermission().then(setPermission);
  }, []);

  useEffect(() => {
    if (permission) {
      getToken(messaging).then((token) => {
        //....
        console.log(token);
      });

      onMessage(messaging, async (payload) => {
        console.log("onMessage: ", payload.notification);
        console.log("onMessage: ", payload.data);
        //....
      });

      setBackgroundMessageHandler(messaging, async (payload) => {
        //...
        console.log("background: ", payload.notification);
      });

      onNotificationOpenedApp(messaging, async (payload) => {
        //...
        console.log("openApp: ", payload.notification);
        if (payload?.data?.route) {
          router.push("/" + payload?.data?.route);
        }
      });
    }
  }, [permission]);

  useEffect(() => {
    storage.getItem("token").then((token) => {
      if (token) {
        AuthServices.loginWithToken(token)
          .then((data) => {
            if (data) {
              login(data);
            }
          })
          .finally(() => {
            setAppIsReady(true);
          });
      } else {
        setAppIsReady(true);
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
