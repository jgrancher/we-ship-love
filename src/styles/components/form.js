// Form styles

import { StyleSheet } from 'react-native';
import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';
import * as sizes from '../../config/sizes';

const styles = StyleSheet.create({
    container: {
        paddingTop: sizes.spaceNormal,
        paddingHorizontal: 60,
    },

    input: {
        backgroundColor: colors.lightest,
        borderWidth: 1,
        borderColor: colors.lightest,
        color: colors.grey,
        height: 48,
        paddingHorizontal: sizes.spaceSmall,
        fontSize: 16,
        textAlign: 'center',
    },

    inputError: {
        borderColor: colors.red,
    },

    messageContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        height: 371,
        justifyContent: 'center',
        marginTop: sizes.spaceNormal,
        paddingLeft: sizes.spaceSmall,
        paddingTop: sizes.spaceSmall,
        width: 331,
    },

    message: {
        color: colors.brownDark,
        fontFamily: fonts.raleway,
        fontSize: 20,
        height: 240,
        textAlign: 'center',
        width: 240,
    },

    messageImage: {
        left: 0,
        position: 'absolute',
        top: 0,
    },

    copyright: {
        color: colors.greyDark,
        fontFamily: fonts.source,
        fontSize: 14,
        fontStyle: 'italic',
        marginBottom: sizes.heightCTA,
        marginTop: sizes.spaceNormal,
        textAlign: 'center',
    },
});

export default styles;
