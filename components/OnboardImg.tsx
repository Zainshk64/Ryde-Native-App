import { View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const OnboardImg = ({source}) => {
  return (
    <View>
        <Image source={source} style={tw`h-[300px] w-[350px]`}/>
    </View> 
  )
}

export default OnboardImg