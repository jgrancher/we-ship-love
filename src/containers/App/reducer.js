// Constants
import {
  RESET_ORDER,
  SET_ORDER_PRODUCT,
  SET_ORDER_VARIANT,
  SET_ORDER_MESSAGE,
  SET_ORDER_DELIVERY,
  SET_ORDER_SHIPPING,
  SET_ORDER_NOTE,
  ASYNC_CREATE_CHECKOUT,
  ASYNC_CREATE_CHECKOUT_FAIL,
  ASYNC_CREATE_CHECKOUT_SUCCESS,
  ASYNC_SET_CUSTOMER,
  ASYNC_SET_CUSTOMER_FAIL,
  ASYNC_SET_CUSTOMER_SUCCESS,
  ASYNC_SELECT_SHIPPING,
  ASYNC_SELECT_SHIPPING_FAIL,
  ASYNC_SELECT_SHIPPING_SUCCESS,
  ASYNC_COMPLETE_CHECKOUT,
  ASYNC_COMPLETE_CHECKOUT_FAIL,
  ASYNC_COMPLETE_CHECKOUT_SUCCESS,
} from './constants';

// Default state
const defaultState = {
  product: null,
  variant: null,
  message: null,
  delivery: {},
  shipping: null,
  note: null,
  prices: {
    items: 0,
    shipping: 0,
  },
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {

    case RESET_ORDER:
      return defaultState;

    case SET_ORDER_PRODUCT:
      return {
        ...state,
        product: action.payload.product_id,
      };

    case SET_ORDER_VARIANT:
      return {
        ...state,
        variant: action.payload.id,
        prices: {
          ...state.prices,
          items: Number(action.payload.price),
        },
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
        prices: {
          ...state.prices,
          shipping: Number(action.payload.price),
        },
      };

    case SET_ORDER_NOTE:
      return {
        ...state,
        note: action.payload,
      };

    case ASYNC_CREATE_CHECKOUT:
    case ASYNC_SET_CUSTOMER:
    case ASYNC_SELECT_SHIPPING:
    case ASYNC_COMPLETE_CHECKOUT:
      return {
        ...state,
        isFetching: true,
      };

    case ASYNC_CREATE_CHECKOUT_FAIL:
    case ASYNC_CREATE_CHECKOUT_SUCCESS:
    case ASYNC_SET_CUSTOMER_FAIL:
    case ASYNC_SET_CUSTOMER_SUCCESS:
    case ASYNC_SELECT_SHIPPING_FAIL:
    case ASYNC_SELECT_SHIPPING_SUCCESS:
    case ASYNC_COMPLETE_CHECKOUT_FAIL:
    case ASYNC_COMPLETE_CHECKOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
