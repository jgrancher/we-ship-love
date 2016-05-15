// Modules
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Screens & components
import OrderStep4 from './OrderStep4';
import CallToAction from '../components/CallToAction';
import LoadingIndicator from '../components/LoadingIndicator';

// Actions
import { setDelivery } from '../actions/cart';
import { fetchShippingOptions } from '../actions/shipping';

// Data
import { getOptionsCountries } from '../lib/helpers';
import { DeliveryForm, deliveryOptions } from '../data/forms';

// Styles
import styles from '../styles/components/form';

const { array, bool, func, object } = React.PropTypes;
const { Form } = t.form;

class OrderStep3 extends React.Component {

    static propTypes = {
        countries: array.isRequired,
        delivery: object.isRequired,
        fetchShippingOptions: func.isRequired,
        isFetching: bool,
        navigator: object.isRequired,
        setDelivery: func.isRequired,
    };

    static defaultProps = {
        countries: [],
        isFetching: false,
    };

    constructor(props) {
        super(props);
        this.onNextStep = this.onNextStep.bind(this);
    }

    state = {
        form: DeliveryForm,
        value: this.props.delivery,
    };

    componentWillMount() {
        this.props.fetchShippingOptions();
    }

    componentWillReceiveProps(props) {
        if (!props.countries.length) return;

        // Extending the form by adding the formatted countries
        const options = props.countries.map((c) => ({ [c.id]: c.name }));
        const country = t.enums(Object.assign(...options));
        const form = DeliveryForm.extend({ country });
        this.setState({ form });
    }

    onNextStep() {
        const value = this.refs.form.getValue();

        if (!value) return;

        this.props.setDelivery(value);
        this.props.navigator.push({
            component: OrderStep4,
            index: 3,
        });
    }

    render() {
        if (this.props.isFetching) {
            return <LoadingIndicator />;
        }

        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    keyboardDismissMode="interactive"
                    style={styles.container}
                >
                    <Form
                        ref="form"
                        type={this.state.form}
                        options={deliveryOptions}
                        value={this.state.value}
                    />
                    <Text
                        numberOfLines={5}
                        style={styles.copyright}
                    >
                        Le numéro de téléphone de la personne sont utilisées pour
                        prévenir la personne qu’un colis lui ai destiné. Elle ne sera au courant
                        ni de l’expéditeur, ni du contenu.
                    </Text>
                </ScrollView>
                <CallToAction
                    onPress={this.onNextStep}
                    step={3}
                    text="C'est pour qui?"
                />
            </View>
        );
    }
}

export default connect(
    (state) => ({
        isFetching: state.shipping.isFetching,
        countries: getOptionsCountries(state.shipping.options),
        delivery: state.cart.delivery,
    }),
    (dispatch) => bindActionCreators({
        fetchShippingOptions,
        setDelivery,
    }, dispatch)
)(OrderStep3);
