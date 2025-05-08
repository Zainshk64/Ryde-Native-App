import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const InputEdit = ({label, text}) => {
  return (
    <View style={tw`mb-5`} >
      <Text style={tw`font-medium`} >{label}</Text>
      <View style={tw`flex bg-gray-200 flex-row justify-between rounded-md mt-1 p-2 py-3`} >
        <Text>{text}</Text>
        <Image source={require('../assets/icons/edit.webp')} style={{width:20, height:20 }}  />
      </View>
    </View>
  )
}

export default InputEdit