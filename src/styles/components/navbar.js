// Navbar styles

import { StyleSheet } from 'react-native';
import * as colors from '../../config/colors';
import * as sizes from '../../config/sizes';

const styles = StyleSheet.create({
    navbar: {
        borderColor: colors.turquoise,
        borderTopWidth: 5,
        height: sizes.navbarHeight,
    },

    navbarButton: {
        borderBottomWidth: 5,
        borderColor: colors.turquoise,
    },
});

export default styles;
