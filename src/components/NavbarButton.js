import React from 'react-native';
import styles from '../styles/components/navbar';

const { Image, TouchableOpacity } = React;
const { func, node } = React.PropTypes;

const NavbarButton = (props) => (
    <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.onPress}
        style={styles.navbarButton}
    >
        <Image source={props.image} />
    </TouchableOpacity>
);

NavbarButton.propTypes = {
    image: node,
    onPress: func.isRequired,
};

NavbarButton.defaultProps = {
    onPress: () => {},
};

export default NavbarButton;
