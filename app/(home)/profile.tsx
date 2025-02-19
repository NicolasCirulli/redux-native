import { View, Text, Button } from "react-native";
import React from "react";
import useUser from "../../src/store/hooks/useUserActions";
import ImagePickerProfile from "../../src/components/ImagePIckerProfile";

export default function profile() {
  const { logout } = useUser();

  return (
    <View>
      <ImagePickerProfile />
      <Button title="logout" onPress={logout} />
    </View>
  );
}
