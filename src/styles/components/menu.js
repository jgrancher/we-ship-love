// Menu styles

import { StyleSheet } from 'react-native';
import * as colors from '../../config/colors';
import * as sizes from '../../config/sizes';
import * as fonts from '../../config/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brown,
    height: sizes.heightWindow,
    marginTop: sizes.heightStatusBar,
    width: sizes.widthWindow,
  },

  menu: {
    borderTopColor: colors.turquoise,
    borderTopWidth: 5,
  },

  menuItem: {
    borderBottomColor: colors.brownDark,
    borderBottomWidth: 2,
    flexDirection: 'row',
    padding: sizes.spaceNormal,
  },

  menuItemImage: {
    marginRight: sizes.spaceNormal,
    width: 20,
  },

  menuItemText: {
    color: colors.white,
    fontFamily: fonts.raleway,
    fontSize: 17,
    fontWeight: '600',
  },

  links: {
    flex: 1,
    padding: sizes.spaceNormal,
    width: sizes.widthMenu,
  },

  socials: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  linkWebsite: {
    alignSelf: 'center',
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    marginBottom: sizes.spaceBig,
    padding: sizes.spaceSmall,
  },
});

export default styles;
