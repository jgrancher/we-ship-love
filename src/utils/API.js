// Externals
import Config from 'react-native-config';
import Shopify from 'react-native-shopify';

// Configuration
const {
  SHOPIFY_DOMAIN,
  SHOPIFY_MOBILE_KEY,
} = Config;

Shopify.initialize(SHOPIFY_DOMAIN, SHOPIFY_MOBILE_KEY);

export default Shopify;
