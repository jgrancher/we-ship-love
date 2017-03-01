// Externals
import React, { PropTypes } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

// Styles
import styles from '../../styles/components/shippingButton';

const propTypes = {
  active: PropTypes.bool,
  description: PropTypes.string,
  onPress: PropTypes.func,
  price: PropTypes.number,
};

const defaultProps = {
  active: false,
  description: '',
  onPress: () => {},
  price: 12,
};

const ShippingButton = (props) => {
  const stylesLozenge = [styles.lozenge, props.active && styles.lozengeActive];
  const stylesDescription = [styles.description, props.active && styles.descriptionActive];

  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="transparent"
    >
      <View>
        <View style={styles.content}>
          <Text style={stylesDescription}>
            {props.description}
          </Text>
        </View>
        <View style={stylesLozenge} />
        <View style={styles.priceContainer}>
          <Text style={styles.price}>
            {props.price}
          </Text>
          <Text style={[styles.price, styles.priceCurrency]}>
            €
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ShippingButton.propTypes = propTypes;
ShippingButton.defaultProps = defaultProps;

export default ShippingButton;
