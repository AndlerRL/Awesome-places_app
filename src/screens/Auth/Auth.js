import React, { Component } from 'react';
import { View,
  ImageBackground,
  StyleSheet,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import cableBird from '../../assets/images/bird-on-cables.jpg'
import Input from '../../components/UI/Input/Input';
import TextHeader from '../../components/UI/HeaderText/HeaderText';
import BtnIcon from '../../components/UI/Btn/BtnIcon';
import Btn from '../../components/UI/Btn/Btn';
import startMainTabs from '../MainTabs/startMainTabs';
import validate from '../../utility/validation';
import * as actions from '../../store/actions';

const logIn = Platform.select({
  ios: 'ios-log-in',
  android: 'md-log-in'
})

class AuthScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: '#00e5ff',
    navBarBackgroundColor: '#006064',
    navBarTextColor: '#f5f5f5'
  }

  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape',
    authMode: 'login',
    controls: {
      email: {
        value: '',
        validationRules: {
          valid: false,
          isEmail: true,
        },
        touched: false
      },
      password: {
        value: '',
        validationRules: {
          valid: false,
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: '',
        validationRules: {
          valid: false,
          equalTo: 'password'
        },
        touched: false
      }
    }
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
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
    });
  };


  loginHandler = () => {
    const authData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    };
    this.props.onLogin(authData);

    startMainTabs();
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode == 'login' ? 'signup' : 'login'
      }
    })
  }

  updateInputState = (key, val) => {
    let connectedValue = {};
 
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }

    if (key === 'password') {
      connectedValue = {
        ...connectedValue,
        equalTo: val
      };
    }

    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            validationRules: {
              ...prevState.controls.confirmPassword.validationRules,
              valid: key === 'password' ? 
                validate(prevState.controls.confirmPassword.value,
                  prevState.controls.confirmPassword.validationRules,
                  connectedValue) :
                prevState.controls.confirmPassword.validationRules.valid
            }
          },
          [key]: {
            ...prevState.controls[key],
            value: val,
            validationRules: { 
              ...prevState.controls[key].validationRules,
              valid: validate(val, prevState.controls[key].validationRules, connectedValue),
            },
            touched: true
          },
        }
      }
    })
  } 
  
  render () {
    let viewMode = {
      pwContainer: null,
      pwWrapper: null
    };
    let cpControl = null; 

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

    if (this.state.authMode === 'signup') {
      cpControl = (
        <View style={viewMode.pwWrapper}>
          <Input 
            placeholderTextColor="#fff"
            placeholder="Confirm Password"
            secureTextEntry
            value={this.state.controls.confirmPassword.value}
            onChangeText={val => this.updateInputState('confirmPassword', val)}
            style={ss.inputAuth}
            valid={this.state.controls.confirmPassword.validationRules.valid}
            touched={this.state.controls.confirmPassword.touched} />
        </View>
      )
    }

    return (
      <ImageBackground
          resizeMode="cover"
          source={cableBird}
          style={ss.background}>
        <KeyboardAvoidingView behavior="padding" style={ss.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={ss.authContainer}>
              { this.state.viewMode === 'portrait' ? 
                <TextHeader 
                  style={{position: 'absolute', top: 16}}>
                  Welcome to Awesome Places !
                </TextHeader> :
                null }
              <Btn
                color="#f5f5f5"
                borderColor="#ffff00"
                onPress={this.switchAuthModeHandler}>
                Switch to { this.state.authMode === 'login' ? 'Sign Up' : 'Login' }
              </Btn>
                <View style={ss.inputContainer}>
                  <Input
                    placeholderTextColor="#fff"
                    placeholder="E-mail address"
                    keyboardType="email-address"
                    autoCapitalize={false}
                    autoCorrect={false}
                    value={this.state.controls.email.value}
                    onChangeText={val => this.updateInputState('email', val)}
                    style={ss.inputAuth}
                    valid={this.state.controls.email.validationRules.valid}
                    touched={this.state.controls.email.touched} />
                    <View style={viewMode.pwContainer}>
                    <View style={viewMode.pwWrapper}>
                      <Input
                        placeholderTextColor="#fff"
                        placeholder="Password"
                        secureTextEntry
                        value={this.state.controls.password.value}
                        onChangeText={val => this.updateInputState('password', val)}
                        style={ss.inputAuth}
                        valid={this.state.controls.password.validationRules.valid}
                        touched={this.state.controls.password.touched} />
                    </View>
                    { cpControl }
                  </View>
                </View>
              <BtnIcon
                color="#f5f5f5"
                textColor="#f5f5f5"
                borderColor="#ffff00"
                borderWidth={4}
                padding={16}
                margin={8}
                name={logIn}
                size={32}
                fontWeight="600"
                fontSize={16}
                onPress={this.loginHandler}
                disabled={
                  !this.state.controls.confirmPassword.validationRules.valid && this.state.authMode === 'signup' ||
                  !this.state.controls.email.validationRules.valid ||
                  !this.state.controls.password.validationRules.valid
                }>
                Sign In
              </BtnIcon>
            </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
    justifyContent: 'space-between'
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
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: authData => dispatch(actions.tryAuth(authData)),
  }
}

export default connect(null, mapDispatchToProps)(AuthScreen);