import React from 'react-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderStep4 from './OrderStep4';
import CallToAction from '../components/CallToAction';
import LoadingIndicator from '../components/LoadingIndicator';
import { setDelivery } from '../actions/cart';
import { fetchShippingOptions } from '../actions/shipping';
import { getOptionsCountries } from '../lib/helpers';
import { DeliveryForm, deliveryOptions } from '../data/forms';
import styles from '../styles/components/form';

const { ScrollView, Text, View } = React;
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
        this.onChange = this.onChange.bind(this);
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

    onChange(value) {
        this.setState({ value });
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
                        onChange={this.onChange}
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
