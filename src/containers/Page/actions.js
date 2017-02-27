// API
import API from '../../utils/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

// Constants
import {
  FETCH_PAGES,
  FETCH_PAGES_FAIL,
  FETCH_PAGES_SUCCESS,
} from './constants';

/**
 * Fetch all the pages
 * @return {Promise}    The promise containing the request
 */
export const fetchPages = () =>
  (dispatch, getState) => {
    const pages = getState().pages.data;

    // If data is already existing, return it.
    if (pages && pages.length) {
      return Promise.resolve(pages);
    }

    dispatch({ type: FETCH_PAGES });

    return API.get('pages.json')
      .then(data => fetchSuccess(dispatch, FETCH_PAGES_SUCCESS, data))
      .catch(error => fetchFail(dispatch, FETCH_PAGES_FAIL, error));
  }
;
