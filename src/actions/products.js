import API from '../lib/API';

import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_FAIL,
    FETCH_PRODUCTS_SUCCESS,
} from '../data/constants';

/**
 * Fetch all the products variants (for a specific product ID)
 * @return {Promise}    The promise containing the request
 */
export function fetchProducts() {
    return (dispatch, getState) => {
        // If data already exists, return a resolved promise
        if (getState().products.data.length) {
            return Promise.resolve();
        }

        dispatch({ type: FETCH_PRODUCTS });

        return API.get('products/410882840/variants.json')
            .then((data) => {
                dispatch({
                    type: FETCH_PRODUCTS_SUCCESS,
                    data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: FETCH_PRODUCTS_FAIL,
                    error,
                });
            });
    };
}
