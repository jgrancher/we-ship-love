// Externals
import React, { PropTypes } from 'react';

// Styles
import {
  StyledImage,
  height as heightDefault,
  width as widthDefault,
} from './styles';

class Product extends React.Component {

  static propTypes = {
    height: PropTypes.number,
    image: PropTypes.string,
    width: PropTypes.number,
    widthRatio: PropTypes.number,
  };

  static defaultProps = {
    height: heightDefault,
    image: null,
    width: widthDefault,
    widthRatio: 1,
  };

  render() {
    if (!this.props.image) return null;

    // Hack: We "enlarge" the image to hide the white part on each product image from the screen.
    const { width, widthRatio } = this.props;
    const w = (widthRatio < 1) ? width / widthRatio : width;

    return (
      <StyledImage
        height={this.props.height}
        resizeMode="cover"
        source={{ uri: this.props.image }}
        width={w}
      />
    );
  }

}

export default Product;
