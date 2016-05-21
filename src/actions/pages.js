import API from '../lib/API';

import {
    FETCH_PAGES,
    FETCH_PAGES_FAIL,
    FETCH_PAGES_SUCCESS,
} from '../data/constants';

/**
 * Fetch all the pages
 * @return {Promise}    The promise containing the request
 */
export function fetchPages() {
    return (dispatch, getState) => {
        if (getState().pages.data.length) {
            return Promise.resolve();
        }

        dispatch({ type: FETCH_PAGES });

        return API.get('pages.json')
            .then((data) => {
                dispatch({ type: FETCH_PAGES_SUCCESS, data });
                return Promise.resolve(data);
            })
            .catch((error) => {
                dispatch({ type: FETCH_PAGES_FAIL, error });
                return Promise.reject(error.message);
            });
    };
}
