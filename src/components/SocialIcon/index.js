// Externals
import React, { PropTypes } from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

class SocialIcon extends React.Component {

  static propTypes = {
    icon: PropTypes.number.isRequired, // Webpack
    onPress: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
  };

  onPress = () => {
    this.props.onPress(this.props.url);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <Image source={this.props.icon} />
      </TouchableOpacity>
    );
  }

}

export default SocialIcon;
