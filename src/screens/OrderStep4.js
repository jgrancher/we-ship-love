import React from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ShippingButton from '../components/ShippingButton';
import { setShipping } from '../actions/cart';
import styles from '../styles/components/form';

const { View } = React;
const { object } = React.PropTypes;

class OrderStep4 extends React.Component {

    static propTypes = {
        navigator: object.isRequired,
        shipping: object.isRequired,
    };

    state = {
        shipping: this.props.shipping,
    };

    render() {
        return (
            <View style={styles.container}>
                <ShippingButton
                    description="Colissimo 2 à 3 jours"
                />
            </View>
        );
    }
}

export default connect(
    (state) => ({ shipping: state.cart.shipping }),
    (dispatch) => bindActionCreators({ setShipping }, dispatch),
)(OrderStep4);
