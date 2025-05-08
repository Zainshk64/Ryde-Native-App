import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Rides from '@/components/Rides'
const home = () => {
    return (
        <View style={tw`flex-1 p-5  mt-15`} >
            <View style={tw`flex-row py-4 items-center justify-between`} >


                <Text style={tw`text-xl font-medium`} >Welcome Back!</Text>

                <Image source={require('../../assets/icons/out.png')} style={{ width: 30, height: 30 }} />
            </View>
            <View style={tw`bg-gray-200 mb-5 flex flex-row gap-2 p-2 items-center rounded-lg`} >
                <Image source={require('../../assets/icons/search.png')} style={{ width: 30, height: 30 }}/>
                <TextInput placeholder='Where you want to go?' />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={tw`text-center font-medium italic my-3`}>Your Current Location</Text>
                    <Image source={require('../../assets/images/mapss.jpg')} style={tw`h-60 w-100`} resizeMode='cover' />
                    <Rides/>
                    <Rides/>
                    <Rides/>

                </View>
            </ScrollView>
        </View>
    )
}

export default home