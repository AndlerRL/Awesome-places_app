import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

import Input from '../UI/Input/Input';
import BtnIcon from '../UI/Btn/BtnIcon';

const pin = Platform.select({
  ios: 'ios-pin',
  android: 'md-pin'
});

const controls = props => (
  <View style={ss.container}>
    <Input
      onChangeText={props.onChangeText}
      value={props.placeName}
      placeholder="Place Name"
      placeholderTextColor="#2229"
      style={ss.input} />
    <BtnIcon
      name={pin}
      color='#82b1ff'
      size={32}
      padding={16}
      margin={8}
      onPress={props.onPress}>
      Share a Place!
    </BtnIcon>
  </View>
);

const btn = Platform.select({
  ios: {
    marginTop: 16
  },
  android: {
    marginTop: 12
  }
});
const inputs = Platform.select({
  ios: {
    paddingBottom: 8
  },
  android: {
    paddingBottom: 4
  }
});
const container = Platform.select({
  ios: {
    marginVertical: 32
  },
  android: {
    marginTop: 8,
    marginBottom: 32
  }
});

const ss = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    ...container
  },
  input: {
    width: '83.333%',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
    ...inputs
  },
  btn: {
    ...btn,
    width: '16.666%',
    padding: 0,
    marginRight: 0,
    borderWidth: 0
  }
})

export default controls;