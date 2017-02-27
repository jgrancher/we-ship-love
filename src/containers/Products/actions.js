// API
import API from '../../utils/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

// Constants
import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
} from './constants';

import {
  API_COLLECTION_FANTASIES,
  API_COLLECTION_HEARTS,
  API_COLLECTION_PACKS,
} from '../../data/constants';

/**
 * Fetch all the products (by collections)
 * @return {Promise}    The promise containing the request
 */
export const fetchProducts = () =>
  (dispatch, getState) => {
    const products = getState().products.data;

    // If data is already existing, return it.
    if (products && products.length) {
      return Promise.resolve(products);
    }

    dispatch({ type: FETCH_PRODUCTS });

    return Promise.all([
      API.getProducts(1, API_COLLECTION_HEARTS),
      API.getProducts(1, API_COLLECTION_FANTASIES),
      API.getProducts(1, API_COLLECTION_PACKS),
    ])
      .then(results => results.reduce((a, b) => a.concat(b)))
      .then(data => fetchSuccess(dispatch, FETCH_PRODUCTS_SUCCESS, data))
      .catch(error => fetchFail(dispatch, FETCH_PRODUCTS_FAIL, error));
  }
;

/**
 * Add product to the cart
 * @param  {Object} item The item object to add to the cart
 * @return {Object}      The action created
 */
export const addToCart = (item, quantity = 1) => ({
  type: ADD_TO_CART,
  item,
  quantity,
});
