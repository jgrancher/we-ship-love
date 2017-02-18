// RefreshButton styles

import { StyleSheet } from 'react-native';
import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';
import * as sizes from '../../config/sizes';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: sizes.heightCTA,
  },

  text: {
    color: colors.red,
    fontFamily: fonts.source,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
