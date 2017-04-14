// Externals
import React, { PropTypes } from 'react';
import { Image } from 'react-native';

// Styles
import StyledButton from './styles';

// Images
import iconCard from './icon-card.png';
import iconCardActive from './icon-card-active.png';

const propTypes = {
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

const defaultProps = {
  active: false,
  onPress: null,
};

const CreditCardButton = props => (
  <StyledButton
    active={props.active}
    activeOpacity={0.6}
    onPress={props.onPress}
  >
    <Image source={props.active ? iconCardActive : iconCard} />
  </StyledButton>
);

CreditCardButton.propTypes = propTypes;
CreditCardButton.defaultProps = defaultProps;

export default CreditCardButton;
