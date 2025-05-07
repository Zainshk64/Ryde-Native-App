import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const OnPara = ({ para }) => {
    return (
        <View>
            <Text style={tw`text-md text-gray-400 px-1 text-center`}  >{para}</Text>
        </View>
    )
}

export default OnPara