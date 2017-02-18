// Externals
import React, { PropTypes } from 'react';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Image,
  ScrollView,
  View,
} from 'react-native';

// Containers & components
import OrderStep3 from './OrderStep3';
import CallToAction from '../components/CallToAction';

// Actions
import { setMessage } from '../actions/cart';

// Data
import {
  MessageForm,
  messageOptions,
} from '../data/forms';

// Images
import bgMessage from '../images/bg-message.png';

// Styles
import styles from '../styles/components/form';

const { Form } = t.form;

class OrderStep2 extends React.Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
    setMessage: PropTypes.func.isRequired,
  };

  state = {
    value: {
      message: this.props.message,
    },
  };

  onChange = (value) => {
    this.setState({ value });
  }

  onNextStep = () => {
    const value = this.form.getValue();

    if (!value) return;

    this.props.setMessage(value.message);
    this.props.navigator.push({
      component: OrderStep3,
      index: 2,
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          keyboardDismissMode="interactive"
          contentContainerStyle={styles.messageContainer}
        >
          <Image
            source={bgMessage}
            style={styles.messageImage}
          />
          <Form
            ref={(c) => { this.form = c; }}
            type={MessageForm}
            onChange={this.onChange}
            options={messageOptions}
            value={this.state.value}
          />
        </ScrollView>
        <CallToAction
          onPress={this.onNextStep}
          step={2}
          text="Rédigez votre message"
          textComplement="(anonyme si vous ne signez pas)"
        />
      </View>
    );
  }

}

export default connect(
    state => ({
      message: state.cart.message,
    }),
    dispatch => bindActionCreators({
      setMessage,
    }, dispatch),
)(OrderStep2);
