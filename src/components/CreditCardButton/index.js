// Externals
import React, { PropTypes } from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

// Images
import iconCard from './icon-card.png';
import iconCardActive from './icon-card-active.png';

class CreditCardButton extends React.Component {

  static propTypes = {
    active: PropTypes.bool,
    index: PropTypes.number.isRequired,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    active: false,
    onPress: null,
  };

  onPress = () => (this.props.onPress ? this.props.onPress(this.props.index) : null)

  render() {
    return (
      <TouchableOpacity
        active={this.props.active}
        activeOpacity={0.6}
        onPress={this.onPress}
      >
        <Image source={this.props.active ? iconCardActive : iconCard} />
      </TouchableOpacity>
    );
  }

}

export default CreditCardButton;
