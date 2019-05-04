import React from 'react';
import { FlatList } from 'react-native';

import ListItem from './ListItem/ListItem';

const list = props => {
  return (
    <FlatList
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImg={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)} />
      )} />
  );
};

export default list;