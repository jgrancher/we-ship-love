// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  ActivityIndicatorIOS,
  ScrollView,
  View,
} from 'react-native';

// Containers & components
import CallToAction from '../components/CallToAction';
import ShippingButton from '../components/ShippingButton';

// Actions
import fetchShippingOptions from '../actions/shipping';
import { setShipping } from '../actions/cart';

// Styles
import appStyles from '../styles/base/application';
import styles from '../styles/components/form';
import * as colors from '../config/colors';

class OrderStep4 extends React.Component {

  static propTypes = {
    fetchShippingOptions: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    navigator: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
  };

  static defaultProps = {
    isFetching: false,
  };

  state = {
    shipping: this.props.options[0],
  };

  // componentWillMount() {
  //     this.props.fetchShippingOptions();
  // }

  onNextStep = () => {

  }

  renderContent() {
    if (this.props.isFetching) {
      return null;
      // TODO: LoadingIndicator here?
      // return (
      //   <ActivityIndicatorIOS
      //     color={colors.turquoise}
      //     style={appStyles.indicator}
      //   />
      // );
    }

    // TODO: Loop through the options to render buttons
    return (
      <ShippingButton
        active
        description="Colissimo 2 à 3 jours"
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={appStyles.content}
          style={styles.container}
        >
          {this.renderContent()}
        </ScrollView>
        <CallToAction
          enabled={this.props.options.length > 0}
          onPress={this.onNextStep}
          step={4}
          text="Frais de port"
        />
      </View>
    );
  }
}

export default connect(
    state => ({
      isFetching: state.shipping.isFetching,
      options: state.shipping.options,
    }),
    dispatch => bindActionCreators({
      fetchShippingOptions,
      setShipping,
    }, dispatch),
)(OrderStep4);
