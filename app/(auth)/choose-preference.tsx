import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

const ChoosePreference = () => {
  const router = useRouter();
  return (
    <View>
      <View className="relative w-[100%] h-[130px] top-0 flex flex-col  items-center justify-center  text-center">
        <Svg
          height="300"
          width="100%"
          viewBox="0 0 1440 1100"
          style={{ position: "absolute", top: 0 }}
        >
          <Path
            fill="#800000"
            d="M0,450C240,650,480,250,720,450C960,650,1200,250,1440,450L1440,300L1440,0L0,0Z"
          />
        </Svg>
        <TouchableOpacity
          className=" absolute left-4 bottom-24"
          onPress={() => router.replace('./login')}
        >
          <FontAwesome6 name="less-than" size={18} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/(tabs)")}>
          <Text className="  text-white ml-[310px] mb-20 text-xl"> skip</Text>
        </TouchableOpacity>
      </View>

      <Text className="mt-32 font-medium text-[20px] mx-5 text-center">
        Choose one do you prefer?
      </Text>

      <View className="flex-row flex   items-center justify-evenly   mt-14 mx-7 ">
        <TouchableOpacity className="bg-white rounded-3xl shadow-xl shadow-gray-700 items-center justify-center w-36 h-36">
        
            <FontAwesome5 name="hand-holding-water" size={40} color="black" />
          
          <Text className="mt-2 text-lg font-medium">Need</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white rounded-3xl shadow-xl shadow-gray-700 items-center justify-center w-36 h-36">
          <View className="relative   flex   justify-center items-center">
            <SimpleLineIcons name="drop" size={40} color="black" />

            <Ionicons
              name="add"
              size={25}
              color="black"
              className="absolute top-[8px] right-[7px] font-bold"
            />
          </View>
          <Text className="mt-2 text-lg font-medium">Donor</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-[#800000]  text-center py-3 rounded-lg mt-24 mx-auto w-[350px]"
        onPress={() => router.push("/(tabs)")}
      >
        <Text className="text-white text-center text-[15px] ">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChoosePreference;