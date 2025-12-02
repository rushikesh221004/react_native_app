import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import axios from 'axios';
const API_BASE = 'http://localhost:4000/api/v1';

const BloodRequestAvailable = () => {
    const [requests, setRequests] = useState<Array<{ bloodType: string; location: string; time: string }>>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await axios.get(`${API_BASE}/requests`);
                const data = res?.data?.data || [];
                setRequests(data);
            } catch (e) {
                setRequests([
                    { bloodType: 'A', location: 'City Hospital', time: '12 Sep 2024' },
                    { bloodType: 'A+', location: 'Life Hospital', time: '15 Mar 2024' },
                ]);
            }
        };
        fetchRequests();
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View className="fixed top-5 flex flex-row items-center justify-between px-5 w-full">
                    <TouchableOpacity onPress={() => router.push('../(tabs)/')}>
                        <Ionicons name="chevron-back-outline" size={25} color="black" />
                    </TouchableOpacity>
                    <View>
                        <Text className="font-bold text-2xl">Blood Request</Text>
                    </View>
                    <TouchableOpacity onPress={() => router.push('../(nonTabs)/notification')}>
                        <Ionicons name="notifications-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                {/* Main Form */}
                <View className="px-5 mt-14">
                    {requests.map((data, index) => (
                        <View
                            key={index}
                            className="flex flex-col gap-4 border-2 border-gray-400 rounded-xl p-5 mb-6"
                        >
                            <View className="flex flex-row gap-3">
                                <View className="h-[50px] w-[50px] flex items-center justify-center border-2 border-[#800000] relative rounded-full">
                                    <Ionicons name="water" size={45} color="#800000" />
                                    <Text className="absolute text-center w-full text-white text-[13px] font-medium">
                                        {data.bloodType}
                                    </Text>
                                </View>
                                <View className="flex flex-col gap-[1px]">
                                    <Text className="font-bold text-lg">
                                        Emergency {data.bloodType} Blood Needed
                                    </Text>
                                    <View className="flex flex-row gap-4">
                                        <Text className="text-[11px]">{data.location}</Text>
                                        <Text className="text-[11px]">{data.time}</Text>
                                    </View>
                                </View>
                            </View>
                            <View className="flex flex-row justify-between items-center w-full">
                                <TouchableOpacity className="flex-1 mr-2">
                                    <Text className="bg-[#800000] text-white py-2 rounded-2xl font-medium text-center text-lg border-gray-300 border-2 shadow-xl shadow-gray-800">
                                        Donate Now
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="flex-1 ml-2">
                                    <Text className="text-black bg-white py-2 rounded-2xl font-medium text-center text-lg border-2 border-gray-300 shadow-xl shadow-gray-800">
                                        Decline
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BloodRequestAvailable;
