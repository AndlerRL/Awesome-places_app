import * as actionType from './actionTypes';

export const addPlace = placeName => {
  return {
    type: actionType.ADD_PLACE,
    placeName: placeName
  };
}
export const deletePlace = key => {
  return {
    type: actionType.REMOVE_PLACE,
    placeKey: key
  }
}