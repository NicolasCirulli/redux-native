import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function index() {
  return (
    <View className="flex-1 justify-center items-center gap-5 bg-white">
      <Text className="text-3xl font-semibold">Welcome</Text>

      <View className="bg-gray-200 flex-row gap-2 mx-12 p-2">
        <Ionicons name="mail-outline" size={40} color={"black"} />
        <TextInput className="flex-grow bg-white rounded-lg" />
      </View>
      <View className="bg-gray-200 flex-row gap-2 mx-12 p-2">
        <Ionicons name="lock-closed-outline" size={40} color={"black"} />
        <TextInput secureTextEntry className="flex-grow bg-white rounded-lg" />
      </View>

      <Pressable className="bg-blue-500 rounded-lg">
        <Text className="text-white text-xl font-semibold py-2 px-4 ">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
}
