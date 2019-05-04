import React, { Component } from 'react';
import { View, Image, TextInput, Text, Button, StyleSheet, Platform } from 'react-native';
import cableBird from '../../assets/images/bird-on-cables.jpg'

import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Image
            resizeMode="cover"
            source={cableBird}
            style={styles.background} />
        <View style={styles.authContainer}>
          <Text style={styles.title}>Welcome to Awesome Places!</Text>
          <TextInput placeholder="username" />
          <TextInput placeholder="password" />
          <Button title="Login" onPress={this.loginHandler} />
        </View>
      </View>
    );
  }
}

const title = Platform.select({
  ios: {
    fontSize: 42,
    padding: 16,
    textAlign: 'center',
    fontFamily: 'Cookie-Regular',
    fontWeight: '400',
    fontStyle: 'italic'
  },
  android: {
    fontSize: 20,
    padding: 8,
    textAlign: 'center',
    fontFamily: 'Cookie-Regular',
    fontWeight: '400',
    fontStyle: 'italic'
  }
})

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  authContainer: {
    padding: 4,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 200,
    backgroundColor: '#f5f5f5',
    marginVertical: 50,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  background: {
    alignContent: 'center',
    height: '100%',
    width: '100%',
    opacity: 0.7,
    backgroundColor: '#03a9f49a',
    zIndex: 0
  },
  title: {
    ...title
  }
})

export default AuthScreen;