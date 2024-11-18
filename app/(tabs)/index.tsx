import { Image, StyleSheet, Platform, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useRouter } from 'expo-router';
import { useExpoRouter } from 'expo-router/build/global-state/router-store';
 
 
 
export default function HomeScreen() {
  const router = useRouter();
  return (
    <>
           <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View className="relative w-[100%] h-[300px] top-0 flex flex-col  items-center justify-center  text-center bg-blue-100">
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
          <View className=' flex flex-col  px-5 gap-7 my-8'>

            
          <View className='flex flex-row justify-between items-center   w-full    '>
            <View className='flex flex-row items-center  justify-between'>
                  <View className='h-14 w-14 bg-white rounded-full'></View>
                  <View className='pl-2'>
                    <Text className='text-white text-lg font-normal'>Hello Selena!</Text>
                    <Text className='text-white text-[10px] mt-1'>User ID: 915770</Text>
                  </View>
            </View>
            <View className='flex flex-row items-center gap-5'>
                <TouchableOpacity onPress={()=> router.push('./chating')}>
                <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
                </TouchableOpacity>
              <TouchableOpacity onPress={()=> router.push('./notification')}>
              <Ionicons name="notifications-outline" size={24} color="white" />
              </TouchableOpacity>
              </View>
          </View>

           <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
           <View className='bg-yellow-400 rounded-xl w-[150px] h-[100px] mr-3'></View>
           <View className='bg-yellow-400 rounded-xl w-[150px] h-[100px]  mr-3'></View>
           <View className='bg-yellow-400 rounded-xl w-[150px] h-[100px]  mr-3'></View>
           <View className='bg-yellow-400 rounded-xl w-[150px] h-[100px]  mr-3'></View>
           </ScrollView>
          </View>
          

        </View>
        {/* Main Form */}
        <View className='px-5  mt-5'>
  
            
        </View>
      </ScrollView>
    </SafeAreaView>
    </>

  );
}



