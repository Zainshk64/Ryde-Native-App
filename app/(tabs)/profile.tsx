import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import InputEdit from '@/components/InputEdit'
const profile = () => {
  return (
    <View style={tw`p-5 pt-10`} >
      <Text style={tw`text-lg font-medium uppercase`} >profile</Text>
      <Image source={require('../../assets/images/user3.jpg')} style={tw` h-35 w-35 rounded-full mx-auto`} resizeMode='cover'  />
      <InputEdit label={'First Name '} text={'Zain Sheikh'} />
      <InputEdit label={'Email'} text={'zshk599@gmail.com'} />
      <InputEdit label={'Phone'} text={'0310-5312929'} />
      <InputEdit label={'Address'} text={'Rawalpindi, Pakistan'} />



    </View>
  )
}

export default profile