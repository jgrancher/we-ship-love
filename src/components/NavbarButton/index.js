// Externals
import React, { PropTypes } from 'react';
import { Image } from 'react-native';

// Styles
import StyledButton from './styles';

const propTypes = {
  image: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
};

const NavbarButton = props => (
  <StyledButton
    activeOpacity={0.6}
    onPress={props.onPress}
  >
    <Image source={props.image} />
  </StyledButton>
);

NavbarButton.propTypes = propTypes;

export default NavbarButton;
