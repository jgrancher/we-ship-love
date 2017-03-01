// Application styles

import { StyleSheet } from 'react-native';
import * as colors from '../../config/colors';
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

  indicator: {
    flex: 1,
    marginBottom: sizes.heightCTA,
    marginTop: sizes.heightNavigationBar,
  },
});

export default styles;
