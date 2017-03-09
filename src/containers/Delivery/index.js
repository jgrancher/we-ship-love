// Externals
import React, { PropTypes } from 'react';
import {
  Field,
  reduxForm,
} from 'redux-form';

// Components
import CallToAction from '../../components/CallToAction';
import Disclaimer from '../../components/Disclaimer';
import FlexView from '../../components/FlexView';
import Form from '../../components/Form';
import Input from '../../components/Input';
import LoadingIndicator from '../../components/LoadingIndicator';

class Delivery extends React.Component {

  static propTypes = {
    isFetching: PropTypes.bool,
    pushNextScene: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isFetching: false,
  };

  onNextStep = () => {
    this.props.pushNextScene();
  }

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
          />
          <Field
            component={Input}
            name="firstname"
            placeholder="Prénom"
          />
          <Field
            component={Input}
            name="address"
            placeholder="Adresse"
          />
          <Field
            component={Input}
            name="address2"
            placeholder="Complément d'adresse"
          />
          <Field
            component={Input}
            keyboardType="numbers-and-punctuation"
            name="zipcode"
            placeholder="Code postal"
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
          />
          <Field
            component={Input}
            name="phone"
            keyboardType="phone-pad"
            placeholder="Téléphone"
          />
          <Disclaimer />
        </Form>
        <CallToAction
          onPress={this.onNextStep}
          step={3}
          text="C'est pour qui?"
        />
      </FlexView>
    );
  }
}

export default reduxForm({
  form: 'delivery',
})(Delivery);
