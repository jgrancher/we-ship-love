// Constants
import {
  API_DEFAULT_COUNTRY,
  ADD_ITEM,
  SET_MESSAGE,
  SET_BILLING,
  SET_DELIVERY,
  SET_SHIPPING,
} from '../data/constants';

const defaultState = {
  billing: {},
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
  shipping: {},
  items: [],
  message: 'Love you!',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {
        items: [...state.items, action.item],
      });

    case SET_MESSAGE:
      return Object.assign({}, state, {
        message: action.message,
      });

    case SET_BILLING:
      return Object.assign({}, state, {
        billingAddress: action.billing,
      });

    case SET_DELIVERY:
      return Object.assign({}, state, {
        delivery: action.delivery,
      });

    case SET_SHIPPING:
      return Object.assign({}, state, {
        shipping: action.shipping,
      });

    default:
      return state;
  }
};
