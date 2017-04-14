// Externals
import React, { PropTypes } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Banner from '../../components/Banner';
import CreditCard from '../../components/CreditCard';
import FlexView from '../../components/FlexView';
import LoadingIndicator from '../../components/LoadingIndicator';

// Actions
import { asyncCompleteCheckout } from '../App/actions';

// Utils
import { sceneShape } from '../../utils/shapes';

class Payment extends React.Component {

  static propTypes = {
    asyncCompleteCheckout: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    scene: sceneShape.isRequired,
  };

  state = {
    values: null,
    valid: false,
    status: null,
  };

  onChange = ({ status, valid, values }) => {
    this.setState({ status, valid, values });
  }

  onNextStep = () => {
    this.props.asyncCompleteCheckout({
      number: this.state.values.number,
      expiryMonth: '03',
      expiryYear: '20',
      cvv: this.state.values.cvc,
      firstName: 'John',
      lastName: 'Smith',
    })
    .then(d => console.log(d))
    .catch(e => Alert.alert('Oops !', (typeof e === 'string') ? e.trim() : e));
  }

  renderContent() {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <CreditCard onChange={this.onChange} />
    );
  }

  render() {
    return (
      <FlexView>
        {this.renderContent()}
        <Banner
          {...this.props.scene}
          enabled={!this.props.isFetching && this.state.valid}
          onPress={this.onNextStep}
        />
      </FlexView>
    );
  }

}

export default connect(
  state => ({
    isFetching: state.order.isFetching,
  }),
  dispatch => bindActionCreators({
    asyncCompleteCheckout,
  }, dispatch),
)(Payment);
