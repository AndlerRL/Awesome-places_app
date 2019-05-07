import React from 'react';
import {View, TouchableOpacity, TouchableNativeFeedback,Text, StyleSheet, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const btnIcon = props => {
  const content = (
    <View 
      style={[
        ss.btnContainer, {
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
          borderWidth: props.borderWidth,
          padding: props.padding,
          margin: props.margin
        },
        props.style ]}>
        <Text style={[
          ss.btnText, {
            color: props.textColor,
            fontWeight: props.fontWeight,
            fontSize: props.fontSize
          }]}>
          {props.children}  
        </Text>
        <Icon 
          size={props.size}
          name={props.name}
          color={props.color} />
    </View>
  );

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        { content }
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity onPress={props.onPress}>
      { content }
    </TouchableOpacity>
  )
};

const ss = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    margin: 8,
    borderRadius: 4,
    borderWidth: 3,
  },
  btnText: {
    fontWeight: '600',
    fontSize: 16,
    marginRight: 16
  }
})

export default btnIcon;