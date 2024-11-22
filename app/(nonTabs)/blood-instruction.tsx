import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import { router, useRouter } from 'expo-router'

const BloodInstruction = () => {
    const router = useRouter();

    const tableData = [
        { bloodType: "O", canGiveTo: "A+, AB+", canReceiveFrom: "A+, A-, O+, O-" },
        { bloodType: "A+", canGiveTo: "A+, AB+", canReceiveFrom: "A+, A-, O+, O-" },
        { bloodType: "O-", canGiveTo: "A+, B+, AB+, O+", canReceiveFrom: "O-" },
    ];
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View className='fixed top-5 flex flex-row items-center justify-between px-5 w-full'>
                     <TouchableOpacity className=' '
                        onPress={() => router.push('../(tabs)/')}>
                          <View className='w-[30px] h-[30px]   flex items-center justify-center'>
                   
                    <Ionicons name="chevron-back-outline" size={25} color="black" />
                    </View>
                    </TouchableOpacity>
                  
                    <View><Text className='font-bold text-2xl'>Blood Instruction</Text></View>
                    <TouchableOpacity
                        onPress={() => router.push('../(nonTabs)/notification')}>
                        <Ionicons name="notifications-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                {/* Main Form */}
                <View className='px-5  mt-14'>


                    <Text className='text-[#800000] font-bold text-[21px] mb-4'>Additional tips before donating:</Text>
                    <View>
                        <Text className='font-medium mb-3 ml-3'>Don’t take aspirin for 2 days before your appointment.</Text>
                        <Text className='font-medium mb-3 ml-3'>Ask a friend to donate at the same time. You can support each other and do twice as much good!</Text>
                        <Text className='font-medium mb-5 ml-3'>Download the Blood Bank App to receive appointment reminders, start your RapidPass, and more.</Text>
                    </View>

                    <Text className='text-[#800000] font-bold text-[21px] mb-4'>Additional tips the day of your donation:</Text>
                    <View>
                        <Text className='font-medium mb-3 ml-3'>Drink an extra 16 oz. of water (or other nonalcoholic drink) before your appointment.</Text>
                        <Text className='font-medium mb-3 ml-3'>Eat a healthy meal, avoiding fatty foods like hamburgers, fries, or ice cream.</Text>
                        <Text className='font-medium mb-4 ml-3'>Let us know if you have a preferred arm or particular vein that has been used successfully in the past to draw blood.</Text>
                    </View>

                    <Text className='text-[#800000] font-bold text-[21px] mb-4'>Additional tips after donating:</Text>
                    <View>
                        <Text className='font-medium mb-3 ml-3'>Keep the strip bandage on for the next several hours. To avoid a skin rash, clean the area around the bandage.</Text>
                        <Text className='font-medium mb-3 ml-3'>Don’t do any heavy lifting or vigorous exercise for the rest of the day.</Text>
                        <Text className='font-medium mb-5 ml-3'>Keep eating iron-rich foods.</Text>
                    </View>

                    <Text className='text-[#800000] font-bold text-[21px] mb-4'>Blood type matching:</Text>

                    <ScrollView className="flex-1 mb-10">
                        {/* Header */}
                        <View className="flex-row bg-red-800 rounded-t-lg">
                            <Text className="flex-1 text-center text-white font-bold py-2 text-[13px]">Blood Type</Text>
                            <Text className="flex-1 text-center text-white font-bold py-2 text-[13px]">
                                You Can Give Blood To
                            </Text>
                        <Text className="flex-1 text-center text-white font-bold py-2 text-[13px]">
                                You Can Receive Blood From
                            </Text>
                        </View>

                        {/* Rows */}
                        {tableData.map((row, index) => (
                            <View
                                key={index}
                                className={`flex-row ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                    } border-b border-gray-400`}
                            >
                                <Text className="flex-1 font-medium text-center text-black py-2">{row.bloodType}</Text>
                                <Text className="flex-1 text-center font-medium text-black py-2">{row.canGiveTo}</Text>
                                <Text className="flex-1 text-center font-medium text-black py-2">{row.canReceiveFrom}</Text>
                            </View>
                        ))}
                    </ScrollView>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BloodInstruction