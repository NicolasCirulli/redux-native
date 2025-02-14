import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../src/data";
import Ionicons from "@expo/vector-icons/Ionicons";
import { eliminarItem } from "../src/store/actions/cartActions";
import { RootState } from "../src/store/store";

export default function Cart() {
  const { cart } = useSelector((store: RootState) => store.cartReducer);
  console.log(JSON.stringify(cart, null, 2));

  const dispatch = useDispatch();

  const handlePress = (item: Product) => {
    dispatch(eliminarItem(item.id));
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
