// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import { setOrderShipping } from '../App/actions';

class Shipping extends React.Component {

  static propTypes = {
    fetchRates: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    // pushNextScene: PropTypes.func.isRequired,
    rates: PropTypes.array.isRequired,
    // setShipping: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isFetching: false,
  };

  componentWillMount() {
    this.props.fetchRates()
      .then(data => console.log('fdp =>', data))
      .catch(e => console.warn(e));
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
          onPress={this.onNextStep}
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
    // TODO: Need to check the values here!
    console.log('order shipping ->', values);
    // Set the order delivery then go to the next screen
    // dispatch(setOrderDelivery(values));
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
