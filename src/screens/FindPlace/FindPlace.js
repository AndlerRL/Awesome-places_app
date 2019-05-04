import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlacesList/PlacesList';

class FindPlaceScreen extends Component {
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
  
  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key
    });

    this.props.navigator.push({
      screen: "awesome-places.PlaceDetailScreen",
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    })
  }
  
  render () {
    return (
      <View style={styles.findContainer}>
        <PlaceList 
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  findContainer: {
    backgroundColor: '#e1f5fe',
    height: '100%',
    width: '100%'
  }
})

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlaceScreen);