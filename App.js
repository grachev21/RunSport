import React from 'react';
// Компоненты natve
import { View, StatusBar } from 'react-native';
import { HomeScreen } from './screens/Home';
import { FullPostScreen } from './screens/FullPost';


// Разметка ===================================================================
export default function App() {
  return (
    <View>
      {/* <HomeScreen/> */}
      <FullPostScreen />
      <StatusBar style="auto" />
    </View>
  );
}
