import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import BtnIcon from '../UI/Btn/BtnIcon';

const locate = Platform.select({
  ios: 'ios-locate',
  android: 'md-locate'
});

const compass = Platform.select({
  ios: 'ios-compass',
  android: 'md-compass'
})

class Map extends Component {

  render () {

    return (
      <View style={ss.container}>
        <View style={ss.placeholder}>
          <Icon 
            name={compass}
            size={128}
            color='#4343433f' />
        </View>
        <BtnIcon
          name={locate}
          color='#82b1ff'
          size={32}
          padding={16}
          margin={8}
          textColor='#f5f5f5'
          onPress={() => alert('Locate Yourself!')}>
          Locate Me!
        </BtnIcon>
      </View>
    );
  }
};

const ss = StyleSheet.create({
  container: {
    width: '91.666%',
    alignItems: 'center',
    marginVertical: 32,
    paddingTop: 16,
    borderRadius: 8,
    backgroundColor: '#00796b',
    shadowColor: '#222',
    shadowOffset: {
      width: -3,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 6
  },
  placeholder: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#2222",
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    width: '91.666%',
    height: 180
  }
})

export default Map;