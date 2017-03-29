// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';
import {
  Field,
  reduxForm,
} from 'redux-form';

// Containers & components
import CallToAction from '../../components/CallToAction';
import FlexView from '../../components/FlexView';
import Form from '../../components/Form';
import LoadingIndicator from '../../components/LoadingIndicator';
import ShippingButton from '../../components/ShippingButton';

// Actions
import fetchRates from './actions';
import {
  setOrderShipping,
  setRemoteShipping,
} from '../App/actions';

// Utils
import { rateShape } from '../../utils/shapes';

class Shipping extends React.Component {

  static propTypes = {
    fetchRates: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    rates: PropTypes.arrayOf(rateShape).isRequired,
  };

  state = {
    index: 0,
  };

  componentWillMount() {
    this.props.fetchRates()
      .then(data => console.log('fdp =>', data))
      .catch(e => console.warn(e)); // eslint-disable-line no-console
  }

  renderContent() {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    // TODO: Loop through the options to render buttons
    return (
      <Form>
        <ShippingButton
          active
          description="Colissimo 2 à 3 jours"
        />
      </Form>
    );
  }

  render() {
    return (
      <FlexView>
        {this.renderContent()}
        <CallToAction
          enabled={this.props.rates.length > 0}
          onPress={this.props.handleSubmit(this.props.onSubmit)}
          step={4}
          text="Frais de port"
        />
      </FlexView>
    );
  }
}

// Composes the component with reduxForm
const ShippingForm = reduxForm({
  form: 'shipping',
  initialValues: {
  },
  onSubmit: (values, dispatch, props) => {
    // TODO: Need to get values from Fields to be created, and
    console.log('Order shipping ->', values);

    // Set the order shipping rate then go to the next screen
    dispatch(setOrderShipping(props.rates[0]));
    dispatch(setRemoteShipping(0))
      .then(props.pushNextScene)
      .catch(e => Alert.alert('Oops !', e.trim()));
    // props.pushNextScene();
  },
})(Shipping);

export default connect(
    state => ({
      isFetching: state.rates.isFetching,
      rates: state.rates.data,
    }),
    dispatch => bindActionCreators({
      fetchRates,
      setOrderShipping,
    }, dispatch),
)(ShippingForm);
