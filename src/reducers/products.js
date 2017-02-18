// Constants
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
} from '../data/constants';

const defaultState = {
  data: [],
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case FETCH_PRODUCTS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
      });

    case FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data.variants,
      });

    default:
      return state;
  }
};
