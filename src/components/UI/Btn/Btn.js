import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Text, View, StyleSheet, Platform } from 'react-native';

const btnWBck = props => {
  const content = (
    <View style={[ss.btn, {
      backgroundColor: props.backgroundColor,
      borderColor: props.borderColor  
    }]}>
      <Text style={[ss.btnText, {
        color: props.color
      }, props.ss]}>
        {props.children}
      </Text>
    </View>
  );

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        { content }
      </TouchableNativeFeedback>
    )
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      { content }
    </TouchableOpacity>
  )
};

const ss = StyleSheet.create({
  btn: {
    padding: 20,
    margin: 8,
    borderRadius: 50,
    borderWidth: 4,
  },
  btnText: {
    fontWeight: '600',
    fontSize: 16
  }
})

export default btnWBck;