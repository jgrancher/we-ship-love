// Externals
import React, { PropTypes } from 'react';
import { Image } from 'react-native';

// Styles
import StyledButton from './styles';

// Images
import iconApplePay from './icon-apple-pay.png';
import iconApplePayActive from './icon-apple-pay-active.png';

const propTypes = {
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

const defaultProps = {
  active: false,
  onPress: null,
};

const ApplePayButton = props => (
  <StyledButton
    active={props.active}
    activeOpacity={0.6}
    onPress={props.onPress}
  >
    <Image source={props.active ? iconApplePayActive : iconApplePay} />
  </StyledButton>
);

ApplePayButton.propTypes = propTypes;
ApplePayButton.defaultProps = defaultProps;

export default ApplePayButton;
