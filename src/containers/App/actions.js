// API
import API from '../../utils/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

// Constants
import {
  FETCH_SHOP,
  FETCH_SHOP_FAIL,
  FETCH_SHOP_SUCCESS,
  SET_ORDER_MESSAGE,
  SET_ORDER_PRODUCT,
  SET_ORDER_DELIVERY,
} from './constants';

/**
 * Fetch the shop informations
 * @return {Promise}    The promise containing the request
 */
export const fetchShop = () =>
  (dispatch, getState) => {
    const shop = getState().shop.data;

    // If data is already existing, return it.
    if (shop && Object.keys(shop).length) {
      return Promise.resolve(shop);
    }

    dispatch({ type: FETCH_SHOP });

    return API.getShop()
      .then(data => fetchSuccess(dispatch, FETCH_SHOP_SUCCESS, data))
      .catch(error => fetchFail(dispatch, FETCH_SHOP_FAIL, error));
  }
;

/**
 * Set the order product
 * @param {Object} product  The product object that has been selected
 */
export const setOrderProduct = product => ({
  type: SET_ORDER_PRODUCT,
  payload: product,
});

/**
 * Set the order message
 * @param {String} message  The message to send within the order
 */
export const setOrderMessage = message => ({
  type: SET_ORDER_MESSAGE,
  payload: message,
});

/**
 * Set the order delivery
 * @param {Object} delivery  The delivery object containing the whole address
 */
export const setOrderDelivery = delivery => ({
  type: SET_ORDER_DELIVERY,
  payload: delivery,
});
