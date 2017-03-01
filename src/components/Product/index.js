// Externals
import React from 'react';

// Utils
import { productShape } from '../../utils/shapes';

// Styles
import StyledImage from './styles';

const propTypes = {
  product: productShape.isRequired,
};

const Product = props => (
  <StyledImage source={{ uri: props.product.images[0].src }} />
);

Product.propTypes = propTypes;

export default Product;
