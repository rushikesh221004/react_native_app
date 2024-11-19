import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router';

const Chating = () => {

  const router = useRouter();

  const user = [
    {
      name: "Vijay Hiwale", Location: "Mumbai", bloodType: "O+"
    },
    {
      name: "Rushikesh Manjre", Location: "Surat", bloodType: "A"
    },
    {
      name: "Om Murhe", Location: "Nagpur", bloodType: "B+"
    },
    {
      name: "Vaibhav Nimkarde", Location: "Pune", bloodType: "AB"
    },

  ]
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View className='fixed top-5 flex flex-row items-center justify-between px-5'>
            <TouchableOpacity
                onPress={() => router.push('../(tabs)/')}>
                <FontAwesome6 name="less-than" size={18} color="black" />
            </TouchableOpacity>
            <View><Text className='font-bold text-2xl'>Blood Instruction</Text></View>
            <TouchableOpacity
                onPress={() => router.push('../(nonTabs)/notification')}>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
        {/* Main Form */}
        <View className='px-5  mt-14'>
        <ScrollView className=' '>
                {
                   user.map((data,items)=>(
                    <View key={items} className='flex flex-row px-1 items-center justify-between   py-2  border-b-2 border-gray-200 '  >
                    <View className='flex  flex-row  gap-2'>
                      <View className='h-[45px] w-[45px] rounded-full bg-red-600'></View>
                      <View className='   justify-center '>
                        <Text className='font-semibold'>{data.name}</Text>
                        <View className='flex flex-row'>
                          <Ionicons name="location-outline" size={15} color="black" />
                          <Text className='text-[12px]'>{data.Location}</Text>
                        </View>
                      </View>
                    </View>
                    <View className='relative   flex items-center justify-center'>
                      <MaterialCommunityIcons name="water" size={40} color="#800000" />
                      <Text className=' absolute text-center  text-white text-[11px] font-medium'>{data.bloodType}</Text>
                    </View>
                  </View>
                   ))
                }
              </ScrollView>

        </View>
    </ScrollView>
</SafeAreaView>
  )
}

export default Chating