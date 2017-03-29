// API
import API from '../../utils/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

// Constants
import {
  SET_ORDER_MESSAGE,
  SET_ORDER_PRODUCT,
  SET_ORDER_VARIANT,
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
 * @return {Object}         The action object
 */
export const setOrderVariant = variant => ({
  type: SET_ORDER_VARIANT,
  payload: variant,
});

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

/**
 * Set the order shipping rate
 * @param {Object} shipping The shipping rate object selected
 * @return {Object}         The action object
 */
export const setOrderShipping = shipping => ({
  type: SET_ORDER_SHIPPING,
  payload: shipping,
});

/**
 * Set (create) a checkout object on the Shopify's API
 * @param {Object} variant  The product variant selected
 * @param {Number} quantity The variant's quantity selected
 * @return {Promise}        The action promise
 */
export const setRemoteCheckout = (variant, quantity = 1) =>
  (dispatch) => {
    // Creating a cart object containing the product variant and its quantity
    const cart = [{
      quantity,
      variant,
    }];

    dispatch({
      type: SET_REMOTE_CHECKOUT,
      payload: cart,
    });

    return API.checkout(cart)
      .then(data => fetchSuccess(dispatch, SET_REMOTE_CHECKOUT_SUCCESS, data))
      .catch(error => fetchFail(dispatch, SET_REMOTE_CHECKOUT_FAIL, error));
  }
;

/**
 * Set the remote checkout's customer information (addresses)
 * @param {String} email    The customer's email
 * @param {Object} address  The customer's address object
 * @return {Promise}        The action promise
 */
export const setRemoteCustomer = (email, address) =>
  (dispatch) => {
    dispatch({
      type: SET_REMOTE_CUSTOMER,
      payload: { email, address },
    });

    return API.setCustomerInformation(email, address)
      .then(data => fetchSuccess(dispatch, SET_REMOTE_CUSTOMER_SUCCESS, data))
      .catch(error => fetchFail(dispatch, SET_REMOTE_CUSTOMER_FAIL, error));
  }
;

/**
 * Set the remote checkout's shipping method
 * @param {Number} index    The shipping method's index
 * @return {Promise}        The action promise
 */
export const setRemoteShipping = index =>
  (dispatch) => {
    dispatch({
      type: SET_REMOTE_SHIPPING,
      payload: index,
    });

    return API.selectShippingRate(index)
      .then(data => fetchSuccess(dispatch, SET_REMOTE_SHIPPING_SUCCESS, data))
      .catch(error => fetchFail(dispatch, SET_REMOTE_SHIPPING_FAIL, error));
  }
;
