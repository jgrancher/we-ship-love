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
import Banner from '../../components/Banner';
import ContentView from '../../components/ContentView';
import FlexView from '../../components/FlexView';
import Input from '../../components/Input';
import LoadingIndicator from '../../components/LoadingIndicator';
import ScrollView from '../../components/ScrollView';

// Actions
import {
  asyncCompleteCheckout,
  // setOrderPayment,
} from '../App/actions';

// Utils
import { stepShape } from '../../utils/shapes';
import {
  formatCreditCard,
  formatNumeric,
  validateRequired,
} from '../../utils/helpers';

class Payment extends React.Component {

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    step: stepShape.isRequired,
    total: PropTypes.number.isRequired,
    valid: PropTypes.bool.isRequired,
  };

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
          name="number"
          autoCapitalize="none"
          autoCorrect={false}
          format={formatCreditCard}
          keyboardType="numeric"
          maxLength={19}
          parse={formatNumeric}
          placeholder="Numéro de carte"
        />
        <Field
          component={Input}
          name="expiryMonth"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
          parse={formatNumeric}
          placeholder="Date d'expiration : mois (MM)"
        />
        <Field
          component={Input}
          name="expiryYear"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
          parse={formatNumeric}
          placeholder="Date d'expiration : année (YY)"
        />
        <Field
          component={Input}
          name="cvv"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={3}
          placeholder="CVC (Code de sécurité)"
        />
        <Field
          component={Input}
          name="firstName"
          autoCapitalize="words"
          placeholder="Prénom sur la carte"
        />
        <Field
          component={Input}
          name="lastName"
          autoCapitalize="words"
          placeholder="Nom sur la carte"
          returnKeyType="done"
        />
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
          text={`Pour un total de ${this.props.total}€`}
        />
      </FlexView>
    );
  }

}

const PaymentForm = reduxForm({
  form: 'payment',
  onSubmit: (values, dispatch, props) => {
    // Complete the checkout with the payment values then go to the next screen
    props.asyncCompleteCheckout(values)
      .then(props.pushNextScene)
      .catch(() => {
        Alert.alert('Oh, non !', 'Une erreur est survenue lors du paiement. Merci de réessayer !');
      });
  },
  validate: values => ({
    number: validateRequired(values.number),
    expiryMonth: validateRequired(values.expiryMonth),
    expiryYear: validateRequired(values.expiryYear),
    cvv: validateRequired(values.cvv),
    firstName: validateRequired(values.firstName),
    lastName: validateRequired(values.lastName),
  }),
})(Payment);

export default connect(
  state => ({
    isFetching: state.order.isFetching,
    total: state.order.prices.items + state.order.prices.shipping,
  }),
  dispatch => bindActionCreators({
    asyncCompleteCheckout,
  }, dispatch),
)(PaymentForm);
