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
import CallToAction from '../../components/CallToAction';

// Actions
import { setMessage } from './actions';

// Data
import {
  MessageForm,
  messageOptions,
} from '../../data/forms';

// Images
import bgMessage from '../../images/bg-message.png';

// Styles
import styles from '../../styles/components/form';

const { Form } = t.form;

class Message extends React.Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
    pushNextScene: PropTypes.func.isRequired,
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
    this.props.pushNextScene();
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
    message: state.message,
  }),
  dispatch => bindActionCreators({
    setMessage,
  }, dispatch),
)(Message);
