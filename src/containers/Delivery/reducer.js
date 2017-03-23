// Constants
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAIL,
  FETCH_COUNTRIES_SUCCESS,
} from './constants';

// Default state
const defaultState = {
  data: [],
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {

    case FETCH_COUNTRIES:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_COUNTRIES_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.countries,
      };

    default:
      return state;
  }
};
