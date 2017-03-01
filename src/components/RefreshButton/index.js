// Externals
import React, { PropTypes } from 'react';
import {
  Text,
  TouchableHighlight,
} from 'react-native';

// Styles
import styles from '../../styles/components/refreshButton';

const propTypes = {
  numberOfLines: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  numberOfLines: 4,
  text: 'Une erreur est survenue...\nCliquez ici pour rafraichir.\n\n🎈',
};

const RefreshButton = props => (
  <TouchableHighlight
    onPress={props.onPress}
    style={styles.container}
    underlayColor="transparent"
  >
    <Text
      numberOfLines={props.numberOfLines}
      style={styles.text}
    >
      {props.text}
    </Text>
  </TouchableHighlight>
);

RefreshButton.propTypes = propTypes;
RefreshButton.defaultProps = defaultProps;

export default RefreshButton;
