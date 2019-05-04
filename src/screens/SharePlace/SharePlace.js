import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import PlaceInput from '../../components/Control/Control';

class SharePlaceScreen extends Component {
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
  
  placeAddedHandler = placeName => {
    this.props.onPlaceAdded(placeName);
  }

  render () {
    return (
      <View style={styles.shareContainer}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  shareContainer: {
    backgroundColor: '#e1f5fe',
    height: '100%',
    width: '100%'
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onPlaceAdded: placeName => dispatch(actions.addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);