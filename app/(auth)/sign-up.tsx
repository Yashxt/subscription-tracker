import React from 'react';
import { View, Text } from 'react-native';
import {Link} from "expo-router";

const SignIn = () => {
    return (
        <View>
            <Text>Signup</Text>
            <Link href="/(auth)/sign-in">Sign In</Link>
        </View>
    );
};

export default SignIn;