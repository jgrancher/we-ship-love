// Constants
import { API_DEFAULT_COUNTRY } from '../../data/constants';
import { SET_DELIVERY } from './constants';

// Default state
const defaultState = {
  delivery: {
    name: 'Jobs',
    firstname: 'Steve',
    address: '1 Infinite Loop',
    zipcode: '95014',
    city: 'Cupertino',
    email: 'steve@apple.com',
    phone: '0601020304',
    country: API_DEFAULT_COUNTRY,
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_DELIVERY:
      return {
        ...state,
        delivery: action.delivery,
      };

    default:
      return state;
  }
};
