import { View, Text, Button } from "react-native";
import React from "react";
import useUser from "../../src/store/hooks/useUserActions";

export default function profile() {
  const { logout } = useUser();

  return (
    <View>
      <Button title="logout" onPress={logout} />
    </View>
  );
}
