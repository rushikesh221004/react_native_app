import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import { useFonts } from 'expo-font';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Ionicons } from '@expo/vector-icons';

const SignUp = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    SpecialElite: require('../../assets/fonts/SpecialElite-Regular.ttf'),

  });

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
          <TouchableOpacity className=' absolute left-4 top-12   w-[30px] h-[30px]'
          onPress={()=> router.replace('/')}>
          
          <Ionicons name="chevron-back-outline" size={25} color="white" />
          </TouchableOpacity>
          <Text className='  text-white absolute text-5xl ' style={{ fontFamily: 'SpecialElite' }}>Sign Up</Text>

        </View>
        {/* Main Form */}
        <View className='px-5  mt-5'>
          <Text className="text-center text-[22px] font-bold">Create your account</Text>

          <Text className="text-center text-[16px] font-medium mt-2 text-[#2f2e2e] "
          >
            Register now to create a new account
          </Text>

          <View className="w-full">
            <Text className="font-semibold text-lg mt-5">Name</Text>
            <TextInput
              placeholder="ex: Vijay Hiwale"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            <Text className="font-semibold text-lg mt-5">Email</Text>
            <TextInput
              placeholder="example@gmail.com"
              keyboardType="email-address"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />
            <Text className="font-semibold text-lg mt-5">Password</Text>
            <View className=' flex flex-row  justify-end items-center  relative'>

              <TextInput
                placeholder="**************"
               
                className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity className=' absolute right-5'
              onPress={() => setPasswordVisible(!passwordVisible)} >
                <MaterialCommunityIcons name="eye" size={23} color='#4b5563' />
              </TouchableOpacity>
            </View>



            <Text className="font-semibold text-lg mt-5">Confirm Password</Text>
            <View className=' flex flex-row  justify-end items-center  relative'>

              <TextInput
                placeholder="**************"
                secureTextEntry={!confirmPasswordVisible}
                className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              />
              <TouchableOpacity className=' absolute right-5'
              onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} >
                <MaterialCommunityIcons name="eye" size={23} color='#4b5563' />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            className="bg-[#800000] w-full text-center py-3 rounded-lg mt-10"
            onPress={() => router.push('/(auth)')}
          >
            <Text className="text-white text-center font-medium text-[15px]">Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border-2 border-[#800000] w-full text-center py-3 rounded-lg mt-4"
            
          >
            <Text className="text-[#800000] text-center font-medium text-[15px]">
              Sign in with Google
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center my-4  ">
            <Text className="font-semibold text-[14px]">Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/(auth)')}>
              <Text className="text-[#800000] font-semibold text-[14px]"> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;