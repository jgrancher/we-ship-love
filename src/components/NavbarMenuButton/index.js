// Externals
import React, { PropTypes } from 'react';
import { Image } from 'react-native';

// Styles
import StyledButton from './styles';

// Images
import iconHamburger from './icon-hamburger.png';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};

const NavbarMenuButton = props => (
  <StyledButton
    activeOpacity={0.6}
    onPress={props.onPress}
  >
    <Image source={iconHamburger} />
  </StyledButton>
);

NavbarMenuButton.propTypes = propTypes;

export default NavbarMenuButton;
