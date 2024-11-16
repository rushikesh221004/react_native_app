import { Image, StyleSheet, Platform, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
    <>
      <View className="items-center justify-center flex-1 px-4 bg-gray-100">
        <Text>Welcome to Blood Bank App</Text>
        <Text className="mb-8 text-2xl font-bold text-gray-800">Login</Text>

        <View className="w-full">

          <TextInput
            placeholder="Email"

            className="w-full h-12 px-4 mb-2 border border-gray-300 rounded-lg"
            keyboardType="email-address"

          />


          <TextInput
            placeholder="Password"

            className="w-full h-12 px-4 mb-2 border border-gray-300 rounded-lg"

            secureTextEntry
          />


          <TouchableOpacity
            className="items-center justify-center w-full h-12 bg-blue-500 rounded-lg"
            
          >
            <Text className="text-lg font-semibold text-white">Login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="mt-4">
          <Text className="text-blue-500">Forgot Password?</Text>
        </TouchableOpacity>

        <View className="mt-6">
          <Text className="text-gray-600">Don't have an account?</Text>


        </View>
        <View className='w-full mt-6 text-center border border-gray-300'>
          <TouchableOpacity
            className="items-center justify-center h-12 my-2 bg-pink-400 rounded-lg"

          >
             <Text className="text-lg font-semibold text-white">Register</Text> 

          </TouchableOpacity></View>



      </View>
    </>

  );
}



