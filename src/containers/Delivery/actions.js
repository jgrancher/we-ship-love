// API
import API from '../../utils/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

// Constants
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_FAIL,
  FETCH_COUNTRIES_SUCCESS,
} from './constants';

/**
 * Fetch all the countries where the delivery is possible
 * @return {Promise}    The promise containing the request
 */
export default () =>
  (dispatch, getState) => {
    const countries = getState().countries.data;

    // If data is already existing, return it.
    if (countries.length) {
      return Promise.resolve(countries);
    }

    dispatch({ type: FETCH_COUNTRIES });

    return API.getCountries()
      .then(data => fetchSuccess(dispatch, FETCH_COUNTRIES_SUCCESS, data))
      .catch(error => fetchFail(dispatch, FETCH_COUNTRIES_FAIL, error));
  }
;
