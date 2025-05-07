import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import tw from 'twrnc'

const Buttons = ({text, href}) => {
  return (
    <View  >
      <Link  href={href}  style={tw` mt-10 w-full bg-blue-500 py-2.5 rounded-full text-center text-white text-lg`} >{text}</Link>
    </View>
  )
}

export default Buttons