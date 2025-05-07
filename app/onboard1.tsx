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
      <OnboardImg source={require('../assets/images/onboarding1.png')} />
      <View style={tw`text-center`} >

        <OnBoardText text={'The Best car in your Hands with Ryde'} 
        />
           <OnPara para={'Discover the convenienece of finding your perfect ride with out Ryde App'} 
        />

      </View>
      <Dotes col1={'blue'} col2={'gray'} col3={'gray'} />
      <Buttons text={'Next'} href={'/onboard2'} />
    </View>
  )
}

export default onboard1