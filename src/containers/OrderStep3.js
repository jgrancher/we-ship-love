// Externals
import React, { PropTypes } from 'react';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

// Containers & components
import OrderStep4 from './OrderStep4';
import CallToAction from '../components/CallToAction';
import LoadingIndicator from '../components/LoadingIndicator';

// Actions
import fetchShippingOptions from '../actions/shipping';
import { setDelivery } from '../actions/cart';

// Data
import { getOptionsCountries } from '../lib/helpers';
import { DeliveryForm, deliveryOptions } from '../data/forms';

// Styles
import styles from '../styles/components/form';

const { Form } = t.form;

class OrderStep3 extends React.Component {

  static propTypes = {
    countries: PropTypes.array.isRequired,
    delivery: PropTypes.object.isRequired,
    fetchShippingOptions: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    navigator: PropTypes.object.isRequired,
    setDelivery: PropTypes.func.isRequired,
  };

  static defaultProps = {
    countries: [],
    isFetching: false,
  };

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
    const options = props.countries.map(c => ({ [c.id]: c.name }));
    const country = t.enums(Object.assign(...options));
    const form = DeliveryForm.extend({ country });
    this.setState({ form });
  }

  onNextStep = () => {
    const value = this.form.getValue();

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
            ref={(c) => { this.form = c; }}
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
  state => ({
    countries: getOptionsCountries(state.shipping.options),
    delivery: state.cart.delivery,
    isFetching: state.shipping.isFetching,
  }),
  dispatch => bindActionCreators({
    fetchShippingOptions,
    setDelivery,
  }, dispatch),
)(OrderStep3);
