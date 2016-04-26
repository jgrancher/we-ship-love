import React from 'react-native';
import styles from '../styles/components/shippingButton';

const { Text, TouchableHighlight, View } = React;
const { bool, func, number, string } = React.PropTypes;

const ShippingButton = (props) => (
    <TouchableHighlight onPress={props.onPress}>
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.description}>{props.description}</Text>
            </View>
            <View style={styles.lozenge} />
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{props.price}</Text>
                <Text style={[styles.price, styles.priceCurrency]}>€</Text>
            </View>
        </View>
    </TouchableHighlight>
);

ShippingButton.propTypes = {
    description: string,
    onPress: func,
    price: number,
    selected: bool,
};

ShippingButton.defaultProps = {
    description: '',
    onPress: () => {},
    price: 12,
    selected: false,
};

export default ShippingButton;
