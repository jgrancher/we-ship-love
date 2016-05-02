// Application styles

import { StyleSheet } from 'react-native';
import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';
import * as sizes from '../../config/sizes';

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: colors.brownDark,
        flex: 1,
    },

    scene: {
        backgroundColor: colors.white,
        flex: 1,
    },

    content: {
        flex: 1,
        height: sizes.heightScene - sizes.heightCTA,
    },

    indicator: {
        flex: 1,
        marginBottom: sizes.heightCTA,
    },

    text: {
        color: colors.brownDark,
        fontFamily: fonts.source,
        fontSize: 16,
    },
});

export default styles;
