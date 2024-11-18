import { Image, StyleSheet, Platform, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, FlatList, FlatListComponent } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useRouter } from 'expo-router';
import { useExpoRouter } from 'expo-router/build/global-state/router-store';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';


export default function HomeScreen() {

  const user = [
    {
      name: "Vijay Hiwale", Location: "Mumbai", bloodType: "O"
    },
    {
      name: "Rushikesh Manjre", Location: "Surat", bloodType: "O"
    },
    {
      name: "Om Murhe", Location: "Nagpur", bloodType: "O"
    },
    {
      name: "Vaibhav Nimkarde", Location: "Pune", bloodType: "O"
    },

  ]
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View className="relative w-[100%] h-[200px] top-0 flex flex-col  items-center justify-center  text-center  ">
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
            <View className=' flex flex-col  px-5 gap-7 py-4  '>


              <View className='flex flex-row justify-between items-center   w-full    '>
                <View className='flex flex-row items-center  justify-between'>
                  <View className='h-14 w-14 bg-white rounded-full'></View>
                  <View className='pl-2'>
                    <Text className='text-white text-lg font-normal'>Hello Selena!</Text>
                    <Text className='text-white text-[10px] mt-1'>User ID: 915770</Text>
                  </View>
                </View>
                <View className='flex flex-row items-center gap-5'>
                  <TouchableOpacity onPress={() => router.push('./chating')}>
                    <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => router.push('./notification')}>
                    <Ionicons name="notifications-outline" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false} className='pl-1'>
                <View className='bg-white rounded-2xl w-[250px] h-[100px] mr-5  shadow-md  shadow-gray-900 p-3  flex items-center justify-center  '>
                  <View className='flex flex-col justify-start items-start gap-1'>

                    <Text className='text-[11px] font-medium'>You can decome a blood donar in</Text>

                    <View className='  flex flex-row items-center '>
                      <Text className='font-semibold text-4xl'>2</Text>
                      <Text className='font-medium text-[8px] ml-1 w-[30px] '>Easy Steps</Text>

                    </View>

                    <Text className='text-[#800000] text-[12px] underline font-medium'>Become a Donar Now</Text>

                  </View>

                </View>
                <View className='bg-white rounded-2xl w-[250px] h-[100px] mr-5  shadow-md  shadow-gray-900 p-3  flex items-center justify-center  '>
                  <View className='flex flex-col justify-start items-start gap-1'>

                    <Text className='text-[11px] font-medium'>You can decome a blood donar in</Text>

                    <View className='  flex flex-row items-center '>
                      <Text className='font-semibold text-4xl'>2</Text>
                      <Text className='font-medium text-[8px] ml-1 w-[30px] '>Easy Steps</Text>

                    </View>

                    <Text className='text-[#800000] text-[12px] underline font-medium'>Become a Donar Now</Text>

                  </View>

                </View>
                <View className='bg-white rounded-2xl w-[250px] h-[100px] mr-5  shadow-md  shadow-gray-900 p-3  flex items-center justify-center  '>
                  <View className='flex flex-col justify-start items-start gap-1'>

                    <Text className='text-[11px] font-medium'>You can decome a blood donar in</Text>

                    <View className='  flex flex-row items-center '>
                      <Text className='font-semibold text-4xl'>2</Text>
                      <Text className='font-medium text-[8px] ml-1 w-[30px] '>Easy Steps</Text>

                    </View>

                    <Text className='text-[#800000] text-[12px] underline font-medium'>Become a Donar Now</Text>

                  </View>

                </View>

              </ScrollView>
            </View>


          </View>
          {/* Main Form */}
          <View className='px-5  mt-5   '>

            {/* find donor blood instru and req for blood section */}
            <View className=' px-1 flex flex-row  items-center justify-between  '>

              <TouchableOpacity onPress={() => router.push('')}>
                <View className='h-[100px] w-[100px] bg-white  flex items-center flex-col justify-center rounded-3xl gap-2 p-2 shadow-gray-900 shadow-md border-2 border-gray-200' >
                  <Feather name="search" size={24} color="black" className='  text-center' />
                  <Text className='text-[11px] font-semibold text-cen'>Find Donors</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('')}>
                <View className='h-[100px] w-[100px] bg-white  flex items-center flex-col justify-center rounded-3xl gap-2 p-2  shadow-gray-900 shadow-md border-2 border-gray-200'>
                  <FontAwesome6 name="hand-holding-medical" size={24} color="black" className='  text-center' />
                  <Text className='text-[11px] font-semibold text-center'>Request For Blood</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('')}>
                <View className='h-[100px] w-[100px] bg-white  flex items-center flex-col justify-center rounded-3xl  gap-2 p-2    shadow-gray-900 shadow-md border-2 border-gray-200'>
                  <Fontisto name="blood-drop" size={24} color="black" className='text-center' />
                  <Text className='text-[11px] font-semibold text-center'>Blood Instruction</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Blood needed */}
            <View className='border-2 border-gray-400 rounded-xl mx-1 my-6 px-3 py-3' >
              <Text className='font-medium'>Blood Needed</Text>
              <View className='flex flex-row justify-between items-center mt-2 '>
                <Ionicons name="water-outline" size={27} color="black" />
                <Ionicons name="water-outline" size={27} color="black" />
                <Ionicons name="water-outline" size={27} color="black" />
                <Ionicons name="water-outline" size={27} color="black" />
                <Ionicons name="water-outline" size={27} color="black" />
                <Ionicons name="water-outline" size={27} color="black" />

              </View>
            </View>

            <View className=''>
              <Text className='text-[16px] font-medium px-1 mb-2'>Donation Request</Text>
              <FlatList
                data={user}
                renderItem={({ item }) =>
                  <View className='flex flex-row px-1 items-center justify-between   py-2   mb-1    '  >
                    <View className='flex  flex-row  gap-2'>
                      <View className='h-[45px] w-[45px] rounded-full bg-red-600'></View>
                      <View className='   justify-center '>
                        <Text className='font-semibold'>{item.name}</Text>
                        <View className='flex flex-row'>
                          <Ionicons name="location-outline" size={15} color="black" />
                          <Text className='text-[12px]'>{item.Location}</Text>
                        </View>
                      </View>
                    </View>
                    <View><MaterialCommunityIcons name="water" size={35} color="#800000" /></View>
                  </View>}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>

  );
}



