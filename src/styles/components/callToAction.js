// CallToAction styles

import { StyleSheet } from 'react-native';
import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';
import * as sizes from '../../config/sizes';

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    height: sizes.heightCTA,
    left: 0,
    position: 'absolute',
    width: sizes.widthWindow,
  },

  background: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    width: sizes.widthWindow,
  },

  content: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingTop: 30,
  },

  step: {
    color: colors.white,
    fontFamily: fonts.raleway,
    fontSize: 57,
    fontWeight: 'bold',
  },

  text: {
    color: colors.white,
    fontFamily: fonts.raleway,
    fontSize: 21,
    paddingTop: 15,
    textAlign: 'center',
  },

  textComplement: {
    fontSize: 15,
    paddingTop: 0,
  },

  arrow: {
    marginRight: 5,
    marginTop: 15,
  },
});

export default styles;
