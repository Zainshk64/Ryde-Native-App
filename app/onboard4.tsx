import { Image, ScrollView, ScrollViewBase, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import OnBoardText from '@/components/OnBoardText'
import OnPara from '@/components/OnPara'
import Buttons from '@/components/Buttons'
import { Link } from 'expo-router'

const onboard4 = () => {
  return (
    <ScrollView>

      <View style={tw`p-5 flex-1 gap-5`} >
        <Image style={tw`fixed top-[-10px] left-[-20px] right-[-20px]  w-[390px] h-[400px] `} source={require('../assets/images/get-started.png')} />
        <View style={tw`text-center`} >

          <OnBoardText text={"Let's get started!"}
          />
          <OnPara para={'SignUp or Log in to find out the best car for you'}
          />

        </View>
        <Buttons text={'Sign Up'} href={'/onboard4'} />
        <View style={tw`flex px-10 text-black flex-row gap-4 items-center justify-center`} >
          <View style={tw`h-1 bg-gray-200 w-1/2 `} ></View>
          <View><Text>Or</Text></View>
          <View style={tw`h-1 bg-gray-200 w-1/2 `} ></View>

        </View>
        <View style={tw` flex flex-row border gap-2 rounded-full border-neutral-300 items-center justify-center py-2.5 `} >
          <View>

            <Image style={tw`h-8 w-8`} source={require('../assets/icons/google.png')} />
          </View>
          <Text> Log in With Google</Text>
        </View>

        <View>
          <Text style={tw`text-center`} >Already Have An Account <Link style={tw`text-blue-500`} href={'/onboard4'}>Sign In</Link></Text>
        </View>
      </View>
    </ScrollView>

  )
}

export default onboard4