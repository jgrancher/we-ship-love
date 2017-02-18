import {
  ADD_ITEM,
  SET_MESSAGE,
  SET_DELIVERY,
  SET_SHIPPING,
} from '../data/constants';

/**
 * Add item to the cart
 * @param  {Object} item The item object to add to the cart
 * @return {Object}      The action created
 */
export const addItem = item => ({
  type: ADD_ITEM,
  item,
});

/**
 * Set a message for the order
 * @param  {String} message The message linked to the order
 * @return {Object}         The action created
 */
export const setMessage = message => ({
  type: SET_MESSAGE,
  message,
});

/**
 * Set the delivery address object
 * @param  {Object} delivery    The delivery object containing all the address fields
 * @return {Object}             The action created
 */
export const setDelivery = delivery => ({
  type: SET_DELIVERY,
  delivery,
});

/**
 * Set the shipping method
 * @param  {Object} shipping    The shipping object (name, price, etc.)
 * @return {Object}             The action created
 */
export const setShipping = shipping => ({
  type: SET_SHIPPING,
  shipping,
});
