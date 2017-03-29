// Constants
import {
  FETCH_RATES,
  FETCH_RATES_FAIL,
  FETCH_RATES_SUCCESS,
} from './constants';

// Default state
const defaultState = {
  data: [],
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {

    case FETCH_RATES:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_RATES_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_RATES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
