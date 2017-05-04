// Externals
import React, { PropTypes } from 'react';
import { View } from 'react-native';

// Components
import ApplePayButton from '../../components/ApplePayButton';
import Banner from '../../components/Banner';
import ContentView from '../../components/ContentView';
import CreditCardButton from '../../components/CreditCardButton';
import FlexView from '../../components/FlexView';
import Text from '../../components/Text';

// Utils
import { stepShape } from '../../utils/shapes';

class PaymentMethod extends React.Component {

  static propTypes = {
    methods: PropTypes.arrayOf(PropTypes.string),
    pushNextScene: PropTypes.func.isRequired,
    step: stepShape.isRequired,
  };

  static defaultProps = {
    methods: ['Apple Pay', 'Carte Bleue'],
  };

  state = {
    index: -1,
  };

  onNextStep = () => {
    this.props.pushNextScene();
  }

  onIndexChange = (index) => {
    this.setState({ index });
  }

  renderContent() {
    return (
      <View>
        <ApplePayButton
          active={this.state.index === 0}
          index={0}
        />
        <Text marginBottom>
          OU
        </Text>
        <CreditCardButton
          active={this.state.index === 1}
          index={1}
          onPress={this.onIndexChange}
        />
      </View>
    );
  }

  render() {
    return (
      <FlexView>
        <ContentView
          alignItems="center"
          justifyContent="center"
        >
          {this.renderContent()}
        </ContentView>
        <Banner
          {...this.props.step}
          enabled={this.state.index >= 0}
          onPress={this.onNextStep}
          text={this.props.methods[this.state.index]}
        />
      </FlexView>
    );
  }

}

export default PaymentMethod;
