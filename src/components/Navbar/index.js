// Externals
import React, { PropTypes } from 'react';
import { Image } from 'react-native';
import NavigationBar from 'react-native-navbar';

// Styles
import {
  navbarStyle,
  statusBar,
  tintColor,
} from './styles';

// Images
import logo from './logo.png';

const propTypes = {
  leftButton: PropTypes.element.isRequired,
};

const Navbar = props => (
  <NavigationBar
    leftButton={props.leftButton}
    rightButton={<Image source={logo} />}
    statusBar={statusBar}
    style={navbarStyle}
    tintColor={tintColor}
  />
);

Navbar.propTypes = propTypes;

export default Navbar;
