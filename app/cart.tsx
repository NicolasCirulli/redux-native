import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { Product } from "../src/data";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RootState } from "../src/store/store";
import useCartActions from "../src/store/hooks/useActions";

export default function Cart() {
  const { cart } = useSelector((store: RootState) => store.cartReducer);

  const { eleminar } = useCartActions();

  const handlePress = (item: Product) => {
    eleminar(item);
  };
  return (
    <View>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View className="my-2 py-8 bg-gray-200 gap-5 items-center">
            <Text className="text-2xl text-center">{item.name}</Text>
            <Pressable onPress={() => handlePress(item)}>
              <Ionicons name="backspace-outline" size={24} />
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}
