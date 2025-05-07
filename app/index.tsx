import { View, Image, StatusBar } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Link } from 'expo-router'
const Index = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`} >
      <Link href={'/onboard1'}>
        <Image source={require('../assets/images/splash.png')}  />
        </Link>
        <StatusBar/>
    </View>
  )
}

export default Index