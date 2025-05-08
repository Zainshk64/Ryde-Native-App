import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Rides from '@/components/Rides';

const History = () => {
  return (
    <ScrollView
      style={tw`mt-15 `}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]} // Make header sticky
      contentContainerStyle={tw`p-5`}
    >
      {/* Sticky Header (Index 0) */}
      <View style={tw`bg-gray-100 flex flex-row items-center justify-between py-2`}>
        <Text style={tw`text-lg font-medium`}>Popular Car</Text>
        <View style={tw`flex flex-row items-center`}>
          <Text style={tw`font-medium text-blue-500`}>Ascending</Text>
          <Image
            source={require('../../assets/icons/arrow-down.png')}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </View>

      {/* Scrollable Items */}
      <Rides />
      <Rides />
      <Rides />
      <Rides />
      <Rides />
      <View style={tw`mb-20`} >

        <Rides />
      </View>

    </ScrollView>
  );
};

export default History;
