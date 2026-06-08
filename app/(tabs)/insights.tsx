import React from 'react';
import { View, Text } from 'react-native';
import {styled} from "nativewind"
import {SafeAreaView as RnSafeAreaView} from 'react-native-safe-area-context'
const SafeAreaView = styled(RnSafeAreaView);
const insights = () => {
  return (
    <SafeAreaView>
      <Text>insights</Text>
    </SafeAreaView>
  );
};

export default insights;