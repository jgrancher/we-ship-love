// API
import API from '../lib/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../lib/helpers';

// Data
import {
  FETCH_SHIPPING,
  FETCH_SHIPPING_FAIL,
  FETCH_SHIPPING_SUCCESS,
} from '../data/constants';

/**
 * Fetch all the shipping options
 * @return {Promise}    The promise containing the request
 */
export default () =>
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
