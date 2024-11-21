import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router'

const BloodBankDetails = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View className='relative top-5 flex flex-row items-center justify-center px-5 '>
            <TouchableOpacity className=' absolute left-6'
                onPress={() => router.push('../(tabs)/')}>
                <FontAwesome6 name="less-than" size={18} color="black"
                 />
            </TouchableOpacity>
            <View><Text className='font-bold text-2xl text-center'>Chat</Text></View>
             
  
        </View>
        {/* Main Form */}
        <View className='px-5  mt-12'>
            <View className='bg-[#800000] rounded-xl w-full h-[150px]'>


            </View>
            <View className='flex flex-row items-center justify-between mt-2'>
                <Text className='text-[14px] font-medium px-1'>
                    Location
                </Text>
                <Text className=' text-[12px]'>
                    Khamagon
                </Text>
            </View>
            <View className='flex flex-row items-center justify-between mt-2'>
                <Text className='text-[14px] font-medium px-1'>
                    Timing :
                </Text>
                <Text className=' text-[12px]'>
                    09:00 AM To 09:00 PM
                </Text>
            </View>
            <View className='flex flex-row items-center justify-between mt-2'>
                <Text className='text-[14px] font-medium px-1'>
                    Phone Number:
                </Text>
                <Text className=' text-[12px]'>
                    9579074013
                </Text>
            </View>
            <View className='flex flex-row items-center justify-between mt-2'>
                <Text className='text-[14px] font-medium px-1'>
                    Emergency Contact :
                </Text>
                <Text className=' text-[12px]'>
                    2536456589
                </Text>
            </View>
        

        </View>
    </ScrollView>
</SafeAreaView>
  )
}

export default BloodBankDetails