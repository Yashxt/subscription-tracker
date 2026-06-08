import React from 'react';
import { View, Text } from 'react-native';
import {styled} from "nativewind"
import {SafeAreaView as RnSafeAreaContext} from "react-native-safe-area-context"
 const SafeAreaView = styled(RnSafeAreaContext)
const Subscription = () => {
  return (
    <SafeAreaView>
      <Text>Subscription</Text>
    </SafeAreaView>
  );
};

export default Subscription;