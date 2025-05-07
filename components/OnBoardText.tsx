import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const OnBoardText = ({text}) => {
  return (
    <View  >
      <Text style={tw`text-center text-3xl font-bold mt-10 mb-3`}  >{text}</Text>
    </View>
  )
}

export default OnBoardText