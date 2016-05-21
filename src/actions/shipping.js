import API from '../lib/API';

import {
    FETCH_SHIPPING,
    FETCH_SHIPPING_FAIL,
    FETCH_SHIPPING_SUCCESS,
} from '../data/constants';

/**
 * Fetch all the shipping options
 * @return {Promise}    The promise containing the request
 */
export function fetchShippingOptions() {
    return (dispatch, getState) => {
        if (getState().shipping.options.length) {
            return Promise.resolve();
        }

        dispatch({ type: FETCH_SHIPPING });

        return API.get('shipping_zones.json')
            .then((data) => {
                dispatch({ type: FETCH_SHIPPING_SUCCESS, data });
                return Promise.resolve(data);
            })
            .catch((error) => {
                dispatch({ type: FETCH_SHIPPING_FAIL, error });
                return Promise.reject(error.message);
            });
    };
}
