import React from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CallToAction from '../components/CallToAction';
import ShippingButton from '../components/ShippingButton';
import { fetchShippingOptions } from '../actions/shipping';
import { setShipping } from '../actions/cart';
import styles from '../styles/components/form';
import * as colors from '../config/colors';

const { ActivityIndicatorIOS, ScrollView, View } = React;
const { array, bool, func, object } = React.PropTypes;

class OrderStep4 extends React.Component {

    static propTypes = {
        isFetching: bool,
        navigator: object.isRequired,
        shipping: object.isRequired,
        shippingOptions: array,
        fetchShipping: func.isRequired,
    };

    static defaultProps = {
        isFetching: false,
    };

    constructor(props) {
        super(props);
        this.onNextStep = this.onNextStep.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    state = {
        shipping: this.props.shipping,
    };

    onNextStep() {

    }

    renderContent() {
        if (this.props.isFetching) {
            return <ActivityIndicatorIOS color={colors.turquoise} style={{ flex: 1 }} />;
        }

        return (
            <ShippingButton
                active
                description="Colissimo 2 à 3 jours"
            />
        )
    }

    render() {
        this.props.fetchShipping().then((data) => console.log(data));

        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={styles.content}
                    style={styles.container}
                >
                    {this.renderContent()}
                </ScrollView>
                <CallToAction
                    enabled={this.props.shippingOptions}
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
    (dispatch) => bindActionCreators({
        fetchShippingOptions,
        setShipping,
    }, dispatch),
)(OrderStep4);
