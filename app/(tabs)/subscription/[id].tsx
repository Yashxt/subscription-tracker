import React from 'react';
import { View, Text } from 'react-native';
import {Link, useLocalSearchParams} from "expo-router";

const Subscriptiondetails = () => {
  const { id } = useLocalSearchParams<{ id :string }>();
    return (
    <View>
      <Text>subscriptiondetails</Text>
        <Link href={'/'}>go back </Link>
    </View>
  );
};

export default Subscriptiondetails;