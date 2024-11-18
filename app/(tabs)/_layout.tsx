import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from '@expo/vector-icons/Entypo';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "index") {
            return <Entypo name="home" size={size} color={color} />
          } else if (route.name === "donor") {
            return (
              <FontAwesome5
                name="hand-holding-water"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "need") {
            return <Fontisto name="blood-drop" size={size} color={color} />;
          } else if (route.name === "profile") {
            return <FontAwesome name="user" size={size} color={color} />;
          }
        },
        tabBarStyle: {
          backgroundColor: "#fff", // Tab bar background color
          borderTopWidth: 2, // Border at the top of the tab bar
          borderTopColor: "#e5e5e5", // Border color
          paddingBottom: 10, // Padding at the bottom
          height: 65, // Height of the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 11, // Font size of tab labels
          fontWeight: "700", // Font weight of tab labels
        },
        tabBarIconStyle: {
          marginTop: 3,
          marginBottom:3 // Adjust icon spacing
        },
        tabBarActiveTintColor: "#b91c1c",
        tabBarInactiveTintColor: "#585c5a",
        headerShown:false
      })}
       
    >
      <Tabs.Screen   name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="donor" options={{ title: "Donors" }} />
      <Tabs.Screen name="need" options={{ title: "Need" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
