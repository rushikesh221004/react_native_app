import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'

import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { router, useRouter } from 'expo-router'
import axios from 'axios'
const API_BASE = 'http://localhost:4000/api/v1'




const renderRatingStars = (rating: number) => {
  return (
    <View className="flex flex-row items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <Text
          key={index}
          className={`text-lg ${index < rating ? "text-yellow-500" : "text-gray-300"
            }`}
        >
          ★
        </Text>
      ))}
    </View>
  );
};

const Find_Donor = () => {
  const router = useRouter();
  const [donors, setDonors] = useState<Array<{ id: string | number; name: string; location: string; bloodGroup: string; rating: number }>>([])
  const [search, setSearch] = useState('')
  const [group, setGroup] = useState('')

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await axios.get(`${API_BASE}/donors`)
        const data = res?.data?.data || []
        setDonors(data)
      } catch (e) {
        setDonors([
          { id: 1, name: 'Shashwata Chowdhury', location: 'Labaid Hospital', bloodGroup: 'B+', rating: 5 },
          { id: 2, name: 'Fhamida Nupur', location: 'Dhaka Medical College', bloodGroup: 'A+', rating: 4 },
          { id: 3, name: 'Sadman Hossain', location: 'Labaid Hospital', bloodGroup: 'B+', rating: 5 },
          { id: 4, name: 'Sabrina Binte', location: 'Square Hospital', bloodGroup: 'O+', rating: 4 },
        ])
      }
    }
    fetchDonors()
  }, [])

  const filtered = useMemo(() => {
    return donors.filter(d =>
      (group ? d.bloodGroup === group : true) &&
      (search ? d.name.toLowerCase().includes(search.toLowerCase()) : true)
    )
  }, [donors, search, group])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View className='fixed top-5 flex flex-row items-center justify-between px-5 w-full'>
          <TouchableOpacity
            onPress={() => router.push('/')}>

            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </TouchableOpacity>
          <View><Text className='font-bold text-2xl'>Find Donor</Text></View>
          <TouchableOpacity
            onPress={() => router.push('../(nonTabs)/notification')}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* Main Form */}
        <View className='px-5  mt-10'>


          <View className='mt-8 flex flex-col'>
            <Text className='font-medium text-xl'>
              Choose Blood Group
            </Text>
            <View className='flex flex-col items-center justify-between my-6 flex-wrap '>
              <View className=' w-full flex flex-row items-center justify-between'>
                <TouchableOpacity onPress={() => setGroup('O')} className='relative   flex items-center justify-center'>
                  <Ionicons name="water" size={50} color="#800000" />
                  <Text className=' absolute text-center  text-white text-[13px] font-medium'>O</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGroup('A+')} className='relative   flex items-center justify-center'>
                  <Ionicons name="water" size={50} color="#800000" />
                  <Text className=' absolute text-center  text-white text-[13px] font-medium'>A+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGroup('B+')} className='relative   flex items-center justify-center'>
                  <Ionicons name="water" size={50} color="#800000" />
                  <Text className=' absolute text-center  text-white text-[13px] font-medium'>B+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGroup('AB')} className='relative   flex items-center justify-center'>
                  <Ionicons name="water" size={50} color="#800000" />
                  <Text className=' absolute text-center  text-white text-[13px] font-medium'>AB</Text>
                </TouchableOpacity>
              </View>
              <View className=' w-full flex flex-row items-center justify-between mt-6 mb-4 flex-wrap'>
                <TouchableOpacity onPress={() => setGroup('O-')} className='relative   flex items-center justify-center'>
                  <Ionicons name="water" size={50} color="#800000" />
                  <Text className=' absolute text-center  text-white text-[13px] font-medium'>O-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGroup('B-')} className='relative   flex items-center justify-center'>
                  <Ionicons name="water" size={50} color="#800000" />
                  <Text className=' absolute text-center  text-white text-[13px] font-medium'>B-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGroup('A-')} className='relative   flex items-center justify-center'>
                  <Ionicons name="water" size={50} color="#800000" />
                  <Text className=' absolute text-center  text-white text-[13px] font-medium'>A-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGroup('A')} className='relative   flex items-center justify-center'>
                  <Ionicons name="water" size={50} color="#800000" />
                  <Text className=' absolute text-center  text-white text-[13px] font-medium'>A</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="w-full">
            {/* 
            <Text className="font-semibold text-lg mt-5">Blood Unit Needed</Text>
            <TextInput
              placeholder="Enter blood unit"
              keyboardType='numeric'
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            <Text className="font-semibold text-lg mt-4">Enter your Location</Text>
            <TextInput
              placeholder="Enter your location"
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            /> */}

            <View className='flex flex-row relative  justify-start items-center w-full'>
              <TextInput
                className='text-gray-700 px-10 border-2 border-gray-400 rounded-2xl w-full py-[11px] text-[13px] mb-4 font-medium'
                placeholder='Search donor name'
                value={search}
                onChangeText={setSearch}
              >
 
              </TextInput>
              <Feather className=' absolute  left-3 top-[13px]' name="search" size={20} color="#9ca3af" />
            </View>

            <View className="">
              {filtered.map((donor) => (
                <View
                  key={donor.id}
                  className="flex flex-row items-center bg-white rounded-xl px-4 py-3 mb-4 border-2 border-gray-200"
                >
                  {/* Red Circle */}
                  <View className="w-[53px] h-[53px] bg-[#800000] rounded-full flex items-center justify-center">
                   
                  </View>

                  {/* Donor Details */}
                  <View className="flex-1 ml-4">
                    <Text className="font-semibold text-lg text-gray-800">
                      {donor.name}
                    </Text>
                    <Text className="text-gray-600 text-sm font-medium">
                      Location: {donor.location}
                    </Text>
 
                    <View className="flex flex-row w-full px-[1px] items-center gap-2">
                      <Text className=" text-gray-600 text-sm font-medium">Your Rating:</Text>
                      <View>{renderRatingStars(donor.rating)}</View>
                    </View>
                  </View>
                  <View className='relative   flex items-center justify-center  '>
                    <Ionicons name="water" size={50} color="#800000" />
                    <Text className=' absolute text-white text-[13px] font-medium '>{donor.bloodGroup}</Text>
                  </View>
                </View>
              ))}
            </View>

          </View>

 


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Find_Donor;
