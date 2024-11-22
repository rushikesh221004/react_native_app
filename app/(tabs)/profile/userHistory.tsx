import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const UserHistory = () => {
  const router = useRouter();

  const donors = [
    {
      id: 1,
      name: "Shashwata Chowdhury",
      location: "Labaid Hospital",
      donationDate: "20 February, 2022",
      rating: 5,
      bloodGroup: "B+",
    },
    {
      id: 2,
      name: "Fhamida Nupur",
      location: "Dhaka Medical College",
      donationDate: "11 January, 2022",
      rating: 4,
      bloodGroup: "A+",
    },
    {
      id: 3,
      name: "Sadman Hossain",
      location: "Labaid Hospital",
      donationDate: "08 January, 2022",
      rating: 5,
      bloodGroup: "B+",
    },
    {
      id: 4,
      name: "Sabrina Binte",
      location: "Square Hospital",
      donationDate: "08 January, 2022",
      rating: 4,
      bloodGroup: "O+",
    },
    {
      id: 5,
      name: "Zahid Khan",
      location: "Ibne Sina Hospital",
      donationDate: "08 January, 2022",
      rating: 5,
      bloodGroup: "B+",
    },
  ];

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View className="relative top-5 flex flex-row items-center justify-center px-5">
          <View className="absolute left-5 w-[30px] h-[30px] flex justify-center">
            <TouchableOpacity onPress={() => router.push("./")}>
              <Ionicons name="chevron-back-outline" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text className="font-semibold text-2xl text-center">History</Text>
          </View>
        </View>

        {/* Donor List */}
        <View className="px-5 mt-12">
          {donors.map((donor) => (
            <View
              key={donor.id}
              className="flex flex-row items-center bg-white shadow-md rounded-lg px-4 py-3  mb-4 border-2 border-gray-300"
            >
              {/* Red Circle */}
              <View className="w-[50px] h-[50px] bg-[#800000] rounded-full flex items-center justify-center">
                <Text className="text-white font-bold text-lg">
                  {donor.bloodGroup}
                </Text>
              </View>

              {/* Donor Details */}
              <View className="flex-1 ml-4">
                <Text className="font-bold text-lg text-gray-800">
                  {donor.name}
                </Text>
                <Text className="text-gray-600 text-sm font-medium">
                  Location: {donor.location}
                </Text>
                <Text className="text-gray-600 text-sm font-medium">
                  Donation Date: {donor.donationDate}
                </Text>
                {/* <View className="mt-1 flex "><Text>Your Rating:</Text>
                {renderRatingStars(donor.rating)}</View> */}
                <View className="flex flex-row w-full px-[1px] items-center gap-2">
                  <Text className=" text-gray-600 text-sm font-medium">Your Rating:</Text>
                  <View>{renderRatingStars(donor.rating)}</View>
                </View>
              </View>
              <View className='relative   flex items-center justify-center'>
                <Ionicons name="water" size={50} color="#800000" />
                <Text className=' absolute text-center  text-white text-[13px] font-medium '>{donor.bloodGroup}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserHistory;
