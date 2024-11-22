import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation, useRouter } from 'expo-router';

const Index = () => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="h-screen px-5 flex flex-col items-center justify-center">
          {/* Image Section */}
          <Image
          style={{width:320 , height:320}}
            className="w-[320px] h-[320px] mb-12"
            source={require('../assets/images/SignIn.png')}
            resizeMode="contain"
          />

          {/* Text Section */}
          <Text className="text-center text-2xl font-bold">Donate Blood</Text>
          <Text className="text-center text-[17px] font-medium mt-4 text-[#837D7D]">
            Your donation can save many lives. Make a difference.
          </Text>

          {/* Buttons Section */}
          <TouchableOpacity
            className="bg-[#800000] w-full text-center py-3 rounded-lg mt-20"
            onPress={() => router.push('/(auth)/signup')}
          >
            <Text className="text-white text-center text-[15px]">Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border-2 border-[#800000] w-full text-center py-3 rounded-lg mt-4"
            onPress={() => router.push('/(auth)')}
          >
            <Text className="text-[#800000] text-center font-medium text-[15px]">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
