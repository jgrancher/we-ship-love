// API
import API from '../../utils/API';

// Constants
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
} from './constants';

// Utils
import { API_COLLECTION_MOBILE } from '../../utils/constants';
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

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

    return API.getProducts(1, API_COLLECTION_MOBILE)
      .then(data => fetchSuccess(dispatch, FETCH_PRODUCTS_SUCCESS, data))
      .catch(error => fetchFail(dispatch, FETCH_PRODUCTS_FAIL, error));
  }
;
