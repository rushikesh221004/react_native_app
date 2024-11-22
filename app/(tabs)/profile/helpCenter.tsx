import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { FontAwesome5, Fontisto, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const HelpCenter = () => {
  const router =useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View className='relative top-5 flex flex-row items-center justify-center px-5'>
          <View className=' absolute left-5  w-[30px] h-[30px] flex justify-center'>
            <TouchableOpacity
              onPress={() => router.push('./')}>
              <Ionicons name="chevron-back-outline" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <View><Text className='font-semibold text-2xl text-center'>Help Center</Text></View>


        </View>
        {/* Main Form */}
        <View className='px-5  mt-12'>

           <View className='flex items-center justify-center'>
           <Image
                   style={{width:300 , height:300}}
                      className='h-[300px] w-[300px]'
                      source={require('../../../assets/images/support.png')}
                      resizeMode="contain"
                    />

                    <Text className='text-md font-medium text-gray-800 text-center'>24/7</Text>
                    <Text className='text-lg font-medium text-gray-900 text-center mt-2 '>Need Help?</Text>
                    <Text className='text-xl font-semibold text-[#800000] my-6'>Tell us how we can help you</Text>
                    <Text></Text>
           </View>
           <View className="flex-row flex   items-center justify-evenly ">
        <TouchableOpacity className="bg-white rounded-3xl border-2 border-gray-300    items-center justify-center w-36 h-36">
        
        <FontAwesome5 name="rocketchat" size={30} color="#800000" />          
          <Text className="mt-2 text-[15px] font-medium">Chat with us</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white rounded-3xl border-2 border-gray-300  items-center justify-center w-36 h-36">
          <View className="relative   flex   justify-center items-center">
       

            <Fontisto name="email" size={30} color="#800000" />
          </View>
          <Text className="mt-2 text-[15px] font-medium">Email us</Text>
        </TouchableOpacity>
      </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HelpCenter