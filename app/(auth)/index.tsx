import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Alert, } from "react-native";
import { useFonts } from 'expo-font';
import Svg, { Path } from 'react-native-svg';
import { useRouter } from 'expo-router';
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Login = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    SpecialElite: require('../../assets/fonts/SpecialElite-Regular.ttf'),

  });

  const [showIcon, setShowIcon] = useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    if (!email && !password) {
      Alert.alert("email and password field are required")
    }

    if (email.length > 0 && !password) {
      Alert.alert("password field are required")
    }

    if (password.length > 0 && !email) {
      Alert.alert("email field are required")
    }

    if(password.length > 0 && email.length > 0 && !email.includes('@')) {
      Alert.alert("please enter valid email address")
    }

    if (password.length > 0 && email.length > 0 && email.includes('@')) {
      router.push('./choose-preference')
    }

  }
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
        <TouchableOpacity className=' absolute left-4 top-12 w-[30px] h-[30px]'
          onPress={() => router.replace('/(auth)/signup')}>

          <Ionicons name="chevron-back-outline" size={25} color="white" />
        </TouchableOpacity>
        <Text className='text-5xl   text-white absolute'
          style={{ fontFamily: 'SpecialElite' }}>Login</Text>

      </View>
      <View className="px-5">


        <Text className=" text-center font-semibold text-2xl mt-5">
          Welcome Back!
        </Text>
        <Text className="text-center text-[17px] font-medium mt-2 text-[#2f2e2e]">
          Let’s login to explore continuously
        </Text>
        <View>
          <Text className=" mt-6 font-semibold text-lg">Email</Text>
          <TextInput
            placeholder="example@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
            className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
          />

          <Text className=" mt-5 font-semibold text-lg">Password</Text>

          <View className=' flex flex-row  justify-end items-center  relative'>

            <TextInput
              placeholder="**************"
              value={password}
              onChangeText={text => setPassword(text)}
              className="w-full px-2   h-[40px] mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity className=' absolute right-5 '
              onPress={() => setPasswordVisible(!passwordVisible)} >
              <MaterialCommunityIcons name="eye" size={23} color='#4b5563' />
            </TouchableOpacity>
          </View>

          <View className="flex flex-row justify-end mt-2">

            <TouchableOpacity onPress={() => router.push('/(auth)/forget-password')}>
              <Text className="underline  font-medium">
                Forget password?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="bg-[#800000] w-full text-center py-3 rounded-lg mt-10"
            onPress={handleSubmit}
          >
            <Text className="text-white text-center font-medium text-[15px]">Login</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center justify-center mt-5">
          <View className="border-b border-[#800000] w-20 ml-5"></View>
          <Text className="px-3 text-lg font-medium text-nowrap">or continue with</Text>
          <View className="border-b w-24 mr-5 border-[#800000]"></View>
        </View>

        <View className="w-[200px] mx-auto mt-5  flex flex-row gap-10">
          <View className="flex items-center justify-center">
            <AntDesign
              name="google"
              size={35}
              color="#0284c7"
              className="p-1 text-6x rounded-full flex justify-center items-center"
            />
          </View>
          <View className="w-[40px] h-[40px]  flex items-center justify-center bg-[#1877F2] rounded-full ">
            <FontAwesome
              name="facebook-f"
              size={30}
              color="#fff"

            />
          </View>
          <View className="flex items-center justify-center">
            <AntDesign
              name="apple1"
              size={35}
              color="black"
              className=" rounded-full flex justify-center items-center"
            />
          </View>
        </View>
        <View className="flex-row justify-center my-4  ">
          <Text className="font-semibold text-[14px]">Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
            <Text className="text-[#800000] font-semibold text-[14px]"> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
