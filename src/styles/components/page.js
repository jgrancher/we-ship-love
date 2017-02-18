// Page styles

import { StyleSheet } from 'react-native';
import ctaStyles from './callToAction';

const styles = StyleSheet.create({
  webview: {
    marginBottom: 80,
  },
  background: Object.assign({},
    StyleSheet.flatten(ctaStyles.background),
  ),
});

export default styles;
