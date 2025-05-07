import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Dotes = ({ col1, col2, col3 }) => {
    return (
        <View style={tw`flex flex-row gap-3 justify-center mt-9`}>
            <View style={tw`h-2 w-9 bg-${col1}-300 rounded-full`} ></View>
            <View style={tw`h-2 w-9 bg-${col2}-300 rounded-full`} ></View>
            <View style={tw`h-2 w-9 bg-${col3}-300 rounded-full`} ></View>
        </View>
    )
}

export default Dotes