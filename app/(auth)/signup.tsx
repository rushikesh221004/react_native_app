import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';

const SignUp = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
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

          <Text className='text-4xl font-semibold text-white absolute'>Sign Up</Text>

        </View>
        {/* Main Form */}
        <View className='px-5  mt-6'>
          <Text className="text-center text-[22px] font-bold">Create your account</Text>
          <Text className="text-center text-[17px] font-medium mt-2 text-[#2f2e2e]">
            Register now to create a new account
          </Text>

          <View className="w-full">
            <Text className="font-semibold text-lg mt-5">Name</Text>
            <TextInput
              placeholder="ex: Vijay Hiwale"
              className="w-full px-4 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            <Text className="font-semibold text-lg mt-5">Email</Text>
            <TextInput
              placeholder="example@gmail.com"
              keyboardType="email-address"
              className="w-full px-4 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            <Text className="font-semibold text-lg mt-5">Password</Text>
            <TextInput
              placeholder="**************"
              secureTextEntry
              className="w-full px-4 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            <Text className="font-semibold text-lg mt-5">Confirm Password</Text>
            <TextInput
              placeholder="**************"
              secureTextEntry
              className="w-full px-4 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />
          </View>

          <TouchableOpacity
            className="bg-[#800000] w-full text-center py-3 rounded-lg mt-10"
            onPress={() => router.push('/(auth)/login')}
          >
            <Text className="text-white text-center font-medium text-[15px]">Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border-2 border-[#800000] w-full text-center py-3 rounded-lg mt-4"
            onPress={() => router.push('/(auth)/forget-password')}
          >
            <Text className="text-[#800000] text-center font-medium text-[15px]">
              Sign in with Google
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center my-4  ">
            <Text className="font-medium text-[14px]">Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
              <Text className="text-[#800000] font-medium text-[14px]"> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
