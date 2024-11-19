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
      <View className="">
        <TouchableOpacity
          className="absolute left-4 top-8"
          onPress={() => router.replace("/")}
        >
          <FontAwesome6 name="less-than" size={18} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-center mt-8">
          Notification
        </Text>
      </View>
      <ScrollView className="flex-1 pt-10">
        <View className="mb-4">
          <Text className="text-base px-2 font-medium text-white bg-[#800000]">
            Today
          </Text>
          <View className="mb-4" />
          <NotificationItem
            name="Om Murhe"
            time="9:45 AM"
            subtitle="Left a 5 review"
          />
          <NotificationItem
            name="Vijay Hiwalw"
            time="9:22 AM"
            subtitle="Tracked a journey map"
          />
          <NotificationItem
            name="Rushikesh manjare "
            time="9:12 AM"
            subtitle="Left a 5 review"
            showUnderline={false} 
          />
        </View>
        <View>
          <Text className="text-base px-2 font-medium bg-[#800000] text-white">
            Sunday
          </Text>
          <View className="border-b mb-4" />
          <NotificationItem
            name="VAibhav Nimkarde "
            time="9:00 PM"
            subtitle="Left a 5 review"
          />
          <NotificationItem
            name="Gaurav Khade"
            time="10:45 PM"
            subtitle="Left a 5 review"
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
      {/* Notification Content */}
      <View className="flex-row items-center justify-between p-2 rounded">
        <View className="flex-row items-center">
          <Image
            source={{ uri: "https://placehold.co/40x40" }}
            className="w-10 h-10 rounded-full mr-2"
          />
          <View className="flex-col">
            <Text className="font-medium">{name}</Text>
            <Text className="text-xs text-gray-500">{subtitle}</Text>
          </View>
        </View>
        <Text className="text-sm text-gray-500">{time}</Text>
      </View>
      {showUnderline && <View className="h-[1px] bg-[#800000] mt-2" />}
    </View>
  );
};

export default Notification;
