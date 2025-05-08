import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'


const InputFields = ({label , placeholder , icon , done}) => {
  return (
    <View style={tw`mb-4`} >
      <Text style={tw`font-medium mb-1`} >{label}</Text>
      <View style={tw`flex flex-row bg-gray-100 border p-2 items-center border-neutral-300 rounded-lg`} >
        <Image style={tw`h-6 w-6`} source={icon}
         />
        <TextInput  secureTextEntry={done} placeholder={placeholder} style={tw` p-2 rounded-r-full flex-1 w-full `}
        />
      </View>
    </View>
  )
}

export default InputFields