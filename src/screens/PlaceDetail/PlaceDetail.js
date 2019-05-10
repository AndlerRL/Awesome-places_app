import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Platform, StyleSheet, Dimensions, Alert } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';

import Icon from 'react-native-vector-icons/Ionicons';

const trashIcon = Platform.select({
  ios: 'ios-trash',
  android: 'md-trash'
})

class PlaceDetail extends Component {
  static navigatorStyle = {
    navBarButtonColor: '#00e5ff',
    navBarBackgroundColor: '#006064',
    navBarTextColor: '#f5f5f5',
    screenBackgroundColor: '#e0f2f1',
    navBarBottomBackgroundColor: 'blue'
  }

  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateScreen);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.updateScreen)
  }

  updateScreen = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
    });
  }

  placeDeleteHandler = () => {
    Alert.alert(
      'Delete Place',
      'Do you want to delete this place?',
      [
        {
          text: 'Yes',
          onPress: () => {
            this.props.onDeletePlace(this.props.selectedPlace.key)
            this.props.navigator.pop({
              animated: true
            })
          },
          style: 'positive'
        },
        {
          text: 'No',
          onPress: () => null,
          style: 'cancel'
        }
      ],
      {
        cancelable: true,
        onDismiss: () => null
      }
    );
  }

  render () {
    let viewMode = {
      container: null,
      infoContainer: null,
      image: null
    };

    if (this.state.viewMode === 'portrait') {
      viewMode = {
        container: { ...ss.portraitContainer },
        infoContainer: { ...ss.portraitInfoContainer },
        image: { ...ss.portraitImage }
      }
    }

    if (this.state.viewMode === 'landscape') {
      viewMode = {
        container: { ...ss.landscapeContainer },
        infoContainer: { ...ss.landscapeInfoContainer },
        image: { ...ss.landscapeImage },
        placeContainer: { ...ss.placeContainer }
      }
    }

    return (
      <View style={viewMode.container}>
        <View style={[
          viewMode.image, {
            borderRightColor: '#2225',
            borderRightWidth: 1,
            borderBottomColor: '#2225',
            borderBottomWidth: 1,
            shadowColor: '#222',
            shadowOffset: {
              width: -3,
              height: 2
            },
            shadowOpacity: 0.5,
            shadowRadius: 6,
            borderRadius: 2
        }]}>
          <Image 
            source={this.props.selectedPlace.image}
            style={{
              width: '100%',
              height: Dimensions.get('window').height > 500 ? 219 : 249
            }} />
        </View>
        <View style={viewMode.infoContainer}>
          <View style={viewMode.placeContainer}>
            <Text
              style={ss.place}>
              {this.props.selectedPlace.name}
            </Text>
          </View>
          <View style={ss.btnContainer}>
            <Text style={ss.line}></Text>
            <View style={ss.btn}>
              <TouchableOpacity onPress={this.placeDeleteHandler}>
                <Icon size={36} name={trashIcon} color="#d50000" />
              </TouchableOpacity>
            </View>
            <Text style={ss.line}></Text>
          </View>
        </View>
      </View>
    );
  }
};

const ss = StyleSheet.create({
  portraitContainer: {
    marginBottom: 32,
    flex: 1
  },
  landscapeContainer: {
    marginBottom: 32,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    padding: 24
  },
  line: {
    fontWeight: '100',
    width: '33.333%',
    height: 0,
    borderWidth: 0.33,
    borderColor: '#222'
  },
  btn: {
    alignItems: 'center',
    width: '16.666%'
  },
  portraitImage: {
    width: '100%',
    height: 220
  },
  landscapeImage: {
    width: '60%',
    height: 250,
  },
  portraitInfoContainer: {
    width: '100%',
    padding: 24
  },
  landscapeInfoContainer: {
    width: '40%',
    padding: 24
  },
  placeContainer: {
    borderBottomColor: '#222',
    borderBottomWidth: 1
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