import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const Login = () => {
  const [showIcon, setShowIcon] = useState(false);

  const handlePress = () => {
    setShowIcon(true);
  };
  return (
    <View className="">
      <View>
        <View className="h-[150px] w-full bg-[#800000] border-2 border-b-black rounded-bl-[80px] rounded-br-[75px]  ">
          <Text className="text-white font-bold text-xl font-serif text-center mt-10">
            Login
          </Text>
        </View>

        <Text className=" text-center font-semibold text-2xl mt-5">
          Welcome Back!
        </Text>
        <Text className="text-center  text-2xl mt-2">
          Let’s login to explore continuously
        </Text>
        <View>
          <Text className="font-semibold ml-5 text-xl mt-5">Email</Text>

          <TextInput
            className="ml-5 mt-2 border-2 border-[#800000] rounded-lg mx-auto w-[350px] h-10 focus:outline-none focus:border-[#800000] pl-3 text-[#827d7d]"
            placeholder="example@gmail.com"
          />

          <Text className=" font-semibold ml-5 text-xl mt-5">Password</Text>

          <TextInput
            className="ml-5 mt-2 border-2 border-[#800000] rounded-lg mx-auto w-[350px] h-10 focus:outline-none focus:border-[#800000] pl-3 text-[#827d7d]"
            placeholder="**********"
            secureTextEntry={true}
          />

          <View className="flex flex-row mt-3">
            <TouchableOpacity
              className="h-4 w-4 bg-[#800000] rounded-full ml-5"
              onPress={handlePress}
              activeOpacity={0.8}
            >
              {showIcon && (
                <Entypo
                  name="check"
                  size={14}
                  color="#fff"
                  className=" flex justify-center items-center"
                />
              )}
            </TouchableOpacity>

            <Text className="ml-2 font-semibold">Remember me</Text>
            <TouchableOpacity>
              <Text className="underline ml-28 font-semibold">
                Forget password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-[#800000]  text-center py-3 rounded-lg mt-12 mx-auto w-[350px]">
            <Text className="text-white text-center text-[15px] ">Login</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center mt-5">
          <View className="border-b border-[#800000] w-24 ml-5"></View>
          <Text className="px-3 text-lg">or continue with</Text>
          <View className="border-b w-24 mr-5 border-[#800000]"></View>
        </View>

        <View className="w-[200px] mx-auto mt-5  flex flex-row gap-10">
          <AntDesign
            name="google"
            size={40}
            color="#1c76d6"
            className=" h-10 w-10 text-6x rounded-full flex justify-center items-center"
          />
          <FontAwesome
            name="facebook-f"
            size={30}
            color="#fff"
            className="bg-sky-600 h-10 w-10 text-6x rounded-full flex justify-center items-center  "
          />
          <AntDesign
            name="apple1"
            size={40}
            color="black"
            className=" h-10 w-10 text-6x rounded-full flex justify-center items-center"
          />
        </View>
        <Text className="mt-5 font-semibold text-center text-[15px]">
          Don’t have an account? <Text className="text-[#800000]">Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
