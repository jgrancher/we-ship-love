// API
import API from '../../utils/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

// Constants
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
} from './constants';

import {
  API_COLLECTION_FANTASIES,
  API_COLLECTION_HEARTS,
} from '../../data/constants';

/**
 * Fetch all the products (by collections)
 * @return {Promise}    The promise containing the request
 */
export default () =>
  (dispatch, getState) => {
    const products = getState().products.data;

    // If data is already existing, return it.
    if (products.length) {
      return Promise.resolve(products);
    }

    dispatch({ type: FETCH_PRODUCTS });

    return Promise.all([
      API.getProducts(1, API_COLLECTION_HEARTS),
      API.getProducts(1, API_COLLECTION_FANTASIES),
    ])
      .then(results => results.reduce((a, b) => a.concat(b)))
      .then(data => fetchSuccess(dispatch, FETCH_PRODUCTS_SUCCESS, data))
      .catch(error => fetchFail(dispatch, FETCH_PRODUCTS_FAIL, error));
  }
;
