// Externals
import React, { PropTypes } from 'react';
import { Image } from 'react-native';

// Styles
import StyledButton from './styles';

// Images
import iconBack from './icon-back.png';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};

const NavbarBackButton = props => (
  <StyledButton
    activeOpacity={0.6}
    onPress={props.onPress}
  >
    <Image source={iconBack} />
  </StyledButton>
);

NavbarBackButton.propTypes = propTypes;

export default NavbarBackButton;
