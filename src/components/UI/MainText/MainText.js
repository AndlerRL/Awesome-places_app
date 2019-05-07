import React from 'react';
import { Text, StyleSheet } from 'react-native';

const mainText = props => (
  <Text
    {...props}
    style={[ss.mainText, props.style]}>
    {props.children}
  </Text>
);

const ss = StyleSheet.create({
  mainText: {
    color: '#212121'
  }
})

export default mainText;