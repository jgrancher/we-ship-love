// Swiper styles

import { StyleSheet } from 'react-native';
import * as sizes from '../../config/sizes';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        height: sizes.heightScene - sizes.heightCTA,
    },

    indicator: {
        flex: 1,
        marginBottom: sizes.heightCTA,
    },

    slide: {
        alignSelf: 'center',
        marginTop: 10,
    },
});

export default styles;
