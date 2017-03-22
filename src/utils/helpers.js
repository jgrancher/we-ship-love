/**
 * Helper to handle a fetch response
 * @param  {Response} response  The Response object from the Fetch API
 * @return {Promise}            A Promise
 */
export const handleFetchResponse = (response) => {
  if (!response.ok) {
    return Promise.reject('An error occured. Please try again.');
  }

  return Promise.resolve(response.json());
};

/**
 * Helper to dispatch a succedeed fetch
 * @param  {Function} dispatch  The store dispatch function
 * @param  {String} type        The action type
 * @param  {Object} payload     The payload object
 * @return {Promise}
 */
export const fetchSuccess = (dispatch, type, payload) => {
  dispatch({
    type,
    payload,
  });

  return Promise.resolve(payload);
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
