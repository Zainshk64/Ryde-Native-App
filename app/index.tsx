import { View, Image } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { Link, useRouter } from 'expo-router'
const Index = () => {
  const router = useRouter();
  useEffect(()=>{
    const timer = setTimeout(() => {
      router.push('/onboard1');
    }, 2500);

    return ()=> clearTimeout(timer);
  },[])
  return (
    <View style={tw`flex-1 justify-center items-center`} >
      <Link href={'/onboard1'}>
        <Image source={require('../assets/images/splash.png')}  />
        </Link>
    </View>
  )
}

export default Index