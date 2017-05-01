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

    // Hack: We "enlarge" the image to hide the white part on each product image from the screen.
    const enlargedWidth = this.props.width / 0.85;

    return (
      <StyledImage
        height={this.props.height}
        resizeMode="cover"
        source={{ uri: this.props.image }}
        width={enlargedWidth}
      />
    );
  }

}

export default Product;
