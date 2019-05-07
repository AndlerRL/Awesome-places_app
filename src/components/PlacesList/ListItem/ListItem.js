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
          paddingHorizontal: 8,
          color: '#f5f5f5',
          fontSize: 16
        }}>
          {props.placeName}
        </MainText>
        <View style={{position: 'absolute', right: 24}}>
          <Icon name={icon} size={32} color="#004d40" />
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
    marginVertical: 4,
    paddingVertical: 6
  },
  listItem: {
    width: '83.333%',
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: '#00796b',
    flexDirection: 'row',
    color: '#f5f5f5',
    alignItems: 'center',
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2,
    borderEndWidth: 3,
    borderStartWidth: 3,
    borderStartColor: '#00695c',
    borderEndColor: '#00695c',
    shadowColor: '#222',
    shadowOffset: {
      width: -3,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 6
  },
  placeImg: {
    marginRight: 8,
    height: 64,
    width: 64
  }
});

export default listItem;