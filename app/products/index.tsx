import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { Product, products } from "../../src/data";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { agregarCarrito } from "../../src/store/actions/cartActions";
export default function Products() {
  const dispatch = useDispatch();

  const handlePress = (item: Product) => {
    dispatch(agregarCarrito(item));
  };

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View className="my-2 py-8 bg-gray-200 gap-5 items-center">
            <Text className="text-2xl text-center">{item.name}</Text>
            <Link className="" href={"/products/" + item.id}>
              Go to details
            </Link>
            <Pressable onPress={() => handlePress(item)}>
              <Ionicons name="bag-add-outline" size={24} />
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}
