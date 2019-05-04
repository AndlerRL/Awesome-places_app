import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const addIcon = Platform.select({
  ios: 'ios-add-circle-outline',
  android: 'md-add-circle-outline'
})

class Controls extends Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "")
      return;

    this.props.onPlaceAdded(this.state.placeName);
    this.setState({
      placeName: ""
    })
  }

  render () {
    return (
      <View style={styles.controls}>
        <TextInput
          onChangeText={this.placeNameChangedHandler}
          value={this.state.placeName}
          placeholder="An awesome place"
          style={styles.input} />
        <View style={styles.btn}>
          <TouchableOpacity onPress={this.placeSubmitHandler}>
            <Icon size={32} name={addIcon} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const inputs = Platform.select({
  ios: {
    paddingBottom: 8
  },
  android: {
    paddingBottom: 4
  }
});
const btn = Platform.select({
  ios: {
    width: '16.666%',
    alignItems: 'center'
  },
  android: {
    width: '16.666%',
    alignItems: 'center',
    marginTop: 12
  }
});
const controls = Platform.select({
  ios: {
    marginVertical: 32
  },
  android: {
    marginTop: 8,
    marginBottom: 32
  }
});

const styles = StyleSheet.create({
  controls: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    ...controls
  },
  input: {
    width: '83.333%',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
    ...inputs
  },
  btn: {
    ...btn
  }
})

export default Controls;