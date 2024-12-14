import React from 'react';
import { View, Text } from 'react-native';

import { fontFamily } from "@/styles/theme"

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontFamily: fontFamily.bold }}>Olar</Text>
    </View>
  )
}
