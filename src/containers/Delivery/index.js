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
import Banner from '../../components/Banner';
import ContentView from '../../components/ContentView';
import Disclaimer from '../../components/Disclaimer';
import FlexView from '../../components/FlexView';
import Input from '../../components/Input';
import LoadingIndicator from '../../components/LoadingIndicator';
import ScrollView from '../../components/ScrollView';

// Actions
import fetchCountries from './actions';
import {
  asyncSetCustomer,
  setOrderDelivery,
} from '../App/actions';

// Utils
import {
  optionShape,
  stepShape,
} from '../../utils/shapes';
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
    step: stepShape.isRequired,
    valid: PropTypes.bool.isRequired,
  };

  componentWillMount() {
    this.props.fetchCountries();
  }

  renderContent() {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <ScrollView>
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
      </ScrollView>
    );
  }

  render() {
    return (
      <FlexView>
        <ContentView>
          {this.renderContent()}
        </ContentView>
        <Banner
          {...this.props.step}
          enabled={!this.props.isFetching && this.props.valid}
          onPress={this.props.handleSubmit(this.props.onSubmit)}
        />
      </FlexView>
    );
  }

}

// Composes the component with reduxForm
const DeliveryForm = reduxForm({
  form: 'delivery',
  onSubmit: (values, dispatch, props) => {
    // Set the order delivery then go to the next screen
    dispatch(setOrderDelivery(values));
    dispatch(asyncSetCustomer(values.email, values))
      .then(props.pushNextScene)
      .catch(e => Alert.alert('Oh, non !', (typeof e === 'string') ? e.trim() : e));
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
    asyncSetCustomer,
    fetchCountries,
  }, dispatch),
)(DeliveryForm);
