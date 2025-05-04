import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { useFonts } from "expo-font";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

interface RegisterFormData {
  fullName: string;
  email: string;
  mobileNo: string;
  location: string;
  bloodGroup: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    mobileNo: "",
    location: "",
    bloodGroup: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (name: keyof RegisterFormData, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "https://find-donor-backend.onrender.com/api/v1/auth/register",
        formData
      );
      console.log("Register Success:", response.data);
      Alert.alert("Success", "User registered successfully!");
      router.replace("/");
    } catch (error: any) {
      console.log("Register Error:", error.response?.data || error.message);
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong"
      );
      // console.log("This is my Errors = ", error.response.data.errors[0].message)
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    SpecialElite: require("../../assets/fonts/SpecialElite-Regular.ttf"),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header Section */}
        <View className="relative w-full h-[130px] top-0 flex flex-col items-center justify-center text-center">
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
            onPress={() => router.replace("../")}
          >
            <Ionicons name="chevron-back-outline" size={25} color="white" />
          </TouchableOpacity>
          <Text
            className="text-white absolute text-5xl"
            style={{ fontFamily: "SpecialElite" }}
          >
            Sign Up
          </Text>
        </View>

        {/* Main Form */}
        <View className="px-5 mt-5">
          <Text className="text-center text-[22px] font-bold">
            Create your account
          </Text>
          <Text className="text-center text-[16px] font-medium mt-2 text-[#2f2e2e]">
            Register now to create a new account
          </Text>

          <View className="w-full">
            {/* Image Picker */}
            <View className="w-full items-center pt-5 ">
              <View className="relative">
                <View
                  className="w-32 h-32 rounded-full bg-white justify-center items-center overflow-hidden border-2 border-gray-200"
                  onTouchEnd={pickImage}
                >
                  {image ? (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 160, height: 160, borderRadius: 80 }}
                    />
                  ) : (
                    <Ionicons name="camera-outline" size={38} color="black" />
                  )}
                </View>
              </View>
            </View>

            {/* Name */}
            <Text className="font-semibold text-lg ">Name</Text>
            <TextInput
              placeholder="ex: Vijay Hiwale"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              onChangeText={(text) => handleChange("fullName", text)}
            />

            {/* Email */}
            <Text className="font-semibold text-lg mt-5">Email</Text>
            <TextInput
              placeholder="example@gmail.com"
              keyboardType="email-address"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              onChangeText={(text) => handleChange("email", text)}
            />

            {/* Mobile No. */}
            <Text className="font-semibold text-lg mt-5">Mobile No.</Text>
            <TextInput
              placeholder="Enter Mobile No."
              keyboardType="numeric"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              onChangeText={(text) => handleChange("mobileNo", text)}
            />

            {/* Location */}
            <Text className="font-semibold text-lg mt-5">Location</Text>
            <TextInput
              placeholder="Enter Your Location"
              keyboardType="default"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              onChangeText={(text) => handleChange("location", text)}
            />

            {/* Blood Group */}
            <Text className="font-semibold text-lg mt-5">
              Select Blood Group
            </Text>
            <View className="w-full h-[40px] flex justify-center px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]">
              <Picker
                selectedValue={formData.bloodGroup}
                onValueChange={(value) => handleChange("bloodGroup", value)}
              >
                <Picker.Item label="Select Blood Group" value="" />
                <Picker.Item label="A+" value="A+" />
                <Picker.Item label="A-" value="A-" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="B-" value="B-" />
                <Picker.Item label="AB+" value="AB+" />
                <Picker.Item label="AB-" value="AB-" />
                <Picker.Item label="O+" value="O+" />
                <Picker.Item label="O-" value="O-" />
              </Picker>
            </View>

            {/* Gender */}
            <Text className="font-semibold text-lg mt-5">Select Gender</Text>
            <View className="w-full h-[40px] flex justify-center px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]">
              <Picker
                selectedValue={formData.gender}
                onValueChange={(value) => handleChange("gender", value)}
              >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>

            {/* Password */}
            <Text className="font-semibold text-lg mt-5">Password</Text>
            <View className="flex flex-row justify-end items-center relative">
              <TextInput
                placeholder=""
                className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
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

            {/* Confirm Password */}
            <Text className="font-semibold text-lg mt-5">Confirm Password</Text>
            <View className="flex flex-row justify-end items-center relative">
              <TextInput
                placeholder=""
                secureTextEntry={!confirmPasswordVisible}
                onChangeText={(text) => handleChange("confirmPassword", text)}
                className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              />
              <TouchableOpacity
                className="absolute right-5"
                onPress={() =>
                  setConfirmPasswordVisible(!confirmPasswordVisible)
                }
              >
                <MaterialCommunityIcons
                  name={confirmPasswordVisible ? "eye-off" : "eye"}
                  size={23}
                  color="#4b5563"
                />
              </TouchableOpacity>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              onPress={handleRegister}
              className="bg-[#800000] w-full py-3 rounded-lg mt-10"
            >
              <Text className="text-white text-center font-medium text-[15px]">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
