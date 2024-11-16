import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router';


const SignUp = () => {
  const router = useRouter();
  return (
    <SafeAreaView   >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        <View className='h-full px-6 flex flex-col items-center justify-center'>
          <Text className='text-center text-2xl font-bold'>Create your account</Text>
          <Text className='text-center text-[17px] font-medium mt-3 text-[#2f2e2e]'>Register now to create a new account</Text>

          <View className='w-full'>
            <Text className='font-semibold text-lg mt-6'>Name</Text>
            <TextInput
              placeholder='ex: Vijay Hiwale'
              className="w-full px-4  mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            >
            </TextInput>

            <Text className='font-semibold text-lg mt-6'>Email</Text>
            <TextInput
              placeholder='example@gmail.com'
              keyboardType="email-address"
              className="w-full px-4  mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            >
            </TextInput>

            <Text className='font-semibold text-lg mt-6'>Password</Text>
            <TextInput
              placeholder='**************'
              keyboardType="email-address"
              className="w-full px-4  mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"

            >
            </TextInput>

            <Text className='font-semibold text-lg mt-6'>Confirm Password</Text>
            <TextInput
              placeholder='**************'
              keyboardType="email-address"
              className="w-full px-4  mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"

            >
            </TextInput>
          </View>

          <TouchableOpacity
            className="bg-[#800000] w-full text-center py-3 rounded-lg mt-10"
           
          onPress={()=> router.push('/(auth)/login')}
          >
            <Text className="text-white text-center font-medium text-[15px]">Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="border-2 border-[#800000] w-full text-center py-3 rounded-lg mt-4"
            onPress={()=> router.push('/(auth)/forget-password')}
          >
            <Text className="text-[#800000] text-center font-medium text-[15px]">
              Sign in with Google
            </Text>
          </TouchableOpacity>
         
         <View className="flex-row justify-center mt-6">
            <Text className="font-medium  text-[14px]">Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
              <Text className="text-[#800000] font-medium text-[14px] "> Login</Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp