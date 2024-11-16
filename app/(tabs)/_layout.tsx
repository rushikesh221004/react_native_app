import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "donor") {
            iconName = "people";
          } else if (route.name === "need") {
            iconName = "add-circle";
          } else if (route.name === "profile") {
            iconName = "person";
          }

          return <Ionicons   size={size} color={color} />;
        },
        tabBarActiveTintColor: "#b91c1c",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="donor" options={{ title: "Donors" }} />
      <Tabs.Screen name="need" options={{ title: "Need" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
