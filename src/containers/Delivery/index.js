// Externals
import React, { PropTypes } from 'react';
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
import { setOrderDelivery } from '../App/actions';

// Utils
import { countryShape } from '../../utils/shapes';

class Delivery extends React.Component {

  static propTypes = {
    countries: PropTypes.arrayOf(countryShape).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isFetching: false,
  };

  render() {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <FlexView>
        <Form>
          <Field
            component={Input}
            name="name"
            placeholder="Nom"
            autoCapitalize="words"
          />
          <Field
            component={Input}
            name="firstname"
            placeholder="Prénom"
            autoCapitalize="words"
          />
          <Field
            component={Input}
            name="address"
            placeholder="Adresse"
            autoCapitalize="words"
          />
          <Field
            component={Input}
            name="address2"
            placeholder="Complément d'adresse"
            autoCapitalize="words"
          />
          <Field
            component={Input}
            keyboardType="numbers-and-punctuation"
            name="zipcode"
            placeholder="Code postal"
            autoCapitalize="none"
          />
          <Field
            component={Input}
            name="city"
            placeholder="Ville"
          />
          <Field
            component={Input}
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Field
            component={Input}
            name="phone"
            keyboardType="phone-pad"
            placeholder="Téléphone"
          />
          <Field
            component={AccordionPicker}
            name="country"
            options={this.props.countries}
          />
          <Disclaimer />
        </Form>
        <CallToAction
          onPress={this.props.handleSubmit(this.props.onSubmit)}
          step={3}
          text="C'est pour qui?"
        />
      </FlexView>
    );
  }
}

export default reduxForm({
  form: 'delivery',
  onSubmit: (values, dispatch, props) => {
    // Set the order delivery then go to the next screen
    dispatch(setOrderDelivery(values));
    props.pushNextScene();
  },
})(Delivery);
