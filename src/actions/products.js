// API
import API from '../lib/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../lib/helpers';

// Data
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
} from '../data/constants';

/**
 * Fetch all the products variants (for a specific product ID)
 * @return {Promise}    The promise containing the request
 */
export default () =>
  (dispatch, getState) => {
    const products = getState().products.data;

    // If data is already existing, return it.
    if (products && products.length) {
      return Promise.resolve(products);
    }

    dispatch({ type: FETCH_PRODUCTS });

    return API.get('products/410882840/variants.json')
      .then(data => fetchSuccess(dispatch, FETCH_PRODUCTS_SUCCESS, data))
      .catch(error => fetchFail(dispatch, FETCH_PRODUCTS_FAIL, error));
  }
;
