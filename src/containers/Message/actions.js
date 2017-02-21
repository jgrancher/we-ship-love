// Constants
import { SET_MESSAGE } from './constants';

/**
 * Set a message for the order
 * @param  {String} message The message linked to the order
 * @return {Object}         The action created
 */
export const setMessage = message => ({
  type: SET_MESSAGE,
  message,
});
