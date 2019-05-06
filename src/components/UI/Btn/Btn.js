import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const btnWBck = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[ss.btn, {
      backgroundColor: props.backgroundColor,
      borderColor: props.borderColor  
    }]}>
      <Text style={[ss.btnText, {
        color: props.color
      }]}>
        {props.children}
      </Text>
    </View>
  </TouchableOpacity>
);

const ss = StyleSheet.create({
  btn: {
    padding: 16,
    margin: 8,
    borderRadius: 10,
    borderWidth: 3,
  },
  btnText: {
    fontWeight: '600',
    fontSize: 16
  }
})

export default btnWBck;