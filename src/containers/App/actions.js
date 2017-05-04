// API
import API from '../../utils/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

// Constants
import {
  RESET_ORDER,
  SET_ORDER_MESSAGE,
  SET_ORDER_PRODUCT,
  SET_ORDER_VARIANT,
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

/**
 * Reset the order object
 * @return {Object}         The action object
 */
export const resetOrder = () => ({
  type: RESET_ORDER,
});

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
 * Set the order note (A shipping note for receiving the order on a specific day)
 * @param {String} note     The note string
 * @return {Object}         The action object
 */
export const setOrderNote = note => ({
  type: SET_ORDER_NOTE,
  payload: note,
});

/**
 * ASYNC ACTIONS THAT RETURN PROMISES
*/

/**
 * Async - Create a checkout object on the Shopify's API
 * @param {Object} variant  The product variant selected
 * @param {Number} quantity The variant's quantity selected
 * @return {Promise}        The action promise
 */
export const asyncCreateCheckout = (variant, quantity = 1) =>
  (dispatch) => {
    // Creating a cart object containing the product variant and its quantity
    const cart = [{
      quantity,
      variant,
    }];

    dispatch({
      type: ASYNC_CREATE_CHECKOUT,
      payload: cart,
    });

    return API.checkout(cart)
      .then(data => fetchSuccess(dispatch, ASYNC_CREATE_CHECKOUT_SUCCESS, data))
      .catch(error => fetchFail(dispatch, ASYNC_CREATE_CHECKOUT_FAIL, error));
  }
;

/**
 * Async - Set the remote checkout's customer information (addresses)
 * @param {String} email    The customer's email
 * @param {Object} address  The customer's address object
 * @return {Promise}        The action promise
 */
export const asyncSetCustomer = (email, address) =>
  (dispatch) => {
    dispatch({
      type: ASYNC_SET_CUSTOMER,
      payload: { email, address },
    });

    return API.setCustomerInformation(email, address)
      .then(data => fetchSuccess(dispatch, ASYNC_SET_CUSTOMER_SUCCESS, data))
      .catch(error => fetchFail(dispatch, ASYNC_SET_CUSTOMER_FAIL, error));
  }
;

/**
 * Async - Select the remote checkout's shipping method
 * @param {Number} index    The shipping method's index
 * @return {Promise}        The action promise
 */
export const asyncSelectShipping = index =>
  (dispatch) => {
    dispatch({
      type: ASYNC_SELECT_SHIPPING,
      payload: index,
    });

    return API.selectShippingRate(index)
      .then(data => fetchSuccess(dispatch, ASYNC_SELECT_SHIPPING_SUCCESS, data))
      .catch(error => fetchFail(dispatch, ASYNC_SELECT_SHIPPING_FAIL, error));
  }
;

/**
 * Async - Complete the remote checkout with a credit card object
 * @param {Object} card     The credit cart object
 * @return {Promise}        The action promise
 */
export const asyncCompleteCheckout = card =>
  (dispatch, getState) => {
    dispatch({
      type: ASYNC_COMPLETE_CHECKOUT,
      payload: card,
    });

    // Add the message and the note to the order once the checkout is completed.
    // This is because it's impossible to set a line_items property
    // when adding a variant to the cart from the Shopify Buy SDK!
    const { message, note } = getState().order;
    const orderWithNotes = id => ({
      order: {
        id,
        note,
        note_attributes: [{
          name: 'Message',
          value: message,
        }],
      },
    });

    return API.completeCheckout(card)
      .then(order => API.setOrder(order.id, orderWithNotes(order.id)))
      .then(data => fetchSuccess(dispatch, ASYNC_COMPLETE_CHECKOUT_SUCCESS, data))
      .catch(error => fetchFail(dispatch, ASYNC_COMPLETE_CHECKOUT_FAIL, error));
  }
;
