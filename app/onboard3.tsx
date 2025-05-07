import { View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SkipText from '@/components/SkipText'
import OnboardImg from '@/components/OnboardImg'
import OnBoardText from '@/components/OnBoardText'
import OnPara from '@/components/OnPara'
import Dotes from '@/components/Dotes'
import Buttons from '@/components/Buttons'

const onboard1 = () => {
  return (
    <View style={tw`p-5 flex-1 gap-5`} >
      <SkipText />
      <OnboardImg source={require('../assets/images/onboarding3.png')} />
      <View style={tw`text-center`} >

        <OnBoardText text={"Your Ride, Your Way. Let's get started!"} 
        />
           <OnPara para={'Enter your destination, sit back and let us take care of the rest.'} 
        />

      </View>
      <Dotes col3={'blue'} col1={'gray'} col2={'gray'} />
      <Buttons text={'Next'} href={'/onboard4'} />
    </View>
  )
}

export default onboard1