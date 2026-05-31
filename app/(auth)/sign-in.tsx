import React from 'react';
import { View, Text } from 'react-native';
import {Link} from "expo-router";
import { usePathname } from "expo-router";
const SignIn = () => {
    const pathname =usePathname();
    console.log("Current route:", pathname);
  return (
    <View>
      <Text>SignIn</Text>
        <Link href="/(auth)/sign-up">Create Account</Link>
    </View>
  );
};

export default SignIn;