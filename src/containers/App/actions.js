// API
import API from '../../utils/API';

// Helpers
import {
  fetchFail,
  fetchSuccess,
} from '../../utils/helpers';

// Constants
import {
  FETCH_SHOP,
  FETCH_SHOP_FAIL,
  FETCH_SHOP_SUCCESS,
} from './constants';

/**
 * Fetch the shop informations
 * @return {Promise}    The promise containing the request
 */
export const fetchShop = () =>
  (dispatch, getState) => {
    const shop = getState().shop.data;

    // If data is already existing, return it.
    if (shop && Object.keys(shop).length) {
      return Promise.resolve(shop);
    }

    dispatch({ type: FETCH_SHOP });

    return API.getShop()
      .then(data => fetchSuccess(dispatch, FETCH_SHOP_SUCCESS, data))
      .catch(error => fetchFail(dispatch, FETCH_SHOP_FAIL, error));
  }
;
