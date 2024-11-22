
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { router, useRouter } from 'expo-router'
import { FontAwesome6, Ionicons } from '@expo/vector-icons';

const DonorDetails = () => {
    const rounter = useRouter();
  return (
    <SafeAreaView>
             <View className='relative top-5 flex flex-row items-center justify-center px-5 '>
              <View className=' absolute left-6 w-[30px] h-[30px] flex justify-center'>
              <TouchableOpacity 
                onPress={() => router.push('../(tabs)')}>
               <Ionicons name="chevron-back-outline" size={25} color="black" />
            </TouchableOpacity>
              </View>
          
            <View><Text className='font-semibold text-2xl text-center'> Donor Details</Text></View>
             
  
        </View>
        <View className='px-5  mt-10'>


<View className="w-full">
  <Text className="font-semibold text-lg mt-4">Donor name</Text>
  <TextInput
    placeholder="Enter donor name"
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
    placeholder="Enter donor age"
    className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
  />
 
  <Text className="font-semibold text-lg mt-4">Address</Text>
  <TextInput
    placeholder="Enter address"

    className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
  />

  <Text className="font-semibold text-lg mt-4">Contact Number</Text>
  <TextInput
    placeholder="Enter contact number"
    keyboardType='numeric'
    className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
  />

<Text className="font-semibold text-lg mt-4">Gender</Text>
  <TextInput
    placeholder="Select gender"
    
    className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
  />
</View>

<TouchableOpacity
  className="bg-[#800000] w-full text-center py-[12px] rounded-lg mt-10" >
  <Text className="text-white text-center font-medium text-[15px]">Submit</Text>
</TouchableOpacity>

</View>
    </SafeAreaView>
  )
}

export default DonorDetails