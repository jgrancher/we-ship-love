// Externals
import React, { PropTypes } from 'react';
import { Image } from 'react-native';

// Styles
import StyledButton from './styles';

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
      <StyledButton
        active={this.props.active}
        activeOpacity={0.6}
        onPress={this.onPress}
      >
        <Image source={this.props.active ? iconCardActive : iconCard} />
      </StyledButton>
    );
  }

}

export default CreditCardButton;
