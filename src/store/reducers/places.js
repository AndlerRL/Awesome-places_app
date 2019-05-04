import * as actionTypes from '../actions/actionTypes';

const initState = {
  places: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: `place__${Math.floor(Math.random() * 999 + 99)}`,
          name: action.placeName,
          image: {
            uri: 'https://i.ytimg.com/vi/KBfUBoXzFHs/maxresdefault.jpg'
          }
        })
      };
    case actionTypes.REMOVE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey;
        })
      }
    default:
      return state;
  }
}

export default reducer;