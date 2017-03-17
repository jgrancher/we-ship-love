// Constants
import {
  FETCH_SHOP,
  FETCH_SHOP_FAIL,
  FETCH_SHOP_SUCCESS,
  SET_ORDER_PRODUCT,
  SET_ORDER_MESSAGE,
} from './constants';

// Default state
const defaultShop = {
  data: {},
  isFetching: false,
};

// TODO: check if needed!
export const shop = (state = defaultShop, action) => {
  switch (action.type) {

    case FETCH_SHOP:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_SHOP_FAIL:
      return {
        ...state,
        isFetching: false,
      };

    case FETCH_SHOP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
      };

    default:
      return state;
  }
};

// Default state
const defaultOrder = {
  product: null,
  message: null,
};

export const order = (state = defaultOrder, action) => {
  switch (action.type) {

    case SET_ORDER_PRODUCT:
      return {
        ...state,
        product: action.payload.product_id,
      };

    case SET_ORDER_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};
