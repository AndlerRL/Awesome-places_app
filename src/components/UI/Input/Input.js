import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';

const input = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[ss.input, props.style]} />
);

const inputs = Platform.select({
  ios: {
    paddingBottom: 8
  },
  android: {
    paddingBottom: 4
  }
});

const ss = StyleSheet.create({
  input: {
    width: '83.333%',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
    ...inputs
  }
})

export default input;