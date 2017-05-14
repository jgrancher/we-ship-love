/**
 * Helper to get a specific size of an image based on its default source
 * @param  {String} source      The default source of the image
 * @param  {String} size        The size wanted. Can be: 'thumb', 'small', 'medium', 'large', etc.
 * @return {String}             The URL of the desired image: http://abc.com/image_large.jpg
 */
export const getResizedImageSource = (source, size = '1024x1024') => {
  if (!source) return null;

  // Split the original product image URL to get a smaller image from the API.
  const splitted = source.split('.');
  splitted[splitted.length - 2] = `${splitted[splitted.length - 2]}_${size}`;

  return splitted.join('.');
};

/**
 * Helper to test if a string is an email
 * @param  {String} string      The string to test
 * @return {Boolean}
 */
export const isEmail = string => /^[A-Z0-9._%+-]+@[A-Z0-9.-]{2,}\.[A-Z]{2,4}$/i.test(string);

/**
 * Helper to format a string: strip non numeric characters
 * @param  {String} [string=''] The string to format
 * @return {String}             The formatted string with only numbers
 */
export const formatNumeric = (string = '') => string.replace(/[^\d]/g, '');

/**
 * Helper to format a string: transform it to display spaces as for a credit cart input
 * @param  {String} [string=''] The string to format
 * @return {String}             The formatted string
 */
export const formatCreditCard = (string = '') =>
  string.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();

/**
 * Helper function to validate a required field
 * @param  {Mixed} value        The value to check
 * @return {String|undefined}   A message string if invalid, otherwise undefined
 */
export const validateRequired = value => (!value ? 'Ce champ est requis' : undefined);

/**
 * Helper function to validate an email field
 * @param  {Mixed} value        The value to check
 * @return {String|undefined}   A message string if invalid, otherwise undefined
 */
export const validateEmail = value => (value && !isEmail(value)
  ? 'Adresse email invalide'
  : undefined
);

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
