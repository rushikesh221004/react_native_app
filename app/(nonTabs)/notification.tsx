import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";

interface NotificationItemProps {
  name: string;
  time: string;
  subtitle: string;
  showUnderline?: boolean;
}

const Notification = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
        <View className='relative top-5 flex flex-row items-center justify-center px-5 '>
        <View className=' absolute left-6 w-[30px] h-[30px] flex justify-center'>
              <TouchableOpacity 
                onPress={() => router.push('../(tabs)')}>
                <FontAwesome6 name="less-than" size={18} color="black"
                 />
            </TouchableOpacity>
              </View>
            <View><Text className='font-bold text-2xl text-center'>Notification</Text></View>
             
  
        </View>
      <ScrollView className="flex-1 pt-16">
        <View className="">
          <Text className="text-base px-5 py-[1px] font-medium text-white bg-[#800000]">
            Today
          </Text>
          <View className="mb-1" />
          <NotificationItem
            name="Om Murhe"
            time="9:45 AM"
            subtitle="Left  review"
          />
          <NotificationItem
            name="Vijay Hiwale"
            time="9:22 AM"
            subtitle="Tracked a journey map"
          />
          <NotificationItem
            name="Rushikesh manjare "
            time="9:12 AM"
            subtitle="Left   review"
            showUnderline={false}
          />
        </View>
        <View>
          <Text className="text-base px-2 font-medium bg-[#800000] text-white">
            Sunday
          </Text>
          <View className="border-b mb-1" />
          <NotificationItem
            name="Vaibhav Nimkarde "
            time="9:00 PM"
            subtitle="Left   review"
          />
          <NotificationItem
            name="Gaurav Khade"
            time="10:45 PM"
            subtitle="Left  review"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const NotificationItem: React.FC<NotificationItemProps> = ({
  name,
  time,
  subtitle,
  showUnderline = true,
}) => {
  return (
    <View className="mb-2">

      <View className="flex-row items-center justify-between p-2 rounded">
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://placehold.co/40x40" }}
            className="w-10 h-10 rounded-full mr-2"
          />
          <View className="flex-col">
            <Text className="font-medium text-lg">{name}</Text>
            <Text className="text-xs text-gray-500  ">{subtitle}</Text>
          </View>
        </View>
        <Text className="text-sm text-gray-500 font-medium">{time}</Text>
      </View>
      {showUnderline && <View className="h-[1px] bg-[#800000] mt-2" />}
    </View>
  );
};

export default Notification;
