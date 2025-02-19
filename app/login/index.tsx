import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import AuthServices from "../../src/services/user.services";
import useUser from "../../src/store/hooks/useUserActions";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { z } from "zod";
interface Form {
  email: string;
  password: string;
  usuario: string;
}

const loginSchema = z.object({
  email: z
    .string({ required_error: "El campo es obligatorio" })
    .email({ message: "Ingrese un email valido" }),
  password: z
    .string({ required_error: "El campo es obligatorio" })
    .min(8, "Como minimo tiene que tener 8 caracteres"),
});

export default function Login() {
  const { login } = useUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(loginSchema),
  });

  const handlePress = (data: Form) => {
    // Llegados a este punto tenemos el objeto con las propiedades del form y sus values
    // estando en este punto ya seria llamar al servicio o
    // lo que necesitemos con los datos recopilados
    AuthServices.login(data).then((res) => {
      login(res);
      router.replace("/(home)/");
    });
  };

  console.log(errors);

  return (
    <View className="flex-1 justify-center items-center gap-5 bg-white">
      <Text className="text-3xl font-semibold">Welcome</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <>
            <View className="bg-gray-200 flex-row gap-2 mx-12 p-2 relative">
              <Ionicons name="mail-outline" size={40} color={"black"} />
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder="email"
                className="flex-grow bg-white rounded-lg"
              />
            </View>
            {!!errors.email && (
              <Text className="text-red-400"> {errors.email.message} </Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <>
            <View className="bg-gray-200 flex-row gap-2 mx-12 p-2">
              <Ionicons name="lock-closed-outline" size={40} color={"black"} />
              <TextInput
                secureTextEntry
                value={value}
                onChangeText={onChange}
                placeholder="password"
                className="flex-grow bg-white rounded-lg"
              />
            </View>
            {!!errors.password && (
              <Text className="text-red-400"> {errors.password.message} </Text>
            )}
          </>
        )}
      />

      <Pressable
        className="bg-blue-500 rounded-lg"
        onPress={handleSubmit(handlePress)}
      >
        <Text className="text-white text-xl font-semibold py-2 px-4 ">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
}
