import React from 'react';
import {  Text } from 'react-native';
import {styled } from "nativewind"
import {SafeAreaView as RnSafeAreaView} from "react-native-safe-area-context";
 const SafeAreaView =  styled(RnSafeAreaView)
const setting = () => {
  return (
    <SafeAreaView>
      <Text>setting hogyi bhayankaer</Text>
    </SafeAreaView>
  );
};

export default setting;