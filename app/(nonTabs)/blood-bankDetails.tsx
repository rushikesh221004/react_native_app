import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import { useFonts } from 'expo-font';

export default function BloodBankDetails() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 20.711622,
    longitude: 76.566132,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [fontsLoaded] = useFonts({
    SpecialElite: require('../../assets/fonts/SpecialElite-Regular.ttf'),
  });

  const router = useRouter();

  useEffect(() => {
    if (!fontsLoaded) {
      return; // Ensure the fonts are loaded before rendering
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="relative top-5 flex flex-row items-center justify-center px-5">
          <TouchableOpacity
            className="absolute left-4"
            onPress={() => router.push('../(tabs)/')}
          >
            <Ionicons name="chevron-back-outline" size={25} color="black" />
          </TouchableOpacity>
          <Text className="font-semibold text-2xl text-center">
            Blood Bank Details
          </Text>
        </View>

        {/* Main Form */}
        <View className="px-5 mt-12">
          <View className="bg-[#800000] rounded-xl w-full h-[150px] flex items-center justify-center mb-1">
            <Text
              className="text-center font-semibold text-2xl text-white"
              style={{ fontFamily: 'SpecialElite' }}
            >
              Dr. Sony Blood Bank Khamagon
            </Text>
          </View>

          <View className="flex flex-row items-center justify-between mt-2 mb-1">
            <Text className="text-[14px] font-medium px-1">Location</Text>
            <Text className="text-[12px]">Khamagon</Text>
          </View>
          <View className="flex flex-row items-center justify-between mt-2 mb-1">
            <Text className="text-[14px] font-medium px-1">Timing :</Text>
            <Text className="text-[12px]">09:00 AM To 09:00 PM</Text>
          </View>
          <View className="flex flex-row items-center justify-between mt-2 mb-1">
            <Text className="text-[14px] font-medium px-1">Phone Number:</Text>
            <Text className="text-[12px]">9579074013</Text>
          </View>
          <View className="flex flex-row items-center justify-between mt-2 mb-1">
            <Text className="text-[14px] font-medium px-1">Emergency Contact :</Text>
            <Text className="text-[12px]">2536456589</Text>
          </View>

         
          <View style={styles.container}>
            <MapView style={styles.map} region={mapRegion} showsUserLocation={true}>
              <Marker coordinate={mapRegion} title="Dr. Sony Blood Bank" />
            </MapView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 30,
  },
  map: {
    width: '100%',
    height: 300,
  },
});
