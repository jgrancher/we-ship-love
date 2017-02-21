// API
import API from '../../utils/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

// Data
import {
  FETCH_SHIPPING,
  FETCH_SHIPPING_FAIL,
  FETCH_SHIPPING_SUCCESS,
  SET_SHIPPING,
} from './constants';

/**
 * Fetch all the shipping options
 * @return {Promise}    The promise containing the request
 */
export const fetchShippingOptions = () =>
  (dispatch, getState) => {
    const shipping = getState().shipping.options;

    // If data is already existing, return it.
    if (shipping && shipping.length) {
      return Promise.resolve(shipping);
    }

    dispatch({ type: FETCH_SHIPPING });

    return API.get('shipping_zones.json')
      .then(data => fetchSuccess(dispatch, FETCH_SHIPPING_SUCCESS, data))
      .catch(error => fetchFail(dispatch, FETCH_SHIPPING_FAIL, error));
  }
;

/**
 * Set the shipping method
 * @param  {Object} shipping    The shipping object (name, price, etc.)
 * @return {Object}             The action created
 */
export const setShipping = shipping => ({
  type: SET_SHIPPING,
  shipping,
});
