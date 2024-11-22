import { Image, StyleSheet, Platform, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, FlatList, FlatListComponent, TextComponent } from 'react-native';
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
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          <View className="relative w-[100%] h-[210px] top-0 flex flex-col  items-center justify-center  text-center  ">
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
                  <TouchableOpacity onPress={() => router.push('../(nonTabs)/chating')}>
                    <Ionicons name="chatbubble-ellipses-outline" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => router.push('../(nonTabs)/notification')}>
                    <Ionicons name="notifications-outline" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false} className='pl-1'>
                <View className='bg-white rounded-2xl w-[250px] h-[100px] mr-5  shadow-md  shadow-gray-900 p-3 px-4  flex  items-start justify-center   '>
                  <View className='flex flex-col justify-start items-start gap-1'>

                    <Text className='text-[11px] font-medium'>You can decome a blood donar in</Text>

                    <View className='  flex flex-row items-center '>
                      <Text className='font-semibold text-4xl'>2</Text>
                      <Text className='font-medium text-[8px] ml-1 w-[30px] '>Easy Steps</Text>

                    </View>

                    <TouchableOpacity
                      onPress={() => router.push('../(nonTabs)/donor-details')}>
                      <Text className='text-[#800000] text-[12px] underline font-medium'>Become a Donar Now</Text>
                    </TouchableOpacity>

                  </View>

                </View>
                <View className='bg-white rounded-2xl w-[250px] h-[100px] mr-5  shadow-md  shadow-gray-900 p-3 px-4  flex  items-start justify-center  '>
                  <View className='flex flex-col justify-start items-start gap-1'>

                    <Text className='text-[11px] font-medium'>You can decome a blood donar in</Text>

                    <View className='  flex flex-row items-center '>
                      <Text className='font-semibold text-4xl'>2</Text>
                      <Text className='font-medium text-[8px] ml-1 w-[30px] '>Easy Steps</Text>

                    </View>

                    <Text className='text-[#800000] text-[12px] underline font-medium'>Become a Donar Now</Text>

                  </View>

                </View>
                <View className='bg-white rounded-2xl w-[250px] h-[100px] mr-5  shadow-md  shadow-gray-900 p-3 px-4 flex  items-start justify-center '>
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
          <View className='px-5  mt-3   '>

            {/* find donor blood instru and req for blood section */}
            <View className=' px-1 flex flex-row  items-center justify-between  '>

              <TouchableOpacity onPress={() => router.push('../(nonTabs)/blood-requestAvailable')}>
                <View className='h-[100px] w-[100px] bg-white  flex items-center flex-col justify-center rounded-3xl gap-2 p-2 shadow-gray-900 shadow-md border-2 border-gray-200' >
                  <MaterialCommunityIcons name="blood-bag" size={24} color="#800000" className='  text-center' />
                  <Text className='text-[11px] font-semibold text-center'>Available Blood Request</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('./need')}>
                <View className='h-[100px] w-[100px] bg-white  flex items-center flex-col justify-center rounded-3xl gap-2 p-2  shadow-gray-900 shadow-md border-2 border-gray-200'>
                  <FontAwesome6 name="hand-holding-medical" size={24} color="#800000" className='  text-center' />
                  <Text className='text-[11px] font-semibold text-center'>Request For Blood</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('../(nonTabs)/blood-instruction')}>
                <View className='h-[100px] w-[100px] bg-white  flex items-center flex-col justify-center rounded-3xl  gap-2 p-2    shadow-gray-900 shadow-md border-2 border-gray-200'>
                  <Fontisto name="blood-drop" size={24} color="#800000" className='text-center' />
                  <Text className='text-[11px] font-semibold text-center'>Blood Instruction</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Blood needed */}
            <View className='border-2 border-gray-400 rounded-xl mx-1 my-6 px-3 py-3' >
              <Text className='font-medium'>Blood Needed</Text>
              <View className='flex flex-row justify-between items-center mt-2 '>
                <Ionicons name="water-outline" size={27} color="#800000" />
                <Ionicons name="water-outline" size={27} color="#800000" />
                <Ionicons name="water-outline" size={27} color="#800000" />
                <Ionicons name="water-outline" size={27} color="#800000" />
                <Ionicons name="water-outline" size={27} color="#800000" />
                <Ionicons name="water-outline" size={27} color="#800000" />

              </View>
            </View>

            <View>
              <Text className='text-[16px] font-medium px-1 mb-2'>Blood Bank</Text>
              <View className="flex flex-wrap flex-row justify-between py-2">
                <TouchableOpacity
                  className='w-[48%]'
                  onPress={() => router.push('../(nonTabs)/blood-bankDetails')}>
                  <View className=" bg-white items-center justify-center mb-4 p-2 rounded-xl border-gray-400 border-2 gap-1  ">
                    <View className='  p-1   rounded-full'>
                      <Image
                      style={{width:40 ,height:40}}
                        className='h-[40px] w-[40px] '
                        source={require('../../assets/images/blood-bank.png')}
                        resizeMode="contain"
                      />
                    </View>
                    <Text className="font-semibold text-[14px] text-center">Dr. Sony Blood Bank</Text>
                    <Text className='text-[10px] font-medium text-center'>Location : Shivalay Vihar Khamagon</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity className="w-[48%]"
                  onPress={() => router.push('../(nonTabs)/blood-bankDetails')}>
                  <View className="  bg-white items-center justify-center mb-4 p-2 rounded-xl border-gray-400 border-2 gap-1">
                    <View className=' '>
                      <Image
                      style={{width:40 ,height:40}}
                        className='h-[40px] w-[40px]   '
                        source={require('../../assets/images/blood-bank.png')}
                        resizeMode="contain"
                      />
                    </View>
                    <Text className="font-semibold text-[14px] text-center">Bss Trust Blood Bank</Text>
                    <Text className='text-[10px] font-medium text-center'>Location : Farshi Road, Khamagon</Text>
                  </View>
                </TouchableOpacity>
               
               <TouchableOpacity className='w-[48%]'>
               <View className="  bg-white items-center justify-center mb-2 p-2 rounded-xl border-gray-400 border-2 gap-1">
                  <View className=' '>
                    <Image
                    style={{width:40 ,height:40}}
                      className='h-[40px] w-[40px] '
                      source={require('../../assets/images/blood-bank.png')}
                      resizeMode="contain"
                    />
                  </View>
                  <Text className="font-semibold text-[14px] text-center">Jeevan Jyoti Blood Bank</Text>
                  <Text className='text-[10px] font-medium text-center'>Location : Malkapur</Text>
                </View>
               </TouchableOpacity>
                
                <TouchableOpacity className='w-[48%]'>
                <View className=" bg-white items-center justify-center mb-2 p-2 rounded-xl border-gray-400 border-2 gap-1">
                  <View className=' '>
                    <Image
                    style={{width:40 ,height:40}}
                      className='h-[40px] w-[40px]  '
                      source={require('../../assets/images/blood-bank.png')}
                      resizeMode="contain"
                    />
                  </View>
                  <Text className="font-semibold text-[14px] text-center">Lilavati Blood Bank </Text>
                  <Text className='text-[10px] font-medium text-center'>Location : Malkapur road, Buldhana</Text>
                </View>
                </TouchableOpacity>
              </View>
            </View>

            <View className=''>
              <Text className='text-[16px] font-medium px-1 mb-1 mt-1'>Donation Request</Text>
              {/* <FlatList
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
                    <View className='relative   flex items-center justify-center'>
                      <MaterialCommunityIcons name="water" size={40} color="#800000" />
                      <Text className=' absolute text-center  text-white text-[11px] font-medium'>{item.bloodType}</Text>
                    </View>
                  </View>}
              /> */}

              <ScrollView className=' '>
                {
                  user.map((data, items) => (
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </>

  );
}



