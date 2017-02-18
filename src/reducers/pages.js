// Constants
import {
  FETCH_PAGES,
  FETCH_PAGES_FAIL,
  FETCH_PAGES_SUCCESS,
} from '../data/constants';

const defaultState = {
  data: [],
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PAGES:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case FETCH_PAGES_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
      });

    case FETCH_PAGES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data.pages,
      });

    default:
      return state;
  }
};
