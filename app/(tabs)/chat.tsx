import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRouter } from 'expo-router'
const chat = () => {
  const route = useRouter();
  return (
    <View style={tw`flex-1 p-5  mt-15`} >
      <View style={tw`flex-row items-center justify-between`} >


        <Text style={tw`text-xl font-medium`} >Chat</Text>
        <Pressable onPress={() => route.push('/(tabs)/home')} >

          <Image source={require('../../assets/icons/out.png')} style={{ width: 30, height: 30 }} />
        </Pressable>
      </View>

      <View style={tw`flex flex-col justify-center  items-center gap-3 `}>
        <Image source={require('../../assets/images/message.png')} style={tw`h-50 w-80`} resizeMode='contain' />
        <Text style={tw`text-gray-600`} >No Chat Yet!</Text>
      </View>
    </View>
  )
}

export default chat