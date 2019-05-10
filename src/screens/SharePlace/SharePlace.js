import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import HeaderText from '../../components/UI/HeaderText/HeaderText';
import ImgUpload from '../../components/ImageUpload/ImageUpload';
import Map from '../../components/Map/Map';

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: '#00e5ff',
    navBarBackgroundColor: '#006064',
    navBarTextColor: '#f5f5f5',
    screenBackgroundColor: '#e0f2f1',
    navBarHideOnScroll: true
  }

  state = {
    placeName: ''
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onOnNavigatorEvent);
  }
  
  onOnNavigatorEvent = e => {
    if (e.type === "NavBarButtonPress") {
      if (e.id === "sideDrawerToggle")
      this.props.navigator.toggleDrawer({
        animated: true,
        side: "left"
      });
    }
  }
  
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };
  
  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== "") {
      this.props.onPlaceAdded(this.state.placeName);
      this.setState({
        placeName: ""
      })
    }
  }

  render () {
    return (
      <ScrollView>
        <View style={ss.shareContainer}>
          <HeaderText style={header}>
            Share a Place with us!
          </HeaderText>
          <ImgUpload />
          <Map />
          <PlaceInput
            onChangeText={this.placeNameChangedHandler}
            onPress={this.placeAddedHandler}
            placeName={this.state.placeName} />
        </View>
      </ScrollView>
    );
  }
};

const header = Platform.select({
  ios: {
    fontSize: 46
  },
  android: {
    fontSize: 32
  }
});
const inputs = Platform.select({
  ios: {
    paddingBottom: 8
  },
  android: {
    paddingBottom: 4
  }
});

const ss = StyleSheet.create({
  shareContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  input: {
    width: '83.333%',
    borderBottomColor: '#222',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
    ...inputs
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onPlaceAdded: placeName => dispatch(actions.addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);