import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

class SideDrawer extends Component {
  render () {
    return (
      <View style={[styles.container, { width: Dimensions.get("window").width * 0.75 }]}>
        <Text style={{
          color: '#f5f5f5',
          fontSize: 24,
          fontWeight: '200'}}>
          SideDrawer
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingHorizontal: 16,
    backgroundColor: "#006064",
    flex: 1
  }
});

export default SideDrawer;