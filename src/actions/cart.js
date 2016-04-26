import {
    ADD_ITEM,
    SET_MESSAGE,
    SET_DELIVERY_ADDRESS,
} from '../data/constants';

/**
 * Add item to the cart
 * @param  {Object} item The item object to add to the cart
 * @return {Object}      The action created
 */
export const addItem = (item) => ({
    type: ADD_ITEM,
    item,
});

/**
 * Set a message for the order
 * @param  {String} message The message linked to the order
 * @return {Object}         The action created
 */
export const setMessage = (message) => ({
    type: SET_MESSAGE,
    message,
});

/**
 * Set the delivery address object
 * @param  {Object} address The address object containing all the adress fields
 * @return {Object}         The action created
 */
export const setDeliveryAddress = (address) => ({
    type: SET_DELIVERY_ADDRESS,
    address,
});
