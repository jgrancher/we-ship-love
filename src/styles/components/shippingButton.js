// ShippingButton styles

import { StyleSheet } from 'react-native';
import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';
// import * as sizes from '../../config/sizes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    lozenge: {
        backgroundColor: colors.green,
        height: 50,
        left: -20,
        position: 'absolute',
        top: 15,
        transform: [{ skewX: '-7deg' }, { skewY: '-7deg' }],
        width: 70,
    },

    priceContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        left: 0,
        position: 'absolute',
        top: 20,
    },

    price: {
        color: colors.white,
        fontFamily: fonts.raleway,
        fontSize: 27,
        fontWeight: 'bold',
    },

    priceCurrency: {
        fontSize: 15,
        paddingBottom: 3,
    },

    content: {
        alignItems: 'center',
        backgroundColor: colors.lightest,
        flex: 1,
        height: 50,
        justifyContent: 'center',
        paddingLeft: 50,
    },

    description: {
        fontFamily: fonts.source,
        fontSize: 16,
    },
});

export default styles;
