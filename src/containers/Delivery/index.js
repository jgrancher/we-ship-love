// Externals
import React, { PropTypes } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Field,
  reduxForm,
} from 'redux-form';

// Components
import AccordionPicker from '../../components/AccordionPicker';
import CallToAction from '../../components/CallToAction';
import Disclaimer from '../../components/Disclaimer';
import FlexView from '../../components/FlexView';
import Form from '../../components/Form';
import Input from '../../components/Input';
import LoadingIndicator from '../../components/LoadingIndicator';

// Actions
import fetchCountries from './actions';
import {
  setOrderDelivery,
  setRemoteCustomer,
} from '../App/actions';

// Utils
import { optionShape } from '../../utils/shapes';
import {
  validateEmail,
  validateRequired,
} from '../../utils/helpers';

class Delivery extends React.Component {

  static propTypes = {
    countries: PropTypes.arrayOf(optionShape).isRequired,
    fetchCountries: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.props.fetchCountries()
      .catch(e => console.warn(e)); // eslint-disable-line no-console
  }

  renderContent() {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <Form>
        <Field
          component={Input}
          name="lastName"
          autoCapitalize="words"
          placeholder="Nom"
        />
        <Field
          component={Input}
          name="firstName"
          autoCapitalize="words"
          placeholder="Prénom"
        />
        <Field
          component={Input}
          name="address1"
          autoCapitalize="words"
          placeholder="Adresse"
        />
        <Field
          component={Input}
          name="address2"
          autoCapitalize="words"
          placeholder="Complément d'adresse"
        />
        <Field
          component={Input}
          name="zip"
          autoCapitalize="none"
          keyboardType="numbers-and-punctuation"
          placeholder="Code postal"
        />
        <Field
          component={Input}
          name="city"
          placeholder="Ville"
        />
        <Field
          component={Input}
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Email"
        />
        <Field
          component={Input}
          name="phone"
          keyboardType="phone-pad"
          placeholder="Téléphone"
        />
        <Field
          component={AccordionPicker}
          name="countryCode"
          options={this.props.countries}
        />
        <Disclaimer />
      </Form>
    );
  }

  render() {
    return (
      <FlexView>
        {this.renderContent()}
        <CallToAction
          enabled={!this.props.isFetching && this.props.valid}
          onPress={this.props.handleSubmit(this.props.onSubmit)}
          step={3}
          text="C'est pour qui?"
        />
      </FlexView>
    );
  }

}

// Composes the component with reduxForm
const DeliveryForm = reduxForm({
  form: 'delivery',
  initialValues: {
    lastName: 'Grancher',
    firstName: 'Jeremy',
    address1: '6 rue Saint-Vincent de Paul',
    zip: '75010',
    city: 'Paris',
    email: 'jgrancher@outlook.com',
    countryCode: 'FR',
  },
  onSubmit: (values, dispatch, props) => {
    // Set the order delivery then go to the next screen
    dispatch(setOrderDelivery(values));
    dispatch(setRemoteCustomer(values.email, values))
      .then(props.pushNextScene)
      .catch(e => Alert.alert('Oops !', (typeof e === 'string') ? e.trim() : e));
  },
  validate: values => ({
    lastName: validateRequired(values.lastName),
    address1: validateRequired(values.address1),
    zip: validateRequired(values.zip),
    city: validateRequired(values.city),
    email: validateRequired(values.email) || validateEmail(values.email),
  }),
})(Delivery);

export default connect(
  state => ({
    isFetching: state.countries.isFetching || state.order.isFetching,
    countries: state.countries.data.map(c => ({
      label: c.name,
      value: c.code,
    })),
  }),
  dispatch => bindActionCreators({
    fetchCountries,
    setRemoteCustomer,
  }, dispatch),
)(DeliveryForm);
