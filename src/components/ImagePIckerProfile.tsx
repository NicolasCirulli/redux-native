import { useState } from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerProfile() {
  const [image, setImage] = useState<string | null>(null);
  const [permissions, setPermission] = ImagePicker.useCameraPermissions();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(JSON.stringify(result, null, 2));

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const aux: ImagePicker.ImagePickerOptions = {
      cameraType: ImagePicker.CameraType.front,
    };
    const { assets, canceled } = await ImagePicker.launchCameraAsync(aux);
    console.log(canceled);
    if (canceled) {
      console.log("el usuario cancelo la foto");
    }
    if (assets && assets[0].uri) {
      setImage(assets[0].uri);
    }
    console.log("Assets:", JSON.stringify(assets, null, 2));
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Open camera" onPress={openCamera} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});
