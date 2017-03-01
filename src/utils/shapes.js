import { PropTypes } from 'react';

// Children shape
export const childrenShape = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.arrayOf(PropTypes.element),
]);

// Styles shape
export const stylesShape = PropTypes.shape({
  height: PropTypes.number,
});

// Options shape
export const optionShape = PropTypes.shape({
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

// API - Product image shape
export const productImageShape = PropTypes.shape({
  created_at: PropTypes.string,
  id: PropTypes.number,
  position: PropTypes.number,
  product_id: PropTypes.number,
  src: PropTypes.string,
  updated_at: PropTypes.string,
  variants_id: PropTypes.arrayOf(PropTypes.number),
});

// API - Product option shape
export const productOptionShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  position: PropTypes.number,
  product_id: PropTypes.number,
});

// API - Variant option shape
export const variantOptionShape = PropTypes.shape({
  name: PropTypes.string,
  option_id: PropTypes.number,
  value: PropTypes.string,
});

// API - Variant shape
export const variantShape = PropTypes.shape({
  available: PropTypes.bool,
  grams: PropTypes.string,
  id: PropTypes.number,
  options: PropTypes.arrayOf(variantOptionShape),
  position: PropTypes.number,
  price: PropTypes.string,
  requires_shipping: PropTypes.bool,
  sku: PropTypes.string,
  taxable: PropTypes.bool,
  title: PropTypes.string,
});

// API - Product shape
export const productShape = PropTypes.shape({
  available: PropTypes.bool,
  body_html: PropTypes.string,
  created_at: PropTypes.string,
  handle: PropTypes.string,
  images: PropTypes.arrayOf(productImageShape),
  minimum_price: PropTypes.string,
  options: PropTypes.arrayOf(productOptionShape),
  product_id: PropTypes.number,
  product_type: PropTypes.string,
  published_at: PropTypes.string,
  tags: PropTypes.string,
  title: PropTypes.string,
  updated_at: PropTypes.string,
  variants: PropTypes.arrayOf(variantShape),
  vendor: PropTypes.string,
});
