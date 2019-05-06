import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';

import MainText from '../../UI/MainText/MainText';

import Icon from 'react-native-vector-icons/Ionicons';

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.list}>
      <View style={styles.listItem}>
        <Image
          style={styles.placeImg}
          resizeMode="cover"
          source={props.placeImg} />
        <MainText style={{
          paddingHorizontal: 8
        }}>
          {props.placeName}
        </MainText>
        <View style={{position: 'absolute', right: 24}}>
          <Icon name={icon} size={32} color="#4caf50" />
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const icon = Platform.select({
  ios: 'ios-more',
  android: 'md-more'
})

const styles = StyleSheet.create({
  list: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 2,
    paddingVertical: 6
  },
  listItem: {
    width: '83.333%',
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: '#c8e6c9',
    flexDirection: 'row',
    color: '#212121',
    alignItems: 'center',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    borderEndWidth: 3,
    borderStartWidth: 3,
    borderStartColor: '#a5d6a7',
    borderEndColor: '#a5d6a7'
  },
  placeImg: {
    marginRight: 8,
    height: 55,
    width: 55
  }
});

export default listItem;