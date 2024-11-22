import { FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView, ScrollView, View } from 'react-native'





const RewardPoints = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View className='relative top-5 flex flex-row items-center justify-center px-5 '>
                    <View className=' absolute left-5 w-[30px] h-[30px] flex justify-center'>
                        <TouchableOpacity
                            onPress={() => router.push('./')}>
                            <Ionicons name="chevron-back-outline" size={25} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View><Text className='font-semibold text-2xl text-center'>Manage Address</Text></View>


                </View>


                {/* Main Form */}
                <View className='  mt-14'>
                    <View className="w-full bg-[#800000] flex flex-row items-center justify-between px-6 py-8">
                        <View className="flex-1">
                            <Text className="font-medium text-4xl text-white mb-3">Rewards: 1800 Points</Text>
                            <Text className="text-md text-white ">Get 300 reward points for every blood donation</Text>
                        </View>
                        <View className="flex items-center justify-center ">
                            <FontAwesome5 name="coins" size={100} color="#fcec03" />
                        </View>
                    </View>

                    <View className='px-5 mt-5'>
                        <Text className='text-[18px] font-medium'>Badge</Text>
                        <View className="flex flex-row items-center bg-white rounded-lg shadow-md px-4 py-3 mt-4">
                            {/* Icon Section */}
                            <View className="w-12 h-12 bg-[#800000] rounded-full flex items-center justify-center">
                                <FontAwesome5 name="hand-holding-heart" size={22} color="#fff" />
                            </View>

                            {/* Text Section */}
                            <View className="ml-4">
                                <Text className="font-bold text-lg text-[#800000]">Donator</Text>
                                <Text className="text-sm text-gray-600">
                                    You have to save 3 lives to get this badge
                                </Text>
                            </View>
                        </View>
                        <View className="flex flex-row items-center bg-white rounded-lg shadow-md px-4 py-3 mt-4">
                            {/* Icon Section */}
                            <View className="w-12 h-12 bg-[#800000] rounded-full flex items-center justify-center">
                                <FontAwesome5 name="user-md" size={23} color="#fff" />
                            </View>

                            {/* Text Section */}
                            <View className="ml-4">
                                <Text className="font-bold text-lg text-[#800000]">Life Savior</Text>
                                <Text className="text-sm text-gray-600">
                                    You have to save 6 life to get this badge
                                </Text>
                            </View>
                        </View>
                        <View className="flex flex-row items-center bg-white rounded-lg shadow-md px-4 py-3 mt-4">
                            {/* Icon Section */}
                            <View className="w-12 h-12 bg-[#800000] rounded-full flex items-center justify-center">
                                <FontAwesome6 name="person-walking" size={26} color="white" />
                            </View>

                            {/* Text Section */}
                            <View className="ml-4">
                                <Text className="font-bold text-lg text-[#800000]">SuperHero</Text>
                                <Text className="text-sm text-gray-600">
                                    You have to save 10 lives to get this badge
                                </Text>
                            </View>
                        </View>

                        <View className="flex-1 bg-gray-100 my-6">
                            {/* Top Section - Progress Bar */}
                            <Text className="text-center font-bold text-lg text-gray-700 mb-4">
                                You have saved 6 valuable lives till now
                            </Text>
                            <View className="w-full h-[8px] bg-gray-300 rounded-full overflow-hidden mb-4">
                                <View className="h-full bg-[#800000]" style={{ width: "60%" }} />
                            </View>

                            {/* Badge Section */}
                            <View className="flex flex-row items-center justify-around">
                                {/* Donator */}
                                <View className="flex items-center">
                                    <Text className=" text-sm text-gray-600 mb-2">Donator</Text>
                                    <View className="w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center">
                                        <FontAwesome5 name="hand-holding-heart" size={26} color="#fff" />
                                    </View>

                                </View>

                                {/* Life Savior */}
                                <View className="flex items-center">
                                    <Text className=" text-lg font-bold text-gray-700 mb-3">Life Savior</Text>
                                    <View className="w-20 h-20 bg-[#800000] rounded-full flex items-center justify-center">
                                        <FontAwesome5 name="user-md" size={32} color="#fff" />
                                    </View>

                                </View>

                                {/* Superhero */}
                                <View className="flex items-center">
                                    <Text className=" text-sm text-gray-600">Superhero</Text>
                                    <View className="w-16 h-16 bg-[#800000] rounded-full flex items-center justify-center mt-2">
                                    <FontAwesome6 name="person-walking" size={30} color="white" />
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RewardPoints