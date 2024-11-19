import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';


const VerificationComponent = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown === 0) return; 
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, [countdown]);

  return (
    <View >
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
          <TouchableOpacity className=' absolute left-4 top-12'
          onPress={() => router.replace('/(auth)/forget-password')}>
          <FontAwesome6 name="less-than" size={18} color="white"/>
          </TouchableOpacity>
          <Text className='  text-white absolute text-5xl ' style={{ fontFamily: 'SpecialElite' }}> Verification</Text>

        </View>
       
        <Text className='mt-20 font-medium text-[17px] mx-5'>Please check your email to enter your Verification code.</Text>

        <View className="flex-row gap-5 w-[250px] mx-auto mt-6 ">
          {[...Array(4)].map((_, index) => (
            <TextInput
              key={index}
              className="w-14 h-14 text-center border-2 border-[#800000] focus:outline-none rounded-[5px] text-xl font-semibold"
              maxLength={1}
              keyboardType="numeric"
            />
          ))}
        </View>
        
        <Text className="mt-4  text-center font-medium ">
          Resend Code in <Text className="font-bold text-[#800000]">{countdown }</Text> sec
        </Text>
        <TouchableOpacity>
          <Text className='text-center font-medium text-[#800000] underline text-sm'>Reset Code</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-[#800000]  text-center py-3 rounded-lg mt-5 mx-auto w-[350px]"
         onPress={() => router.push('/(auth)/reset-password')}>
         
            <Text className="text-white text-center text-[15px] ">Verify</Text>
            
          </TouchableOpacity>
      </View>
    
  );
};

export default VerificationComponent;