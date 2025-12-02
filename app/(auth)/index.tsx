import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import axios from "axios";
const API_BASE = "http://localhost:4000/api/v1";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    SpecialElite: require("../../assets/fonts/SpecialElite-Regular.ttf"),
  });

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const handleChange = (name: keyof LoginFormData, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE}/auth/login`, formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response?.data) {
        Alert.alert("Success", "User login successfully!");
        router.replace("/(tabs)");
      } else {
        Alert.alert("Error", "Invalid response");
      }
    } catch (error: any) {
      const isNetworkError = !!error?.request && !error?.response;
      const message = isNetworkError ? 'Network error (CORS or connection)' : (error?.response?.data?.message || error?.message || 'Something went wrong');
      Alert.alert("Error", message);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="relative w-full h-[130px] flex items-center justify-center">
        <Svg
          height="300"
          width="100%"
          viewBox="0 0 1440 1100"
          style={{ position: "absolute", top: 0 }}
        >
          <Path
            fill="#800000"
            d="M0,450C240,650,480,250,720,450C960,650,1200,250,1440,450L1440,300L1440,0L0,0Z"
          />
        </Svg>

        <TouchableOpacity
          className="absolute left-4 top-12 w-[30px] h-[30px]"
          onPress={() => router.replace("/(auth)/signup")}
        >
          <Ionicons name="chevron-back-outline" size={25} color="white" />
        </TouchableOpacity>

        <Text
          className="text-5xl text-white absolute"
          style={{ fontFamily: "SpecialElite" }}
        >
          Login
        </Text>
      </View>

      <View className="px-5">
        <Text className="text-center font-semibold text-2xl mt-5">
          Welcome Back!
        </Text>
        <Text className="text-center text-[17px] font-medium mt-2 text-[#2f2e2e]">
          Let’s login to explore continuously
        </Text>

        <View>
          <Text className="mt-6 font-semibold text-lg">Email</Text>
          <TextInput
            placeholder="example@gmail.com"
            keyboardType="email-address"
            onChangeText={(text) => handleChange("email", text)}
            className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            autoCapitalize="none"
          />

          <Text className="mt-5 font-semibold text-lg">Password</Text>
          <View className="flex flex-row items-center relative">
            <TextInput
              placeholder=""
              className="w-full px-2 h-[40px] mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              secureTextEntry={!passwordVisible}
              onChangeText={(text) => handleChange("password", text)}
            />
            <TouchableOpacity
              className="absolute right-5"
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <MaterialCommunityIcons
                name={passwordVisible ? "eye-off" : "eye"}
                size={23}
                color="#4b5563"
              />
            </TouchableOpacity>
          </View>

          <View className="flex flex-row justify-end mt-2">
            <TouchableOpacity
              onPress={() => router.push("/(auth)/forget-password")}
            >
              <Text className="underline font-medium">Forget password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-[#800000] w-full text-center py-3 rounded-lg mt-10"
          >
            <Text className="text-white text-center font-medium text-[15px]">
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center justify-center mt-5">
          <View className="border-b border-[#800000] w-20 ml-5"></View>
          <Text className="px-3 text-lg font-medium text-nowrap">
            or continue with
          </Text>
          <View className="border-b w-24 mr-5 border-[#800000]"></View>
        </View>

        {/* Social Buttons */}
        <View className="w-[200px] mx-auto mt-5 flex flex-row gap-10">
          <TouchableOpacity className="flex items-center justify-center">
            <AntDesign name="google" size={35} color="#0284c7" />
          </TouchableOpacity>
          <TouchableOpacity className="w-[40px] h-[40px] flex items-center justify-center bg-[#1877F2] rounded-full">
            <FontAwesome name="facebook-f" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity className="flex items-center justify-center">
            <AntDesign name="apple1" size={35} color="black" />
          </TouchableOpacity>
        </View>

        {/* Sign up Link */}
        <View className="flex-row justify-center my-4">
          <Text className="font-semibold text-[14px]">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/(auth)/signup")}>
            <Text className="text-[#800000] font-semibold text-[14px]">
              {" "}
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
