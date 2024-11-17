import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Path } from "react-native-svg";
import {  TextInput, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

const ForgetPassword = () => {
  const router = useRouter();
  return (
    <View>
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

          <Text className="text-4xl font-semibold text-white absolute">
           Forget passward
          </Text>
        </View>
        <Text className='mt-20 font-medium text-[17px] mx-5'>Please enter your email. We'll send you a link to reset your password. </Text>

        <Text className="font-semibold ml-5 text-xl mt-5">Email</Text>

<TextInput
  className="ml-5 mt-2 border-2 border-[#800000] rounded-lg mx-auto w-[350px] h-10 focus:outline-none focus:border-[#800000] pl-3 "
  placeholder="example@gmail.com"
/>

          <TouchableOpacity className="bg-[#800000]  text-center py-3 rounded-lg mt-12 mx-auto w-[350px]">
            <Text className="text-white text-center text-[15px] ">Send code</Text>
          </TouchableOpacity>
    

          <Text className="fixed bottom-5 w-full text-center font-semibold text-[15px]">
        Go Back To? <TouchableOpacity onPress={() => router.push('/(auth)/login')} className="text-[#800000]">Login</TouchableOpacity>
      </Text>
</View>
  )
}

export default ForgetPassword