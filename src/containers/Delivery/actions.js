// Constants
import { SET_DELIVERY } from './constants';

/**
 * Set the delivery address object
 * @param  {Object} delivery    The delivery object containing all the address fields
 * @return {Object}             The action created
 */
export const setDelivery = delivery => ({
  type: SET_DELIVERY,
  delivery,
});
