import React from 'react-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CallToAction from '../components/CallToAction';
import { setDeliveryAddress } from '../actions/cart';
import { DeliveryForm, deliveryOptions } from '../data/forms';
import styles from '../styles/components/form';

const { ScrollView, Text, View } = React;
const { func, object } = React.PropTypes;
const { Form } = t.form;

class OrderStep2 extends React.Component {

    static propTypes = {
        delivery: object.isRequired,
        navigator: object.isRequired,
        setDeliveryAddress: func.isRequired,
    };

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onNextStep = this.onNextStep.bind(this);
    }

    state = {
        value: this.props.delivery,
    };

    onChange(value) {
        this.setState({ value });
    }

    onNextStep() {
        const value = this.refs.form.getValue();

        if (!value) return;

        this.props.setDeliveryAddress(value);
        this.props.navigator.push({
            component: View,
            index: 3,
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    keyboardDismissMode="interactive"
                    style={styles.container}
                >
                    <Form
                        ref="form"
                        type={DeliveryForm}
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
                    text="C'est pour qui?"
                    step={3}
                />
            </View>
        );
    }
}

export default connect(
    (state) => ({ delivery: state.cart.delivery }),
    (dispatch) => bindActionCreators({ setDeliveryAddress }, dispatch)
)(OrderStep2);
