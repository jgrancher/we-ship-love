// Products images
import balloonBlue from '../images/slider-blue.jpg';
import balloonMagenta from '../images/slider-magenta.jpg';
import balloonPink from '../images/slider-pink.jpg';
import balloonRed from '../images/slider-red.jpg';
import balloonWhite from '../images/slider-white.jpg';
import balloonYellow from '../images/slider-yellow.jpg';

// API - Hostname
export const API_HOSTNAME = 'mieuxquedesfleurs.myshopify.com';

// API - Products IDs & images
export const PRODUCTS = {
  1124110652: balloonRed,
  1516785796: balloonMagenta,
  4148472901: balloonPink,
  4148501445: balloonBlue,
  4148506117: balloonYellow,
  4148511237: balloonWhite,
};

// API - Pages
export const API_PAGE_ABOUT = 18738948;
export const API_PAGE_FAQ = 18739472;

// API - Shipping countries
export const API_DEFAULT_COUNTRY = 20489252; // France

// Redux actions - Products
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

// Redux actions - Shipping
export const FETCH_SHIPPING = 'FETCH_SHIPPING';
export const FETCH_SHIPPING_SUCCESS = 'FETCH_SHIPPING_SUCCESS';
export const FETCH_SHIPPING_FAIL = 'FETCH_SHIPPING_FAIL';

// Redux actions - Forms
export const ADD_ITEM = 'ADD_ITEM';
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_BILLING = 'SET_BILLING';
export const SET_DELIVERY = 'SET_DELIVERY';
export const SET_SHIPPING = 'SET_SHIPPING';

// Redux actions - Pages
export const FETCH_PAGES = 'FETCH_PAGES';
export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS';
export const FETCH_PAGES_FAIL = 'FETCH_PAGES_FAIL';

// Misc
export const FETCH_TIMEOUT = 15000; // Timeout to fetch, in ms.
