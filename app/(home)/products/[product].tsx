import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { products } from "../../../src/data";
import Ionicons from "@expo/vector-icons/Ionicons";
import useCartActions from "../../../src/store/hooks/useActions";
export default function ProductDetails() {
  const { product } = useLocalSearchParams();

  const { agregar } = useCartActions();

  const selectedProduct = products.find(
    (item) => String(item.id) == String(product)
  );

  const handlePress = () => {
    if (selectedProduct) {
      agregar(selectedProduct);
    }
  };

  return (
    <View className="flex-1 gap-3 justify-center items-center">
      <Text className="text-3xl">{selectedProduct?.name}</Text>
      <Text className="text-md px-4">{selectedProduct?.description}</Text>
      <Text className="text-xl">${selectedProduct?.price}</Text>
      <Ionicons name="bag-add-outline" size={24} onPress={handlePress} />
    </View>
  );
}
