// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';

// Components
import Banner from '../../components/Banner';
import ContentView from '../../components/ContentView';
import FlexView from '../../components/FlexView';
import LoadingIndicator from '../../components/LoadingIndicator';
import ShippingButton from '../../components/ShippingButton';

// Actions
import fetchRates from './actions';
import {
  asyncSelectShipping,
  setOrderShipping,
} from '../App/actions';

// Utils
import {
  rateShape,
  stepShape,
} from '../../utils/shapes';

class Shipping extends React.Component {

  static propTypes = {
    asyncSelectShipping: PropTypes.func.isRequired,
    fetchRates: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    pushNextScene: PropTypes.func.isRequired,
    rates: PropTypes.arrayOf(rateShape).isRequired,
    setOrderShipping: PropTypes.func.isRequired,
    step: stepShape.isRequired,
  };

  state = {
    index: -1,
  };

  componentWillMount() {
    this.props.fetchRates();
  }

  onIndexChange = (index) => {
    this.setState({ index });
  }

  onNextStep = () => {
    // Set the order shipping rate then go to the next screen
    this.props.setOrderShipping(this.state.index);
    this.props.asyncSelectShipping(this.state.index)
      .then(this.props.pushNextScene)
      .catch(e => Alert.alert('Oops !', (typeof e === 'string') ? e.trim() : e));
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
        <ContentView centered>
          {this.renderContent()}
        </ContentView>
        <Banner
          {...this.props.step}
          enabled={!this.props.isFetching && this.state.index >= 0}
          onPress={this.onNextStep}
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
    asyncSelectShipping,
    fetchRates,
    setOrderShipping,
  }, dispatch),
)(Shipping);
