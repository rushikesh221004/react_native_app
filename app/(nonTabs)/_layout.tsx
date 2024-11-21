import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
   <Stack 
   screenOptions={{
    headerStyle: { backgroundColor: "#f8f9fa" },
    headerTintColor: "#333",
    headerTitleAlign: "center",
    headerShown:false
    
  }}>
      <Stack.Screen name="chating" options={{title:"Chating"}}></Stack.Screen>
      <Stack.Screen name="notification" options={{title:"Notification"}}></Stack.Screen>
      <Stack.Screen name="blood-instruction" options={{title:"bloodInstruction"}}></Stack.Screen>
      <Stack.Screen name="blood-requestAvailable" options={{title:"blood-requestAvailable"}}></Stack.Screen>
      <Stack.Screen name="donor-details" options={{title:"Blood RequestAvailable"}}></Stack.Screen>
      <Stack.Screen name="blood-bankDetails" options={{title:"Blood bank details"}}></Stack.Screen>
    
   </Stack>
  )
}

export default Layout