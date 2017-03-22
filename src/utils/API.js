// Externals
import Config from 'react-native-config';
import Shopify from 'react-native-shopify';

// Helpers
import { handleFetchResponse } from './helpers';

// Configuration
const {
  SHOPIFY_DOMAIN,
  SHOPIFY_API_KEY,
  SHOPIFY_SDK_KEY,
  SHOPIFY_PASSWORD,
} = Config;

// Buy SDK object
Shopify.initialize(SHOPIFY_DOMAIN, SHOPIFY_SDK_KEY);

// API URL
const URL = `https://${SHOPIFY_API_KEY}:${SHOPIFY_PASSWORD}@${SHOPIFY_DOMAIN}/admin/`;

// API methods
const API = {
  getCountries: () => fetch(`${URL}/countries.json`).then(handleFetchResponse),
};

// Our internal API is the combination of the BUY SDK and some fetch methods
export default {
  ...Shopify,
  ...API,
};
