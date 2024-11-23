import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import { useFonts } from 'expo-font';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const SignUp = () => {
  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // Use MediaTypeOptions.All to allow image selection
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Save the picked image's URI
    }
  };



  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    SpecialElite: require('../../assets/fonts/SpecialElite-Regular.ttf'),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header Section */}
        <View className="relative w-full h-[130px] top-0 flex flex-col items-center justify-center text-center">
          <Svg height="300" width="100%" viewBox="0 0 1440 1100" style={{ position: 'absolute', top: 0 }}>
            <Path fill="#800000" d="M0,450C240,650,480,250,720,450C960,650,1200,250,1440,450L1440,300L1440,0L0,0Z" />
          </Svg>
          <TouchableOpacity
            className="absolute left-4 top-12 w-[30px] h-[30px]"
            onPress={() => router.replace('../')}
          >
            <Ionicons name="chevron-back-outline" size={25} color="white" />
          </TouchableOpacity>
          <Text className="text-white absolute text-5xl" style={{ fontFamily: 'SpecialElite' }}>Sign Up</Text>
        </View>

        {/* Main Form */}
        <View className="px-5 mt-5">
          <Text className="text-center text-[22px] font-bold">Create your account</Text>
          <Text className="text-center text-[16px] font-medium mt-2 text-[#2f2e2e]">
            Register now to create a new account
          </Text>

          <View className="w-full">
            {/* Image Picker */}
            <View className="w-full items-center  pt-5 ">
              {/* Remove the button and trigger the picker on circle click */}
              <View className=" relative">
                {/* Circle container */}
                <View
                  className="w-32 h-32 rounded-full bg-white justify-center items-center overflow-hidden border-2 border-gray-200"
                  onTouchEnd={pickImage}  // Trigger pickImage when the circle is tapped
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
            />

            {/* Email */}
            <Text className="font-semibold text-lg mt-5">Email</Text>
            <TextInput
              placeholder="example@gmail.com"
              keyboardType="email-address"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            {/* Mobile No. */}
            <Text className="font-semibold text-lg mt-5">Mobile No.</Text>
            <TextInput
              placeholder="Enter Mobile No."
              keyboardType="numeric"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            {/* Location */}
            <Text className="font-semibold text-lg mt-5">Location</Text>
            <TextInput
              placeholder="Enter Your Location"
              keyboardType="default"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            {/* Blood Group */}
            <Text className="font-semibold text-lg mt-5">Blood Group</Text>
            <TextInput
              placeholder="Enter Blood Group ex: A+ B O+"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            {/* Gender */}
            <Text className="font-semibold text-lg mt-5">Enter Gender</Text>
            <TextInput
              placeholder="Male or Female"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            {/* Password */}
            <Text className="font-semibold text-lg mt-5">Password</Text>
            <View className="flex flex-row justify-end items-center relative">
              <TextInput
                placeholder="**************"
                className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity
                className="absolute right-5"
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <MaterialCommunityIcons name="eye" size={23} color="#4b5563" />
              </TouchableOpacity>
            </View>

            {/* Confirm Password */}
            <Text className="font-semibold text-lg mt-5">Confirm Password</Text>
            <View className="flex flex-row justify-end items-center relative">
              <TextInput
                placeholder="**************"
                secureTextEntry={!confirmPasswordVisible}
                className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              />
              <TouchableOpacity
                className="absolute right-5"
                onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                <MaterialCommunityIcons name="eye" size={23} color="#4b5563" />
              </TouchableOpacity>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
              className="bg-[#800000] w-full py-3 rounded-lg mt-10"
              onPress={() => router.push('/(auth)')}
            >
              <Text className="text-white text-center font-medium text-[15px]">Sign Up</Text>
            </TouchableOpacity>

            {/* Sign in with Google */}
            <TouchableOpacity
              className="border-2 border-[#800000] w-full py-3 rounded-lg mt-4"
            >
              <Text className="text-[#800000] text-center font-medium text-[15px]">
                Sign in with Google
              </Text>
            </TouchableOpacity>

            {/* Login Prompt */}
            <View className="flex-row justify-center my-4">
              <Text className="font-semibold text-[14px]">Already have an account?</Text>
              <TouchableOpacity onPress={() => router.push('/(auth)')}>
                <Text className="text-[#800000] font-semibold text-[14px]"> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
