import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, Platform, Dimensions } from 'react-native';

import cableBird from '../../assets/images/bird-on-cables.jpg'
import Input from '../../components/UI/Input/Input';
import TextHeader from '../../components/UI/HeaderText/HeaderText';
import BtnIcon from '../../components/UI/Btn/BtnIcon';
import Btn from '../../components/UI/Btn/Btn';
import startMainTabs from '../MainTabs/startMainTabs';

const logIn = Platform.select({
  ios: 'ios-log-in',
  android: 'md-log-in'
})

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyles);
  }

  componentWillUnmount () {
    Dimensions.removeEventListener('change', this.updateStyles);
  }

  updateStyles = dims => {
    //console.log(dims)
    this.setState({
      viewMode: dims.window.height < 500 ? 'portrait' : 'landscape'
    });
  };


  loginHandler = () => {
    startMainTabs();
  }
  
  render () {
    let viewMode = {
      pwContainer: null,
      pwWrapper: null
    };

    if (this.state.viewMode === 'portrait') {
      viewMode = {
        pwContainer: { ...ss.portraitPasswordContainer },
        pwWrapper: { ...ss.portraitPasswordWrapper }
      }
    }

    if (this.state.viewMode === 'landscape') {
      viewMode = {
        pwContainer: { ...ss.landscapePasswordContainer },
        pwWrapper: { ...ss.landscapePasswordWrapper }
      }
    }

    return (
      <ImageBackground
          resizeMode="cover"
          source={cableBird}
          style={ss.background}>
        <View style={ss.container}>
            <View style={ss.authContainer}>
              { this.state.viewMode === 'portrait' ? 
                <TextHeader 
                  style={{position: 'absolute', top: 16}}>
                  Welcome to Awesome Places !
                </TextHeader> :
                null }
              <Btn
                color="#e8eaf6"
                borderColor="#9fa8da"
                onPress={this.loginHandler}>
                Switch to Sign Up
              </Btn>
              <View style={ss.inputContainer}>
                <Input
                  placeholderTextColor="#fff"
                  placeholder="E-mail address"
                  style={ss.inputAuth} />
                <View style={viewMode.pwContainer}>
                  <View style={viewMode.pwWrapper}>
                    <Input
                      placeholderTextColor="#fff"
                      placeholder="Password" 
                      style={ss.inputAuth} />
                  </View>
                  <View style={viewMode.pwWrapper}>
                    <Input 
                      placeholderTextColor="#fff"
                      placeholder="Confirm Password"
                      style={ss.inputAuth} />
                  </View>
                </View>
              </View>
              <BtnIcon
                color="#e8eaf6"
                textColor="#e8eaf6"
                borderColor="#9fa8da"
                borderWidth={2}
                padding={16}
                margin={8}
                name={logIn}
                size={32}
                fontWeight="600"
                fontSize={16}
                onPress={this.loginHandler}>
                Sign In
              </BtnIcon>
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
    backgroundColor: '#e0e0e070'
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
    width: '83.333%',
  },
  landscapePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  landscapePasswordWrapper: {
    width: '45%'
  }, 
  portraitPasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  portraitPasswordWrapper: {
    width: '100%'
  }, 
  inputAuth: {
    fontWeight: '500',
    borderBottomWidth: 2,
    height: 48,
    width: '100%',
    textAlign: 'center',
    marginVertical: 8,
  }
})

export default AuthScreen;