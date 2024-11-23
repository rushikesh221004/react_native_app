import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView, ScrollView } from 'react-native'

export default function BloodBanks() {
  const BloodBanks = [
    {
      name: "Dr.Sony Blood Bank", location: "Buldhana Road , Malkapur", Time: "09.00 to 10.00"
    },
    {
      name: "Red Cross Blood Bank", location: "Farashi Road , Khamagon", Time: "09.00 to 10.00"
    },
    {
      name: "LifeLine Blood Bank", location: "Shegon", Time: "12.00"
    },
    {
      name: "HeartBeat Blood Bank", location: "shivalay Vihar, khamagon", Time: "09.00 to 10.00"
    },
    {
      name: "VitalFlow Blood Bank", location: "Buldhana", Time: "09.00 to 10.00"
    },
    {
      name: "Hope Blood Bank", location: "Khamagon", Time: "09.00 to 10.00"
    },
    {
      name: "BloodSafe", location: "Farashi Road , Khamagon", Time: "09.00 to 10.00"
    },
    {
      name: "GoldenDrop Blood Bank", location: "Shegon", Time: "09.00 to 10.00"
    },
    {
      name: "PureBlood Bank", location: "Buldhana", Time: "09.00 to 10.00"
    },
    {
      name: "LifeBlood Foundation", location: "Khamagon road , Nandura", Time: "09.00 to 10.00"
    },
    {
      name: "DonateLife Blood Bank", location: "Muktainagar", Time: "09.00 to 10.00"
    },
    {
      name: "Hope Blood Bank", location: "Akola", Time: "09.00 to 10.00"
    },
    {
      name: "PureBlood Bank", location: "Buldhana", Time: "09.00 to 10.00"
    },
    {
      name: "VitalFlow Blood Bank", location: "Nashik", Time: "09.00 to 10.00"
    },
    {
      name: "Hope Blood Bank", location: "Farashi Road , Khamagon", Time: "09.00 to 10.00"
    },
    {
      name: "DonateLife Blood Bank", location: "Farashi Road , Khamagon", Time: "09.00 to 10.00"
    },

  ]
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View className='relative top-5 flex flex-row items-center justify-center px-5 '>
          <View className=' absolute left-5 w-[30px] h-[30px] flex justify-center'>
            <TouchableOpacity
              onPress={() => router.push('../(tabs)')}>
              <Ionicons name="chevron-back-outline" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <View><Text className='font-semibold text-2xl text-center'>Blood Banks</Text></View>


        </View>
        {/* Main Form */}
        <View className='px-5  mt-12'>

          <View className='flex flex-row relative items-center w-full'>
            <TextInput
              className='text-gray-700 px-10 border-2 border-gray-300 rounded-2xl w-full py-[11px] text-[13px] font-mediumm'
              placeholder='Search by location or name'
            >

            </TextInput>
            <Feather className=' absolute ml-3' name="search" size={20} color="#9ca3af" />
          </View>
          <ScrollView className=' mt-4'>
            {
              BloodBanks.map((data, items) => (
                <View key={items} className='flex flex-row   items-center justify-between     border-2 border-gray-300 rounded-xl mb-5 p-4 '  >
                  <View className='flex  flex-row  gap-4  items-center'>
                    <View className='h-[55px] w-[55px]     flex items-center justify-center'>
                    <Image 
                        style={{ width: 50, height: 50 }}
                        className='h-[50px] w-[50px] '
                        source={require('../../assets/images/blood-bank.png')}
                        resizeMode="contain"
                      />
                    </View>
                    <View className=' flex gap-1  justify-center '>
                      <Text className='font-medium'>{data.name}</Text>



                      <Text className=' text-black  text-[12px]'>{data.Time}</Text>
                      <Text className='text-[11px] '>Location: {data.location}</Text>

                    </View>
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
