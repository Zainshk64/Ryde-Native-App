import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Buttons from './Buttons'
import tw from 'twrnc'
const Popup = ({isPop , setIsPop}) => {
  return (
    <View style={tw`bg-[rgba(0,0,0,0.45)] absolute top-0 bottom-0 flex flex-col px-3 w-full justify-center items-center`} >
            <View style={tw`bg-white rounded-md flex  flex-col w-full justify-center items-center w-full py-10`} >
                <Image source={require('../assets/icons/check.png')} style={tw`h-15 w-15 bg-green-500 mx-auto rounded-full`} />
                <Text style={tw`my-3 font-medium`} >Verified</Text>
                <Text style={tw`text-gray-500`} >You're Logged In Successfully</Text>
                <View style={tw`w-full px-5`} >
                    <Pressable onPress={() => setIsPop(!isPop)} >
                        <Buttons text={"Browse Home"} href={'/(tabs)/home'} />
                    </Pressable>
                </View>
            </View>
        </View>
  )
}

export default Popup