// Externals
import React, { PropTypes } from 'react';

// Styles
import StyledImage from './styles';

// Shared
import {
  heightContent,
  widthWindow,
} from '../../shared/sizes';

class Product extends React.Component {

  static propTypes = {
    height: PropTypes.number,
    image: PropTypes.string,
    width: PropTypes.number,
  };

  static defaultProps = {
    height: heightContent,
    image: null,
    width: widthWindow,
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
