import { View, Text ,Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      <button> go to login</button>
      <Link href={'/auth/login'} >
        <Text>Go</Text>
      </Link>
    </View>
  )
}

export default Index