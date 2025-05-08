import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import OnBoardText from '@/components/OnBoardText'
import Buttons from '@/components/Buttons'
import { Link } from 'expo-router'
import InputFields from '@/components/InputFields'

const signup = () => {
  return (
    <ScrollView>

      <View style={tw`p-5 flex-1`} >
        <Image style={tw`fixed top-[-10px] left-[-20px] right-[-20px] w-[390px] h-[300px] `} source={require('../../assets/images/get-started.png')} />
        <View style={tw`text-center`} >

          <OnBoardText text={"Create An Account"}
          />
          <InputFields label={'Name'} done={false}  placeholder={"Enter your Name"} icon={require('../../assets/icons/person.png')} />
          <InputFields label={'EmaiL'} done={false}  placeholder={"Enter your Email"} icon={require('../../assets/icons/email.png')}/>
          <InputFields label={'Password'} done={true} placeholder={"Enter your Password"} icon={require('../../assets/icons/lock.png')}/>



        </View>
        <Buttons text={'Sign Up'} href={'/(auth)/signup'} />
        <View style={tw`flex px-10 text-black my-4 flex-row gap-4 items-center justify-center`} >
          <View style={tw`h-1 bg-gray-200 w-1/2 `} ></View>
          <View><Text>Or</Text></View>
          <View style={tw`h-1 bg-gray-200 w-1/2 `} ></View>

        </View>
        <View style={tw` flex flex-row border gap-2 rounded-full border-neutral-300 items-center justify-center py-2.5 `} >
          <View>

            <Image style={tw`h-7 w-7`} source={require('../../assets/icons/google.png')} />
          </View>
          <Text> Log in With Google</Text>
        </View>

        <View>
          <Text style={tw`text-center mt-2`} >Already Have An Account <Link style={tw`text-blue-500`} href={'/(auth)/signin'}>Sign In</Link></Text>
        </View>
      </View>
    </ScrollView>

  )
}

export default signup