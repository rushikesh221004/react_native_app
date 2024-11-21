import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import { router, useRouter } from 'expo-router'

const Find_Donor = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View className='fixed top-5 flex flex-row items-center justify-between px-5'>
          <TouchableOpacity
            onPress={() => router.push('/')}>
            <FontAwesome6 name="less-than" size={18} color="black" />
          </TouchableOpacity>
          <View><Text className='font-bold text-2xl'>Find Donor</Text></View>
          <TouchableOpacity
            onPress={() => router.push('../(nonTabs)/notification')}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* Main Form */}
        <View className='px-5  mt-10'>


          <View className='mt-8 flex flex-col'>
            <Text className='font-medium text-xl'>
              Choose Blood Group
            </Text>
            <View className='flex flex-col items-center justify-between my-6 flex-wrap '>
              <View className=' w-full flex flex-row items-center justify-between'>
              <View className='relative   flex items-center justify-center'>
                      <Ionicons name="water" size={50} color="#800000" />
                      <Text className=' absolute text-center  text-white text-[13px] font-medium'>O</Text>
                    </View>
                <View className='relative   flex items-center justify-center'>
                      <Ionicons name="water" size={50} color="#800000" />
                      <Text className=' absolute text-center  text-white text-[13px] font-medium'>A+</Text>
                    </View>
                <View className='relative   flex items-center justify-center'>
                      <Ionicons name="water" size={50} color="#800000" />
                      <Text className=' absolute text-center  text-white text-[13px] font-medium'>B+</Text>
                    </View>
                <View className='relative   flex items-center justify-center'>
                      <Ionicons name="water" size={50} color="#800000" />
                      <Text className=' absolute text-center  text-white text-[13px] font-medium'>AB</Text>
                    </View>
              </View>
              <View className=' w-full flex flex-row items-center justify-between mt-6 mb-4 flex-wrap'>
              <View className='relative   flex items-center justify-center'>
                      <Ionicons name="water" size={50} color="#800000" />
                      <Text className=' absolute text-center  text-white text-[13px] font-medium'>O-</Text>
                    </View>
                <View className='relative   flex items-center justify-center'>
                      <Ionicons name="water" size={50} color="#800000" />
                      <Text className=' absolute text-center  text-white text-[13px] font-medium'>B-</Text>
                    </View>
                <View className='relative   flex items-center justify-center'>
                      <Ionicons name="water" size={50} color="#800000" />
                      <Text className=' absolute text-center  text-white text-[13px] font-medium'>A-</Text>
                    </View>
                <View className='relative   flex items-center justify-center'>
                      <Ionicons name="water" size={50} color="#800000" />
                      <Text className=' absolute text-center  text-white text-[13px] font-medium'>A</Text>
                    </View>
              </View>
            </View>
          </View>
          <View className="w-full">

            <Text className="font-semibold text-lg mt-5">Blood Unit Needed</Text>
            <TextInput
              placeholder="Enter blood unit"
              keyboardType='numeric'
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            <Text className="font-semibold text-lg mt-4">Enter your Location</Text>
            <TextInput
              placeholder="Enter your location"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

          </View>


          <TouchableOpacity
            className="bg-[#800000] w-full text-center py-[12px] rounded-lg mt-16" >
            <Text className="text-white text-center font-medium text-[15px]">Find Donor</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Find_Donor;