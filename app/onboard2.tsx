import { View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SkipText from '@/components/SkipText'
import OnboardImg from '@/components/OnboardImg'
import OnBoardText from '@/components/OnBoardText'
import OnPara from '@/components/OnPara'
import Dotes from '@/components/Dotes'
import Buttons from '@/components/Buttons'

const onboard2 = () => {
  return (
    <View style={tw`p-5 flex-1 gap-5`} >
      <SkipText />
      <OnboardImg source={require('../assets/images/onboarding2.png')} />
      <View style={tw`text-center`} >

        <OnBoardText text={'The perfect ride is just a tab away'} 
        />
           <OnPara para={'Your journey begins with Ryde. Find your ideal ride effortlessly'} 
        />

      </View>
      <Dotes col2={'blue'} col1={'gray'} col3={'gray'} />
      <Buttons text={'Next'} href={'/onboard3'} />
    </View>
  )
}

export default onboard2