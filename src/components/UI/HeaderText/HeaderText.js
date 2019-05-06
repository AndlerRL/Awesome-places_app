import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const headingText = props => (
  <Text 
    {...props}
    style={[ss.textHeader, props.style]}>
    {props.children}
  </Text>
);

const header = Platform.select({
  ios: {
    fontSize: 58,
    padding: 16,
  },
  android: {
    fontSize: 36,
    padding: 8,
  }
})

const ss = StyleSheet.create({
  textHeader: {
    textAlign: 'center',
    fontFamily: 'Cookie-Regular',
    fontWeight: '400',
    fontStyle: 'italic',
    color: '#000',
    textShadowColor: '#bdbdbd',
    textShadowOffset: {
      width: 2,
      height: 1
    },
    textShadowRadius: 2,
    ...header
  }
})

export default headingText;