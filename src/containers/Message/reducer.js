// Constants
import { SET_MESSAGE } from './constants';

// Default state
const defaultState = '';

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return action.message;

    default:
      return state;
  }
};
