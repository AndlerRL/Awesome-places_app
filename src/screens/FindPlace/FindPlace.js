import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlacesList/PlacesList';
import Btn from '../../components/UI/Btn/Btn';

class FindPlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: '#00e5ff',
    navBarBackgroundColor: '#006064',
    navBarTextColor: '#f5f5f5',
    screenBackgroundColor: '#e0f2f1'
  }

  state = {
    placesLoaded: false,
    removeAnim: new Animated.Value(1),
    placesAnim: new Animated.Value(0)
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

  placesLoadedHandler = () => {
    Animated.timing(this.state.placesAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  placesSearchHandler = () => {
    Animated.timing(this.state.removeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.setState({
        placesLoaded: true
      });
      this.placesLoadedHandler();
    });
  }
  
  render () {
    let content = (
      <Animated.View 
        style={{
          opacity: this.state.removeAnim,
          transform: [
            {
              scale: this.state.removeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [15, 1]
              })
            }
          ]
        }}>
        <Btn
          onPress={this.placesSearchHandler}
          ss={ss.searchBtnText}
          color="#f5f5f5"
          borderColor="#ffff00">
          Show List
        </Btn>
      </Animated.View>
    );

    if (this.state.placesLoaded)
      content = (
        <Animated.View
          style={{
            opacity: this.state.placesAnim,
            transform: [
              {
                translateX: this.state.placesAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-120, 1]
                })
              }
            ]
          }}>
          <PlaceList 
            places={this.props.places}
            onItemSelected={this.itemSelectedHandler} />
        </Animated.View>
      )

    return (
      <View 
        style={
          this.state.placesLoaded ?
          ss.findContainer : ss.btnContainer}>
        { content }
      </View>
    );
  }
}

const ss = StyleSheet.create({
  findContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: 32,
    paddingHorizontal: 16
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#434343',
    padding: 32,
  }, 
  searchBtn: {
    borderColor: '#ffff00',
    borderWidth: 4,
    borderRadius: 50,
    padding: 20
  },
  searchBtnText: {
    fontWeight: '700',
    fontSize: 24
  }
})

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlaceScreen);