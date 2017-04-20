import { PropTypes } from 'react';

// Children shape
export const childrenShape = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.string,
]);

// Styles shape
export const stylesShape = PropTypes.shape({
  height: PropTypes.number,
});

// Scene shape
export const sceneShape = PropTypes.shape({
  component: PropTypes.func.isRequired,
  props: PropTypes.object,
});

// Scene - Step props shape
export const stepShape = PropTypes.shape({
  number: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
});

// Route shape
export const routeShape = PropTypes.shape({
  icon: PropTypes.number.isRequired, // Webpack
  title: PropTypes.string.isRequired,
  scenes: PropTypes.arrayOf(sceneShape).isRequired,
});

// Options shape
export const optionShape = PropTypes.shape({
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

// Redux-form - Input shape
export const inputShape = PropTypes.shape({
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.any,
});

// API - Shipping rate shape
export const rateShape = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
});

// API - Country province shape
export const countryProvinceShape = PropTypes.shape({
  id: PropTypes.number,
  country_id: PropTypes.number,
  name: PropTypes.string,
  code: PropTypes.string,
  tax: PropTypes.number,
  tax_name: PropTypes.string,
  tax_type: PropTypes.string,
  shipping_zone_id: PropTypes.number,
  tax_percentage: PropTypes.number,
});

// API - Country shape
export const countryShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  tax: PropTypes.number,
  code: PropTypes.string,
  tax_name: PropTypes.string,
  provinces: PropTypes.arrayOf(countryProvinceShape),
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
