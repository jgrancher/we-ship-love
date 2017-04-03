// API
import API from '../../utils/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

// Constants
import {
  FETCH_RATES,
  FETCH_RATES_FAIL,
  FETCH_RATES_SUCCESS,
} from './constants';

/**
 * Fetch all the shipping rates of the cart
 * @return {Promise}    The promise containing the request
 */
export default () =>
  (dispatch, getState) => {
    const rates = getState().rates.data;

    // If data is already existing, return it.
    if (rates.length) {
      return Promise.resolve(rates);
    }

    dispatch({ type: FETCH_RATES });

    return API.getShippingRates()
      .then(data => fetchSuccess(dispatch, FETCH_RATES_SUCCESS, data))
      .catch(error => fetchFail(dispatch, FETCH_RATES_FAIL, error));
  }
;
