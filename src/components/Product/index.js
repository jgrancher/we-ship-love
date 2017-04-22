// Externals
import React, { PropTypes } from 'react';

// Styles
import {
  StyledImage,
  height,
  width,
} from './styles';

class Product extends React.Component {

  static propTypes = {
    height: PropTypes.number,
    image: PropTypes.string,
    width: PropTypes.number,
  };

  static defaultProps = {
    height,
    image: null,
    width,
  };

  render() {
    if (!this.props.image) return null;

    return (
      <StyledImage
        height={this.props.height}
        resizeMode="contain"
        source={{ uri: this.props.image }}
        width={this.props.width}
      />
    );
  }

}

export default Product;
