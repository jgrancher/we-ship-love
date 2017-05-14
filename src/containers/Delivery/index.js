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

  state = {
    focus: null,
  };

  componentWillMount() {
    this.props.fetchCountries();
  }

  // Calbacks to focus on the next field
  onSubmitLastName = () => this.setState({ focus: 'firstName' })
  onSubmitFirstName = () => this.setState({ focus: 'address1' })
  onSubmitAddress1 = () => this.setState({ focus: 'address2' })
  onSubmitAddress2 = () => this.setState({ focus: 'zip' })
  onSubmitZip = () => this.setState({ focus: 'city' })
  onSubmitCity = () => this.setState({ focus: 'email' })
  onSubmitEmail = () => this.setState({ focus: 'phone' })

  renderContent() {
    if (this.props.isFetching) {
      return (
        <ContentView>
          <LoadingIndicator />
        </ContentView>
      );
    }

    return (
      <ScrollView>
        <Field
          component={Input}
          name="lastName"
          autoCapitalize="words"
          onSubmitEditing={this.onSubmitLastName}
          placeholder="Nom"
        />
        <Field
          component={Input}
          name="firstName"
          autoCapitalize="words"
          focus={this.state.focus === 'firstName'}
          onSubmitEditing={this.onSubmitFirstName}
          placeholder="Prénom"
        />
        <Field
          component={Input}
          name="address1"
          autoCapitalize="words"
          focus={this.state.focus === 'address1'}
          onSubmitEditing={this.onSubmitAddress1}
          placeholder="Adresse"
        />
        <Field
          component={Input}
          name="address2"
          autoCapitalize="words"
          focus={this.state.focus === 'address2'}
          onSubmitEditing={this.onSubmitAddress2}
          placeholder="Complément d'adresse"
        />
        <Field
          component={Input}
          name="zip"
          autoCapitalize="none"
          focus={this.state.focus === 'zip'}
          keyboardType="numbers-and-punctuation"
          onSubmitEditing={this.onSubmitZip}
          placeholder="Code postal"
        />
        <Field
          component={Input}
          name="city"
          focus={this.state.focus === 'city'}
          onSubmitEditing={this.onSubmitCity}
          placeholder="Ville"
        />
        <Field
          component={Input}
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          focus={this.state.focus === 'email'}
          keyboardType="email-address"
          onSubmitEditing={this.onSubmitEmail}
          placeholder="Email"
        />
        <Field
          component={Input}
          name="phone"
          focus={this.state.focus === 'phone'}
          keyboardType="phone-pad"
          placeholder="Téléphone"
          returnKeyType="done"
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
        {this.renderContent()}
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
  initialValues: {
    countryCode: 'FR',
  },
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
