import { View, Text, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import axios from 'axios'
const API_BASE = 'http://localhost:4000/api/v1'

const Need = () => {
  const router = useRouter();
  const [patientName, setPatientName] = useState('')
  const [bloodType, setBloodType] = useState('')
  const [age, setAge] = useState('')
  const [diseaseName, setDiseaseName] = useState('')
  const [location, setLocation] = useState('')
  const [contactNumber, setContactNumber] = useState('')

  const handleSubmit = async () => {
    if (!patientName || !bloodType || !age || !diseaseName || !location || !contactNumber) {
      Alert.alert('Error', 'Please fill all fields')
      return
    }
    try {
      const payload = { patientName, bloodType, age: Number(age), diseaseName, location, contactNumber }
      const res = await axios.post(`${API_BASE}/requests`, payload)
      if (res?.data) {
        Alert.alert('Success', 'Blood request submitted')
        router.push('../(nonTabs)/blood-requestAvailable')
      } else {
        Alert.alert('Error', 'Invalid response')
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || error?.message || 'Something went wrong'
      Alert.alert('Error', message)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        <View className='fixed top-5  flex flex-row items-center justify-between px-5 w-full'>
          <TouchableOpacity className='w-[30px] h-[30px]   flex justify-center'
            onPress={() => router.push('/')}>
           
            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </TouchableOpacity>
          <View><Text className='font-bold text-2xl'>Blood Needed</Text></View>
          <TouchableOpacity
            onPress={() => router.push('../(nonTabs)/notification')}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* Main Form */}
        <View className='px-5  mt-10'>


          <View className="w-full">
            <Text className="font-semibold text-lg mt-4">Patient name</Text>
            <TextInput
              placeholder="Enter patient name"
              value={patientName}
              onChangeText={setPatientName}
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            <Text className="font-semibold text-lg mt-4">Blood Type</Text>
            <TextInput
              placeholder="Select blood Type"
              value={bloodType}
              onChangeText={setBloodType}
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />
            <Text className="font-semibold text-lg mt-4">Age</Text>
            <TextInput
              keyboardType='numeric'
              placeholder="Enter patient age"
              value={age}
              onChangeText={setAge}
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />
            <Text className="font-semibold text-lg mt-4">Disease Name</Text>
            <TextInput
              placeholder="Enter disease name"
              value={diseaseName}
              onChangeText={setDiseaseName}
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />
            <Text className="font-semibold text-lg mt-4">Location</Text>
            <TextInput
              placeholder="Select location"
              value={location}
              onChangeText={setLocation}
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />

            <Text className="font-semibold text-lg mt-4">Contact Number</Text>
            <TextInput
              placeholder="Enter contact number"
              keyboardType='numeric'
              value={contactNumber}
              onChangeText={setContactNumber}
              className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
            />
          </View>

          <TouchableOpacity
            className="bg-[#800000] w-full text-center py-[12px] rounded-lg mt-10"
            onPress={handleSubmit}
          >
            <Text className="text-white text-center font-medium text-[15px]">Submit</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Need
