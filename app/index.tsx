import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

export default function index() {
  const [counter, setCounter] = useState(0);

  return (
    <View className="flex-1 justify-center items-center">
      <TextCounter value={counter} />
      <CustomBtn text="agregar uno" callback={setCounter} />
    </View>
  );
}

interface TextCounterProps {
  value: number;
}

const TextCounter = ({ value }: TextCounterProps) => {
  return <Text>{value}</Text>;
};

interface CustomBtnProps {
  callback: () => void;
  text: string;
}

const CustomBtn = ({ callback, text }: CustomBtnProps) => {
  return (
    <Pressable onPress={() => callback(10)}>
      <Text> {text}</Text>
    </Pressable>
  );
};
