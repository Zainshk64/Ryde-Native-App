import { Button, Image, Pressable, ScrollView, Text, Touchable, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import OnBoardText from '@/components/OnBoardText'
import Buttons from '@/components/Buttons'
import { Link } from 'expo-router'
import InputFields from '@/components/InputFields'

const signin = () => {
    const [isPop, setIsPop] = useState(false);
    const toggle = () => {
        setIsPop(!isPop)
    }
    return (
        <ScrollView>

            <View style={tw`p-5 flex-1`} >
                <Image style={tw`fixed top-[-10px] left-[-20px] right-[-20px] w-[390px] h-[300px] `} source={require('../../assets/images/get-started.png')} />
                <View style={tw`text-center`} >

                    <OnBoardText text={"Sign In With Us!"}
                    />
                    <InputFields label={'EmaiL'} done={false} placeholder={"Enter your Email"} icon={require('../../assets/icons/email.png')} />
                    <InputFields label={'Password'} done={true} placeholder={"Enter your Password"} icon={require('../../assets/icons/lock.png')} />



                </View>
                <Pressable onPress={toggle} >

                    <Buttons text={'Sign In'} href={'/(auth)/signin'} />
                </Pressable>
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
                    <Text style={tw`text-center mt-2`} > Don't Have An Account?
                        <Link style={tw`text-blue-500`} href={'/(auth)/signup'}> Sign Up</Link></Text>
                </View>
                {/* popup */}
            </View>
            {
                isPop && <Popup isPop={isPop} setIsPop={setIsPop} />
            }

        </ScrollView>

    )
}

export default signin;


export const Popup = ({isPop, setIsPop}) => {
    return (
        <View style={tw`bg-[rgba(0,0,0,0.45)] absolute top-0 bottom-0 flex flex-col px-3 w-full justify-center items-center`} >
            <View style={tw`bg-white rounded-md flex  flex-col w-full justify-center items-center w-full py-10`} >
                <Image source={require('../../assets/icons/check.png')} style={tw`h-15 w-15 bg-green-500 mx-auto rounded-full`} />
                <Text style={tw`my-3 font-medium`} >Verified</Text>
                <Text style={tw`text-gray-500`} >You're Logged In Successfully</Text>
                <View style={tw`w-full px-5`} >
                    <Pressable onPress={()=>setIsPop(!isPop)} >

                <Buttons text={"Browse Home"} href={'/(tabs)/home'} />
                    </Pressable>
                </View>
            </View>
        </View>
    )

}