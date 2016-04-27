import React from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CallToAction from '../components/CallToAction';
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

    constructor(props) {
        super(props);
        this.onNextStep = this.onNextStep.bind(this);
    }

    state = {
        shipping: this.props.shipping,
    };

    onNextStep() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ShippingButton
                        active
                        description="Colissimo 2 à 3 jours"
                    />
                    <ShippingButton
                        description="Colissimo 2 à 3 jours"
                    />
                    <ShippingButton
                        description="Colissimo 2 à 3 jours"
                    />
                    <ShippingButton
                        description="Colissimo 2 à 3 jours"
                    />
                </View>
                <CallToAction
                    onPress={this.onNextStep}
                    text="Frais de port"
                    step={4}
                />
            </View>
        );
    }
}

export default connect(
    (state) => ({ shipping: state.cart.shipping }),
    (dispatch) => bindActionCreators({ setShipping }, dispatch),
)(OrderStep4);
