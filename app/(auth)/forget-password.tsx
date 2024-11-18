import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { useFonts } from "expo-font";
import { TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const ForgetPassword = () => {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    SpecialElite: require("../../assets/fonts/SpecialElite-Regular.ttf"),
  });

  return (
    <View  className="h-full relative ">
      <View className="relative w-[100%] h-[130px] top-0 flex flex-col  items-center justify-center  text-center">
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
          className=" absolute left-4 top-14"
          onPress={() => router.replace("/(auth)/login")}
        >
          <FontAwesome6 name="less-than" size={18} color="white" />
        </TouchableOpacity>
        <Text
          className="  text-white absolute text-[35px] text-center"
          style={{ fontFamily: "SpecialElite" }}
        >
          Forget password{" "}
        </Text>
      </View>
      <Text className="mt-20 font-medium text-[17px] mx-5 text-start">
        Please enter your email. We'll send you a link to reset your password.{" "}
      </Text>

      <Text className=" mt-6 font-semibold text-lg ml-5 ">Email</Text>
          <TextInput
              placeholder="example@gmail.com"
              keyboardType="email-address"
              className=" mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[15px] mx-5 px-4"
            />
      <TouchableOpacity className="bg-[#800000]  text-center py-3 rounded-lg mt-12 mx-auto w-[350px]"
      onPress={()=> router.push('/(auth)/verification')}>
        <Text className="text-white text-center text-[15px] ">Send code</Text>
      </TouchableOpacity>

      <View className=" flex flex-row justify-center my-6 absolute bottom-0   w-full  items-center  ">
            <Text className="font-semibold text-[14px]">Go Back To?</Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
              <Text className="text-[#800000] font-semibold text-[14px]"> Login</Text>
            </TouchableOpacity>
          </View>
    </View>
  );
};

export default ForgetPassword;
