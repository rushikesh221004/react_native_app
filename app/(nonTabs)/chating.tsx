import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { Feather, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router';


const Chating = () => {

  const router = useRouter();

  const user = [
    {
      name: "Vijay Hiwale", message: "Hello", Time: "12.00"
    },
    {
      name: "Rushikesh Manjre", message: "By", Time: "06.00"
    },
    {
      name: "Om Murhe", message: "How are you?", Time: "10.00"
    },
    {
      name: "Vaibhav Nimkarde", message: "You are donor ?", Time: "04.00"
    },
    {
      name: "Vijay Hiwale", message: "Hello", Time: "12.00"
    },
    {
      name: "Rushikesh Manjre", message: "By", Time: "06.00"
    },
    {
      name: "Om Murhe", message: "How are you?", Time: "10.00"
    },
    {
      name: "Vaibhav Nimkarde", message: "You are donor ?", Time: "04.00"
    },
    {
      name: "Vijay Hiwale", message: "Hello", Time: "12.00"
    },
    {
      name: "Rushikesh Manjre", message: "By", Time: "06.00"
    },
    {
      name: "Om Murhe", message: "How are you?", Time: "10.00"
    },
    {
      name: "Vaibhav Nimkarde", message: "You are donor ?", Time: "04.00"
    },
    {
      name: "Vijay Hiwale", message: "Hello", Time: "12.00"
    },
    {
      name: "Rushikesh Manjre", message: "By", Time: "06.00"
    },
    {
      name: "Om Murhe", message: "How are you?", Time: "10.00"
    },
    {
      name: "Vaibhav Nimkarde", message: "You are donor ?", Time: "04.00"
    },

  ]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View className='relative top-5 flex flex-row items-center justify-center px-5 '>
          <View className=' absolute left-6 w-[30px] h-[30px] flex justify-center'>
            <TouchableOpacity
              onPress={() => router.push('../(tabs)')}>
              <Ionicons name="chevron-back-outline" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <View><Text className='font-bold text-2xl text-center'>Chat</Text></View>


        </View>
        {/* Main Form */}
        <View className='px-5  mt-12'>

          <View className='flex flex-row relative items-center w-full'>
            <TextInput
              className='text-gray-700 px-10 border-2 border-gray-400 rounded-2xl w-full py-[11px] text-[13px] font-medium'
              placeholder='Search person name'
            >

            </TextInput>
            <Feather className=' absolute ml-3' name="search" size={20} color="#9ca3af" />
          </View>
          <ScrollView className=' mt-3'>
            {
              user.map((data, items) => (
                <View key={items} className='flex flex-row px-1 items-center justify-between   py-2  border-b-2 border-gray-200 '  >
                  <View className='flex  flex-row  gap-2'>
                    <View className='h-[45px] w-[45px] rounded-full bg-red-600'></View>
                    <View className='   justify-center '>
                      <Text className='font-semibold'>{data.name}</Text>


                      <Text className='text-[11px] '>{data.message}</Text>

                    </View>
                  </View>
                  <View >

                    <Text className=' text-black font-medium text-[12px]'>{data.Time}</Text>
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