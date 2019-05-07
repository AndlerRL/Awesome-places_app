import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native';

import BtnIcon from '../../components/UI/Btn/BtnIcon';

const logout = Platform.select({
  ios: 'ios-log-out',
  android: 'md-log-out'
})

class SideDrawer extends Component {
  logoutHandler = () => {

  };

  render () {
    return (
      <View style={[
        styles.container,{ 
          width: Dimensions.get("window").width * 0.75
        }]}>
        <BtnIcon
          name={logout}
          size={32}
          color="#f5f5f5"
          textColor="#f5f5f5"
          backgroundColor="#00838f"
          fontWeight="200"
          fontSize={24}
          padding={16}
          style={{ borderRadius: 0 }}
          onPress={this.logoutHandler}>
          Logout
        </BtnIcon>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 88,
    backgroundColor: "#006064",
    borderRightWidth: 4,
    borderRightColor: "#00838f",
    flex: 1
  }
});

export default SideDrawer;