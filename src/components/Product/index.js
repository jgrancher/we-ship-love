// Externals
import React, { PropTypes } from 'react';

// Styles
import StyledImage from './styles';

class Product extends React.Component {

  static propTypes = {
    image: PropTypes.string,
  };

  static defaultProps = {
    image: null,
  };

  render() {
    if (!this.props.image) return null;

    return (
      <StyledImage
        source={{ uri: this.props.image }}
        resizeMode="contain"
      />
    );
  }

}

export default Product;
