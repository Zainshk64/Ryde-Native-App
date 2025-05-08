import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
const Rides = () => {
    return (
        <View style={tw`bg-gray-200 p-3 mt-5 mb-5 rounded-lg `} >
            <View style={tw`flex flex-row mb-3 items-center gap-4`} >

                <View>
                    <Image source={require('../assets/images/ride.png')} style={tw`h-20 w-30`} resizeMode='contain' />
                </View>
                <View style={tw``}>
                    <View style={tw`flex flex-row  mb-4 items-center gap-2`} >
                        <Image source={require('../assets/icons/to.png')} style={tw`h-5 w-5`} />
                        <Text>1202 ABC Rawalpindi.</Text>
                    </View>
                    <View style={tw`flex flex-row items-center gap-2`}>
                        <Image source={require('../assets/icons/pin.png')} style={tw`h-6 w-6`} resizeMode='contain' />
                        <Text>1202 ABC Saddar.</Text>
                    </View>
                </View>
            </View>
            <View style={tw`bg-white p-2`} >
                <View style={tw`bg-white py-2 border-b border-neutral-300 flex flex-row justify-between`}>

                    <Text style={tw`text-gray-500`} >Date & Time</Text>
                    <Text style={tw`font-semibold`}>09 May 2025 | 12:03AM</Text>
                </View>
                <View style={tw`bg-white py-2 border-b border-neutral-300 flex flex-row justify-between`}>

                    <Text style={tw`text-gray-500`} >Driver</Text>
                    <Text style={tw`font-semibold`}>Charlie</Text>
                </View>
                <View style={tw`bg-white py-2 border-b border-neutral-300 flex flex-row justify-between`}>

                    <Text style={tw`text-gray-500`} >Seat</Text>
                    <Text style={tw`font-semibold`}>4</Text>
                </View>
                <View style={tw`bg-white py-2 border-b border-neutral-300 flex flex-row justify-between`}>

                    <Text style={tw`text-gray-500`} >Payment</Text>
                    <Text style={tw`font-semibold text-green-500`}>Paid</Text>
                </View>
            </View>
        </View>
    )
}

export default Rides