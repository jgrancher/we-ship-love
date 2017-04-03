// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';

// Components
import CallToAction from '../../components/CallToAction';
import ContentView from '../../components/ContentView';
import FlexView from '../../components/FlexView';
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
    isFetching: PropTypes.bool.isRequired,
    pushNextScene: PropTypes.func.isRequired,
    rates: PropTypes.arrayOf(rateShape).isRequired,
    setOrderShipping: PropTypes.func.isRequired,
    setRemoteShipping: PropTypes.func.isRequired,
  };

  state = {
    index: -1,
  };

  componentWillMount() {
    this.props.fetchRates()
      .catch(e => console.warn(e)); // eslint-disable-line no-console
  }

  onIndexChange = (index) => {
    this.setState({ index });
  }

  onNextStep = () => {
    // Set the order shipping rate then go to the next screen
    this.props.setOrderShipping(this.state.index);
    this.props.setRemoteShipping(this.state.index)
      .then(this.props.pushNextScene)
      .catch(e => Alert.alert('Oops !', e.trim()));
  }

  renderContent() {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    return this.props.rates.map((rate, index) => {
      const onPress = () => this.onIndexChange(index);

      return (
        <ShippingButton
          active={index === this.state.index}
          key={rate.id}
          onPress={onPress}
          {...rate}
        />
      );
    });
  }

  render() {
    return (
      <FlexView>
        <ContentView>
          {this.renderContent()}
        </ContentView>
        <CallToAction
          enabled={!this.props.isFetching && this.state.index >= 0}
          onPress={this.onNextStep}
          step={4}
          text="Frais de port"
        />
      </FlexView>
    );
  }

}

export default connect(
  state => ({
    isFetching: state.rates.isFetching || state.order.isFetching,
    rates: state.rates.data,
  }),
  dispatch => bindActionCreators({
    fetchRates,
    setOrderShipping,
    setRemoteShipping,
  }, dispatch),
)(Shipping);
