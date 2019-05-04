import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import Icon from 'react-native-vector-icons/Ionicons';

const trashIcon = Platform.select({
  ios: 'ios-trash',
  android: 'md-trash'
})

class PlaceDetail extends Component {
  placeDeleteHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key)
    this.props.navigator.pop({
      animated: true
    })
  }

  render () {
    return (
      <View style={styles.Container}>
        <Image 
          source={this.props.selectedPlace.image}
          style={styles.image} />
        <Text
          style={styles.place}>
          {this.props.selectedPlace.name}
        </Text>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <TouchableOpacity onPress={this.placeDeleteHandler}>
              <Icon size={36} name={trashIcon} color="#d50000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  Container: {
    marginBottom: 32,
    flex: 1
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    marginTop: '100%',
    paddingTop: 32
  },
  btn: {
    textAlign: 'center',
    marginHorizontal: 24,
    position: 'absolute',
    bottom: 16,
    right: 16
  },
  image: {
    width: '100%',
    height: 200
  },
  place: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 16
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(actions.deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);