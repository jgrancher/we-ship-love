// AccordionPicker styles

import { StyleSheet } from 'react-native';
import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';
import * as sizes from '../../config/sizes';

const styles = StyleSheet.create({
    picker: {
        backgroundColor: colors.lightest,
        borderTopColor: colors.greyLight,
        borderTopWidth: 0.5,
    },

    pickerItem: {
        color: colors.greyDark,
        fontFamily: fonts.source,
        fontSize: 16,
    },

    pickerTouchable: {
        backgroundColor: colors.lightest,
        borderWidth: 1,
        borderColor: colors.lightest,
        height: 48,
        paddingHorizontal: sizes.spaceSmall,
    },

    pickerTouchableContent: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },

    pickerText: {
        color: colors.grey,
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
    },

    pickerIcon: {
        marginTop: 2,
        transform: [{ rotate: '0deg' }],
    },

    pickerOpenIcon: {
        marginTop: 0,
        transform: [{ rotate: '180deg' }],
    },
});

export default styles;
