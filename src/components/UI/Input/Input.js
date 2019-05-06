import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const input = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[ss.input, props.style]} />
);

const ss = StyleSheet.create({
  input: {
    height: 48,
    width: '100%',
    textAlign: 'center',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#f5f5f5',
    borderRadius: 2,
    padding: 6
  }
})

export default input;