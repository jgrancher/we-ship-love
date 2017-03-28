// Constants
import {
  SET_ORDER_PRODUCT,
  SET_ORDER_VARIANT,
  SET_ORDER_MESSAGE,
  SET_ORDER_DELIVERY,
  SET_REMOTE_CHECKOUT,
  SET_REMOTE_CHECKOUT_FAIL,
  SET_REMOTE_CHECKOUT_SUCCESS,
  SET_REMOTE_CUSTOMER,
  SET_REMOTE_CUSTOMER_FAIL,
  SET_REMOTE_CUSTOMER_SUCCESS,
} from './constants';

// Default state
const defaultState = {
  product: null,
  variant: null,
  message: null,
  delivery: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {

    case SET_ORDER_PRODUCT:
      return {
        ...state,
        product: action.payload.product_id,
      };

    case SET_ORDER_VARIANT:
      return {
        ...state,
        variant: action.payload.id,
      };

    case SET_ORDER_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case SET_ORDER_DELIVERY:
      return {
        ...state,
        delivery: action.payload,
      };

    case SET_REMOTE_CHECKOUT:
    case SET_REMOTE_CUSTOMER:
      return {
        ...state,
        isFetching: true,
      };

    case SET_REMOTE_CHECKOUT_FAIL:
    case SET_REMOTE_CHECKOUT_SUCCESS:
    case SET_REMOTE_CUSTOMER_FAIL:
    case SET_REMOTE_CUSTOMER_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
