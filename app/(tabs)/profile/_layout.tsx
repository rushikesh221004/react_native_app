import { Stack } from 'expo-router'
import React from 'react'

const Profile_layout = () => {
  return (
      <Stack 
      screenOptions={{
        headerStyle: { backgroundColor: "#f8f9fa" },
        headerTintColor: "#333",
        headerTitleAlign: "center",
        headerShown:false
        
      }}>
      </Stack>
  )
}

export default Profile_layout