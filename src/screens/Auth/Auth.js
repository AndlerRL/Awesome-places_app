import React, { Component } from 'react';
import { View, ImageBackground, Button, StyleSheet, Platform } from 'react-native';

import cableBird from '../../assets/images/bird-on-cables.jpg'
import Input from '../../components/UI/Input/Input';
import TextHeader from '../../components/UI/HeaderText/HeaderText';
import Btn from '../../components/UI/Btn/Btn';
import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }
  
  render () {
    return (
      <ImageBackground
          resizeMode="cover"
          source={cableBird}
          style={ss.background}>
        <View style={ss.container}>
            <View style={ss.authContainer}>
              <TextHeader style={{position: 'absolute', top: 16}}>Welcome to Awesome Places !</TextHeader>
              <Btn
                color="#e8eaf6"
                borderColor="#3949ab"
                onPress={this.loginHandler}>
                Switch to Sign Up
              </Btn>
              <View style={ss.inputContainer}>
                <Input placeholder="E-mail address" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
              </View>
              <Btn
                color="#e8eaf6"
                borderColor="#3949ab"
                onPress={this.loginHandler}>
                Sign In
              </Btn>
            </View>
        </View>
      </ImageBackground>
    );
  }
}

const ss = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f5f5f53a'
  },
  authContainer: {
    paddingHorizontal: 16,
    paddingBottom: '16.666%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: "91.666%",
    backgroundColor: 'transparent'
  },
  background: {
    width: '100%',
    flex: 1,
    zIndex: 0
  },
  inputContainer: {
    width: '83.333%'
  }
})

export default AuthScreen;