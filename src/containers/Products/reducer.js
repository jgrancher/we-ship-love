// Constants
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
} from './constants';

// Default state
const defaultState = {
  data: [],
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {

    case FETCH_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
