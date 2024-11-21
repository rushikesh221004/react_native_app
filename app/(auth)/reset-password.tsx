import { View, Text,TouchableOpacity ,TextInput} from 'react-native'
import Svg, { Path } from 'react-native-svg';
import { useRouter } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';


const ResetPassword = () => {
  const router=useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    SpecialElite: require('../../assets/fonts/SpecialElite-Regular.ttf'),

  });

  return (
    <View>
       <View className="relative w-[100%] h-[130px] top-0 flex flex-col  items-center justify-center  text-center">
        <Svg
          height="300"
          width="100%"
          viewBox="0 0 1440 1100"
          style={{ position: 'absolute', top: 0 }}
        >
          <Path
            fill="#800000"
            d="M0,450C240,650,480,250,720,450C960,650,1200,250,1440,450L1440,300L1440,0L0,0Z"
          />

        </Svg>
        <TouchableOpacity className='absolute left-4 top-12 w-[30px] h-[30px]'
          onPress={() => router.replace('/(auth)/verification')}>
          <FontAwesome6 name="less-than" size={18} color="white" />
        </TouchableOpacity>
        <Text className='text-[36px]   text-white absolute text-center'
          style={{ fontFamily: 'SpecialElite' }}>Reset password</Text>

      </View>
      <View className='px-5'>
      <Text className="font-semibold text-lg mt-20">Password</Text>
            <View className=' flex flex-row  justify-end items-center  relative'>

              <TextInput
                placeholder="New passsword"
               
                className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity className=' absolute right-5 mt-2'
              onPress={() => setPasswordVisible(!passwordVisible)} >
                <MaterialCommunityIcons name="eye" size={23} color='#4b5563' />
              </TouchableOpacity>
            </View>



            <Text className="font-semibold text-lg mt-5">Confirm Password</Text>
            <View className=' flex flex-row  justify-end items-center  relative'>

              <TextInput
                placeholder="Confirm password"
                secureTextEntry={!confirmPasswordVisible}
                className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              />
              <TouchableOpacity className=' absolute right-5 mt-2'
              onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} >
                <MaterialCommunityIcons name="eye" size={23} color='#4b5563' />
              </TouchableOpacity>
              
            </View>
            <TouchableOpacity className="bg-[#800000]  text-center py-3 rounded-lg mt-12 mx-auto w-[350px]"
      onPress={()=> router.push('/(auth)')}>
        <Text className="text-white text-center text-[15px] ">Reset Password</Text>
      </TouchableOpacity>
          </View>
          </View>
    
  )
}

export default ResetPassword