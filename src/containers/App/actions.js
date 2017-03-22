// API
import API from '../../utils/API';

// Constants
import {
  SET_ORDER_MESSAGE,
  SET_ORDER_PRODUCT,
  SET_ORDER_VARIANT,
  SET_ORDER_DELIVERY,
} from './constants';

/**
 * Set the order product
 * @param {Object} product  The product object that has been selected
 * @return {Object}         The action object
 */
export const setOrderProduct = product => ({
  type: SET_ORDER_PRODUCT,
  payload: product,
});

/**
 * Set the order variant
 * @param {Object} variant  The product variant selected
 * @return {Promise}        The action promise
 */
export const setOrderVariant = variant =>
  (dispatch) => {
    // Creating a cart object containing the product variant and its quantity
    const cart = [{
      quantity: 1,
      variant,
    }];

    dispatch({
      type: SET_ORDER_VARIANT,
      payload: variant,
    });

    return API.checkout(cart);
  }
;

/**
 * Set the order message
 * @param {String} message  The message to send within the order
 * @return {Object}         The action object
 */
export const setOrderMessage = message => ({
  type: SET_ORDER_MESSAGE,
  payload: message,
});

/**
 * Set the order delivery
 * @param {Object} delivery The delivery object containing the whole address
 * @return {Object}         The action object
 */
export const setOrderDelivery = delivery => ({
  type: SET_ORDER_DELIVERY,
  payload: delivery,
});
