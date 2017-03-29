// Constants
import {
  SET_ORDER_PRODUCT,
  SET_ORDER_VARIANT,
  SET_ORDER_MESSAGE,
  SET_ORDER_DELIVERY,
  SET_ORDER_SHIPPING,
  SET_REMOTE_CHECKOUT,
  SET_REMOTE_CHECKOUT_FAIL,
  SET_REMOTE_CHECKOUT_SUCCESS,
  SET_REMOTE_CUSTOMER,
  SET_REMOTE_CUSTOMER_FAIL,
  SET_REMOTE_CUSTOMER_SUCCESS,
  SET_REMOTE_SHIPPING,
  SET_REMOTE_SHIPPING_FAIL,
  SET_REMOTE_SHIPPING_SUCCESS,
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

    case SET_ORDER_SHIPPING:
      return {
        ...state,
        shipping: action.payload.id,
      };

    case SET_REMOTE_CHECKOUT:
    case SET_REMOTE_CUSTOMER:
    case SET_REMOTE_SHIPPING:
      return {
        ...state,
        isFetching: true,
      };

    case SET_REMOTE_CHECKOUT_FAIL:
    case SET_REMOTE_CHECKOUT_SUCCESS:
    case SET_REMOTE_CUSTOMER_FAIL:
    case SET_REMOTE_CUSTOMER_SUCCESS:
    case SET_REMOTE_SHIPPING_FAIL:
    case SET_REMOTE_SHIPPING_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
