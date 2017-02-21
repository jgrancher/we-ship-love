// Constants
import { FETCH_TIMEOUT } from '../data/constants';

/**
 * Timeout function to trigger Promise rejection after a specific time
 * @param  {Number} time        The maximum time in ms
 * @param  {Promise} promise    The promise to handle
 * @return {Promise}            The promise returned (either resolved or rejected by timeout)
 */
export const timeout = (promise, time = FETCH_TIMEOUT) => (
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Timeout')), time);
    promise.then(resolve, reject);
  })
);

/**
 * Helper function to know if the root objects in the store are fetching
 * @param  {Object} store   The store which contains the global app state
 * @return {Boolean}        Whether the store is fetching
 */
export const isStoreFetching = store => (
  Object.keys(store).some(key => store[key].isFetching === true)
);

/**
 * Formatting function of shipping options to get countries array
 * @param  {Array} options  The shipping options array initially formatted
 * @return {Array}          The countries array formatted
 */
export const getOptionsCountries = options => (
  options.map(o => o.countries).reduce((a, b) => a.concat(b), [])
);

/**
 * Helper to dispatch a succedeed fetch
 * @param  {Function} dispatch  The store dispatch function
 * @param  {String} type        The action type
 * @param  {Object} data        The data object
 * @return {Promise}
 */
export const fetchSuccess = (dispatch, type, data) => {
  dispatch({
    type,
    data,
  });

  return Promise.resolve(data);
};

/**
 * Helper to dispatch a failed fetch
 * @param  {Function} dispatch  The store dispatch function
 * @param  {String} type        The action type
 * @param  {Error} error        The error object
 * @return {Promise}
 */
export const fetchFail = (dispatch, type, error) => {
  dispatch({
    type,
    error,
  });

  // Warning
  console.warn(error); // eslint-disable-line no-console

  return Promise.reject(error.message);
};
