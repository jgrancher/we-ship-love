// Externals
import Config from 'react-native-config';
import Shopify from 'react-native-shopify';

// Helpers
import { handleFetchResponse } from './helpers';

// Configuration
const {
  SHOPIFY_DOMAIN,
  SHOPIFY_API_KEY,
  SHOPIFY_BUY_SDK_KEY,
  SHOPIFY_API_PASSWORD,
} = Config;

// Buy SDK object
Shopify.initialize(SHOPIFY_DOMAIN, SHOPIFY_BUY_SDK_KEY);

// API URL
const URL = `https://${SHOPIFY_API_KEY}:${SHOPIFY_API_PASSWORD}@${SHOPIFY_DOMAIN}/admin/`;

// API helper
const setRequest = (method = 'POST', body = {}) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

// API methods
const API = {
  getCountries: () => fetch(`${URL}/countries.json`)
    .then(handleFetchResponse),

  getPages: () => fetch(`${URL}/pages.json`)
    .then(handleFetchResponse),

  setOrder: (id, order) => fetch(`${URL}/orders/${id}.json`, setRequest('PUT', order))
    .then(handleFetchResponse),
};

// Our internal API is the combination of the BUY SDK and some fetch methods
export default {
  ...Shopify,
  ...API,
};
