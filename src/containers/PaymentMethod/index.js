// Externals
import React, { PropTypes } from 'react';
import { Text } from 'react-native';

// Components
import ApplePayButton from '../../components/ApplePayButton';
import Banner from '../../components/Banner';
import ContentView from '../../components/ContentView';
import CreditCardButton from '../../components/CreditCardButton';
import FlexView from '../../components/FlexView';

class PaymentMethod extends React.Component {

  static propTypes = {
    methods: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    methods: ['Apple Pay', 'Carte Bleue'],
  };

  state = {
    index: 0,
  };

  onNextStep = () => {

  }

  onIndexChange = (index = 1) => {
    this.setState({ index });
  }

  renderContent() {
    return (
      <FlexView>
        <ApplePayButton />
        <Text>ou</Text>
        <CreditCardButton
          active={this.state.index === 1}
          onPress={this.onIndexChange}
        />
      </FlexView>
    );
  }

  render() {
    return (
      <FlexView>
        <ContentView>
          {this.renderContent()}
        </ContentView>
        <Banner
          enabled={this.state.index >= 0}
          onPress={this.onNextStep}
          step={this.props.step.number}
          text={this.props.step.title}
          text={this.props.methods[this.state.index]}
        />
      </FlexView>
    );
  }

}

export default PaymentMethod;
