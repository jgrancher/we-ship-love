// API
import API from '../../utils/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

// Data
import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_SUCCESS,
} from './constants';

/**
 * Fetch all the products variants (for a specific product ID)
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

    return API.get('products/410882840/variants.json')
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
