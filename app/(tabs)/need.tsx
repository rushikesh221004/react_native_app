import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Need = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View className='fixed top-5 flex flex-row items-center justify-between px-5'>
          <TouchableOpacity className='w-[30px] h-[30px]   flex justify-center'
            onPress={() => router.push('/')}>
           
            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </TouchableOpacity>
          <View><Text className='font-bold text-2xl'>Blood Needed</Text></View>
          <TouchableOpacity
            onPress={() => router.push('../(nonTabs)/notification')}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* Main Form */}
        <View className='px-5  mt-10'>


          <View className="w-full">
            <Text className="font-semibold text-lg mt-4">Patient name</Text>
            <TextInput
              placeholder="Enter patient name"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            <Text className="font-semibold text-lg mt-4">Blood Type</Text>
            <TextInput
              placeholder="Select blood Type"

              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />
            <Text className="font-semibold text-lg mt-4">Age</Text>
            <TextInput
              keyboardType='numeric'
              placeholder="Enter patient age"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />
            <Text className="font-semibold text-lg mt-4">Disease Name</Text>
            <TextInput
              placeholder="Enter disease name"

              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />
            <Text className="font-semibold text-lg mt-4">Location</Text>
            <TextInput
              placeholder="Select location"

              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            <Text className="font-semibold text-lg mt-4">Contact Number</Text>
            <TextInput
              placeholder="Enter contact number"
              keyboardType='numeric'
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />
          </View>

          <TouchableOpacity
            className="bg-[#800000] w-full text-center py-[12px] rounded-lg mt-10" >
            <Text className="text-white text-center font-medium text-[15px]">Submit</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Need