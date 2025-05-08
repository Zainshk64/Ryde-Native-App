import { View, Text, Image, ScrollView } from 'react-native'
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={tw`text-center font-medium italic mt-3`}>Your Current Location</Text>
                    <Rides/>
                    <Rides/>
                    <Rides/>

                </View>
            </ScrollView>
        </View>
    )
}

export default home