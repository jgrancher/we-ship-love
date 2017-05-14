// Externals
import React, { PropTypes } from 'react';
import {
  Animated,
  View,
} from 'react-native';

// Styles
import {
  getStyles,
  height as heightDefault,
  width as widthDefault,
} from './styles';

class ProgressiveImage extends React.Component {

  static propTypes = {
    height: PropTypes.number,
    source: PropTypes.string,
    thumbnailSource: PropTypes.string,
    width: PropTypes.number,
    widthRatio: PropTypes.number,
  };

  static defaultProps = {
    height: heightDefault,
    source: null,
    thumbnailSource: null,
    width: widthDefault,
    widthRatio: 1,
  };

  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 250,
    }).start();
  }

  onThumbnailLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 250,
    }).start();
  }

  render() {
    // Hack: We "enlarge" the image to hide the white part on each product image from the screen.
    const { width, widthRatio } = this.props;
    const w = (widthRatio < 1) ? width / widthRatio : width;

    // Styles
    const props = { height: this.props.height, width: w };
    const viewStyles = [{ position: 'relative' }, getStyles(props)];
    const imageStyles = [{ position: 'absolute' }, getStyles(props)];
    const thumbnailStyles = [{ opacity: this.state.opacity }, getStyles(props)];

    return (
      <View style={viewStyles}>
        {this.props.thumbnailSource && (
          <Animated.Image
            onLoad={this.onThumbnailLoad}
            resizeMode="cover"
            source={{ uri: this.props.thumbnailSource }}
            style={thumbnailStyles}
          />
        )}
        {this.props.source && (
          <Animated.Image
            onLoad={this.onLoad}
            resizeMode="cover"
            source={{ uri: this.props.source }}
            style={imageStyles}
          />
        )}
      </View>
    );
  }

}

export default ProgressiveImage;
