import { View, Text } from 'react-native'
import React from 'react'

const protectd = () => {
  return (
    <View>
      <Text style={{ fontFamily: "InterBold", fontSize: 40 }}>protected</Text>
      <Text style={{ fontFamily: "InterSemi", fontSize: 20 }}>Accessible only if you are Authenticated</Text>
    </View>
  )
}

export default protectd