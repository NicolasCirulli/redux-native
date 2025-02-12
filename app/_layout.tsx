import { Tabs } from "expo-router";
import "../global.css";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
export default function RootLayout() {
  return (
    <Provider store={store}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            title: "Products",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="cart" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
      <StatusBar />
    </Provider>
  );
}
