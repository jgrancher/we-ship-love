import React from 'react-native';
import styles from '../styles/components/shippingButton';

const { Text, TouchableHighlight, View } = React;
const { bool, func, number, string } = React.PropTypes;

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
                    <Text style={stylesDescription}>{props.description}</Text>
                </View>
                <View style={stylesLozenge} />
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>{props.price}</Text>
                    <Text style={[styles.price, styles.priceCurrency]}>€</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

ShippingButton.propTypes = {
    active: bool,
    description: string,
    onPress: func,
    price: number,
};

ShippingButton.defaultProps = {
    active: false,
    description: '',
    onPress: () => {},
    price: 12,
};

export default ShippingButton;
