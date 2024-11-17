import React, { useState } from "react";
import {Text,TextInput,View,TouchableOpacity,} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Svg, { Path } from 'react-native-svg';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();

  const [showIcon, setShowIcon] = useState(false);

  const handlePress = () => {
    setShowIcon((prevState) => !prevState); 
  };
  return (
    <View className="">
      <View className="relative w-[100%] h-[130px] top-0 flex flex-col  items-center justify-center  text-center">
          <Svg
            height="300" 
            width="100%"
            viewBox="0 0 1440 1100"  
            style={{ position: 'absolute', top: 0 }}
          >
            <Path
              fill="#800000"
              d="M0,450C240,650,480,250,720,450C960,650,1200,250,1440,450L1440,300L1440,0L0,0Z"
            />

          </Svg>

          <Text className='text-4xl font-semibold text-white absolute'>Login</Text>

        </View>
      <View>
        

        <Text className=" text-center font-semibold text-2xl mt-5">
          Welcome Back!
        </Text>
        <Text className="text-center  text-2xl mt-2">
          Let’s login to explore continuously
        </Text>
        <View>
          <Text className="font-semibold ml-5 text-xl mt-5">Email</Text>

          <TextInput
            className="ml-5 mt-2 border-2 border-[#800000] rounded-lg mx-auto w-[350px] h-10 focus:outline-none focus:border-[#800000] pl-3 "
            placeholder="example@gmail.com"
          />

          <Text className=" font-semibold ml-5 text-xl mt-5">Password</Text>

          <TextInput
            className="ml-5 mt-2 border-2 border-[#800000] rounded-lg mx-auto w-[350px] h-10 focus:outline-none focus:border-[#800000] pl-3 "
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

            <Text className="ml-2 font-semibold" onPress={handlePress}
               >Remember me</Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/forget-password')}>
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
            color="#0284c7"
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
