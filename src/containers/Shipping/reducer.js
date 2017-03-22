// Constants
import {
  FETCH_SHIPPING,
  FETCH_SHIPPING_FAIL,
  FETCH_SHIPPING_SUCCESS,
  SET_SHIPPING,
} from './constants';

// Default state
const defaultState = {
  isFetching: false,
  options: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_SHIPPING:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_SHIPPING_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_SHIPPING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        options: action.payload.shipping_zones,
      };

    case SET_SHIPPING:
      return {
        ...state,
        selected: action.shipping,
      };

    default:
      return state;
  }
};
