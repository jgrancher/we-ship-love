// ShippingButton styles

import { StyleSheet } from 'react-native';
import * as colors from '../../config/colors';
import * as fonts from '../../config/fonts';

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },

  lozenge: {
    backgroundColor: colors.grey,
    height: 50,
    left: -20,
    position: 'absolute',
    top: 15,
    transform: [{ skewX: '-7deg' }, { skewY: '-7deg' }],
    width: 70,
  },

  lozengeActive: {
    backgroundColor: colors.green,
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
    height: 50,
    justifyContent: 'center',
    paddingLeft: 50,
  },

  description: {
    color: colors.greyDark,
    fontFamily: fonts.source,
    fontSize: 16,
  },

  descriptionActive: {
    color: colors.black,
  },
});

export default styles;
