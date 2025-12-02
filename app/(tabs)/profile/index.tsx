import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { Entypo, Feather, FontAwesome, FontAwesome6, Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Svg, { Path } from 'react-native-svg'
import { useRouter } from 'expo-router'
import { useFonts } from 'expo-font'



const Profile = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const [fontsLoaded] = useFonts({
    SpecialElite: require('../../../assets/fonts/SpecialElite-Regular.ttf'),

  });

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <View className="relative w-[100%] h-[130px] top-0 flex flex-col     text-center">
        <Svg
          height="300"
          width="100%"
          viewBox="0 0 1440 1100"
          style={{ position: "absolute", top: 0 }}
        >
          <Path
            fill="#800000"
            d="M0,450C240,650,480,250,720,450C960,650,1200,250,1440,450L1440,300L1440,0L0,0Z"
          />
        </Svg>




        <View className='fixed top-8 flex flex-row items-center justify-between px-5 w-full '>
          <TouchableOpacity className='w-[30px] h-[30px]  flex items-center justify-center  '
            onPress={() => router.push('/')}>

            <Ionicons name="chevron-back-outline" size={25} color="white" />
          </TouchableOpacity>
          <View className='mr-2'>
            <Text className=' text-[24px] text-white '
              style={{ fontFamily: 'SpecialElite' }}>Vijay Hiwale</Text>
            <Text className='text-white text-center text-[11px] font-medium'>User ID: 130826</Text>
          </View>
          <TouchableOpacity
          // onPress={() => router.push('../(nonTabs)/notification')}
          >
            <FontAwesome6 name="edit" size={20} color="white" />
          </TouchableOpacity>
        </View>


      </View>

      <View className='px-5 mt-6'>
        <View className='px-6 flex flex-row items-center justify-between bg-white py-5 rounded-2xl  shadow-gray-500 shadow-xl'>
          <View className='flex flex-col items-center justify-center'>
            <FontAwesome name="heartbeat" size={28} color="#800000" />
            <Text className='text-[11px] mt-1 font-normal'>3 life saved</Text>
          </View>
          <View className='flex flex-col items-center justify-center'>
            <Fontisto name="blood-drop" size={28} color="#800000" />
            <Text className='text-[11px] mt-1 font-normal'>A+ Group</Text>
          </View>
          <View className='flex flex-col items-center justify-center'>
            <Text className='text-[#800000] text-[13px] font-medium'>20 September</Text>
            <Text className='text-[11px] font-normal mt-1'>Next Donation</Text>
          </View>
        </View>

        <View>
          <View className='flex flex-row items-center justify-between mt-10 mb-4'>
            <View className='flex flex-row gap-4'>
              <MaterialIcons name="event-available" size={24} color="#800000" />
              <Text className='text-[14px] font-medium'>Available To Donate</Text>
            </View>
            <View>
              <Switch style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.2 }] }}
                trackColor={{ false: '#767577', true: '#800000' }}
                thumbColor={isEnabled ? '#ffffff' : '#ffffff'}

                onValueChange={toggleSwitch}
                value={!isEnabled}
              />
            </View>
          </View>



          <TouchableOpacity
            onPress={() => router.push('../profile/manageAddress')}>
            <View className='flex flex-row items-center justify-between mb-3  '>
              <View className='flex flex-row gap-4'>
                <Ionicons name="location-outline" size={24} color="#800000" />
                <Text className='text-[14px] font-medium'>Manage Address</Text>
              </View>


              <MaterialIcons name="navigate-next" size={28} color="black" />

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('../profile/rewardsPoints')}>
            <View className='flex flex-row items-center justify-between mb-3  '>
              <View className='flex flex-row gap-4'>
                <Entypo name="trophy" size={24} color="#800000" />
                <Text className='text-[14px] font-medium'>Rewards Points</Text>
              </View>


              <MaterialIcons name="navigate-next" size={28} color="black" />

            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('../profile/userHistory')}>
            <View className='flex flex-row items-center justify-between mb-3  '>
              <View className='flex flex-row gap-4'>
                <MaterialIcons name="history" size={24} color="#800000" />
                <Text className='text-[14px] font-medium'>History</Text>
              </View>


              <MaterialIcons name="navigate-next" size={28} color="black" />

            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className='flex flex-row items-center justify-between mb-3 '>
              <View className='flex flex-row gap-4'>
                <MaterialIcons name="payment" size={24} color="#800000" />
                <Text className='text-[14px] font-medium'>Payment Info</Text>
              </View>

              <MaterialIcons name="navigate-next" size={28} color="black" />

            </View>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => router.push('../profile/helpCenter')}>
            <View className='flex flex-row items-center justify-between mb-3 '>
              <View className='flex flex-row gap-4'>
                <Feather name="help-circle" size={24} color="#800000" />
                <Text className='text-[14px] font-medium'>Help Center</Text>
              </View>

              <MaterialIcons name="navigate-next" size={28} color="black" />

            </View>
          </TouchableOpacity>


          <View className='flex flex-row items-center gap-3 mt-3'>
            <MaterialIcons name="logout" size={24} color="#FA2E31" />
            <TouchableOpacity onPress={() => router.replace('/(auth)')}>
              <Text className='text-[#FA2E31] font-semibold'>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>


    </View>
  )
}

export default Profile
