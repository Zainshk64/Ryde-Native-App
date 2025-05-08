// app/_layout.tsx
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import tw from 'twrnc';

export default function Layout() {
  return (
    <View style={tw`flex-1 bg-white`}>
      {/* <StatusBar style="light" backgroundColor="#000" /> */}
      <StatusBar style="dark" backgroundColor="#fff" />

      <Slot /> {/* Loads the current route's screen */}
    </View>
  );
}
