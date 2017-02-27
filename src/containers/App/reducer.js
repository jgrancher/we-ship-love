// Constants
import {
  FETCH_SHOP,
  FETCH_SHOP_FAIL,
  FETCH_SHOP_SUCCESS,
} from './constants';

// Default state
const defaultState = {
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_SHOP:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_SHOP_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_SHOP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };

    default:
      return state;
  }
};
