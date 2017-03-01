// Externals
import React, { PropTypes } from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

// Styles
import styles from '../../styles/components/navbar';

const propTypes = {
  image: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
};

const NavbarButton = props => (
  <TouchableOpacity
    activeOpacity={0.6}
    onPress={props.onPress}
    style={styles.navbarButton}
  >
    <Image source={props.image} />
  </TouchableOpacity>
);

NavbarButton.propTypes = propTypes;

export default NavbarButton;
