import { Stack } from "expo-router";
import { store } from "../src/store/store";
import { Provider } from "react-redux";

export default function _layout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
