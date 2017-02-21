// Constants
import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
} from './constants';

// Default state
const defaultState = {
  data: [],
  isFetching: false,
  selected: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        selected: {
          ...state.selected,
          ...action.selected,
        },
      };

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
        data: action.data.variants,
      };

    default:
      return state;
  }
};
