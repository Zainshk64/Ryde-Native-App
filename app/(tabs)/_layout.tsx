import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import tw from 'twrnc'
import homeic from '../../assets/icons/home.png'
import hisic from '../../assets/icons/list.png'
import chatic from '../../assets/icons/chat.png'
import profileic from '../../assets/icons/profile.png'

const TabIcon = ({source , tintColor = 'gray'})=>{
    return(
        <Image source={source} style={{
            width: 30,
            height: 30,
            tintColor: tintColor,
          }}  />
    )
}


const _layout = () => {

  return (
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: true,
      tabBarStyle: {
        position: 'absolute',
        bottom: 13,
        left: 16,
        right: 16,
        elevation: 4,
        height: 60,
        borderRadius: 40,
        paddingTop:6,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderTopWidth: 0,
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
    }}
  >
  
    <Tabs.Screen name='home' 
    options={{
        tabBarIcon:({focused})=>(
            <TabIcon source={homeic} tintColor={focused ? 'white': 'gray'}   />
        )
    }} />
      <Tabs.Screen name='history' 
    options={{
        tabBarIcon:({focused})=>(
            <TabIcon source={hisic} tintColor={focused ? 'white': 'gray'} />
        )
    }} />
      <Tabs.Screen name='chat' 
    options={{
        tabBarIcon:({focused})=>(
            <TabIcon source={chatic} tintColor={focused ? 'white': 'gray'}  />
        )
    }} />
      <Tabs.Screen name='profile' 
    options={{
        tabBarIcon:({focused})=>(
            <TabIcon source={profileic}  tintColor={focused ? 'white': 'gray'}/>
        )
    }} />

   </Tabs>
  )
}

export default _layout