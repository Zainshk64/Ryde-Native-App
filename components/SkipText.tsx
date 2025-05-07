import { View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Link } from 'expo-router'

const SkipText = () => {
  return (
    <View style={tw`flex-row  mt-8 justify-end items-center`} > 
      <Link href={'/onboard4'} style={tw`text-lg font-semibold`} >Skip</Link>
    </View>
  )
}

export default SkipText