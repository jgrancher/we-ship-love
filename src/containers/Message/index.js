// Externals
import React, { PropTypes } from 'react';
import {
  Field,
  reduxForm,
} from 'redux-form';

// Components
import CallToAction from '../../components/CallToAction';
import FlexView from '../../components/FlexView';
import Textarea from '../../components/Textarea';

class Message extends React.Component {

  static propTypes = {
    pushNextScene: PropTypes.func.isRequired,
  };

  onNextStep = () => {
    this.props.pushNextScene();
  }

  render() {
    return (
      <FlexView>
        <Field
          component={Textarea}
          name="message"
        />
        <CallToAction
          onPress={this.onNextStep}
          step={2}
          text="Rédigez votre message"
          textComplement="(anonyme si vous ne signez pas)"
        />
      </FlexView>
    );
  }

}

export default reduxForm({
  form: 'message',
})(Message);
