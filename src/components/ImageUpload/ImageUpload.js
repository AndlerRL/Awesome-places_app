import React from 'react';
import { View, Image, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import BtnIcon from '../UI/Btn/BtnIcon';
import previewImg from '../../assets/images/islets-of-granada-1.jpg';

const camera = Platform.select({
  ios: 'ios-camera',
  android: 'md-camera'
});
const image = Platform.select({
  ios: 'ios-image',
  android: 'md-image'
});

const imageUpload = props => (
  <View style={ss.container}>
    <View style={ss.placeholder}>
      {/* <Image 
        source={previewImg}
        style={ss.previewImg} /> */}
      <Icon 
        name={image}
        size={128}
        color='#4343433f' />
    </View>
    <BtnIcon
      name={camera}
      color='#82b1ff'
      size={32}
      padding={16}
      margin={8}
      textColor='#f5f5f5'
      onPress={() => alert('Select an Image!')}>
      Upload Image
    </BtnIcon>
  </View>
);

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
  },
  previewImg: {
    width: '100%',
    height: '100%'
  }
})

export default imageUpload;