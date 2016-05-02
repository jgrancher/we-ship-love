// External
import React from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import CallToAction from '../components/CallToAction';
import ShippingButton from '../components/ShippingButton';

// Actions
import { fetchShippingOptions } from '../actions/shipping';
import { setShipping } from '../actions/cart';

// Styles
import appStyles from '../styles/base/application';
import styles from '../styles/components/form';
import * as colors from '../config/colors';

const { ActivityIndicatorIOS, ScrollView, View } = React;
const { array, bool, func, object } = React.PropTypes;

class OrderStep4 extends React.Component {

    static propTypes = {
        isFetching: bool,
        navigator: object.isRequired,
        options: array.isRequired,
        fetchShippingOptions: func.isRequired,
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
        shipping: this.props.options[0],
    };

    componentWillMount() {
        this.props.fetchShippingOptions();
    }

    onNextStep() {

    }

    renderContent() {
        if (this.props.isFetching) {
            return <ActivityIndicatorIOS color={colors.turquoise} style={appStyles.indicator} />;
        }

        // TODO: Loop through the options to render buttons
        return (
            <ShippingButton
                active
                description="Colissimo 2 à 3 jours"
            />
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={appStyles.content}
                    style={styles.container}
                >
                    {this.renderContent()}
                </ScrollView>
                <CallToAction
                    enabled={this.props.options.length}
                    onPress={this.onNextStep}
                    text="Frais de port"
                    step={4}
                />
            </View>
        );
    }
}

export default connect(
    (state) => ({
        isFetching: state.shipping.isFetching,
        options: state.shipping.options,
    }),
    (dispatch) => bindActionCreators({
        fetchShippingOptions,
        setShipping,
    }, dispatch),
)(OrderStep4);
