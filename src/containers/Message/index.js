// Externals
import React, { PropTypes } from 'react';
import {
  Field,
  reduxForm,
} from 'redux-form';

// Components
import Banner from '../../components/Banner';
import FlexView from '../../components/FlexView';
import Textarea from '../../components/Textarea';

// Actions
import { setOrderMessage } from '../App/actions';

// Utils
import { stepShape } from '../../utils/shapes';

class Message extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    step: stepShape.isRequired,
  };

  render() {
    return (
      <FlexView>
        <Field
          component={Textarea}
          name="message"
        />
        <Banner
          {...this.props.step}
          onPress={this.props.handleSubmit(this.props.onSubmit)}
        />
      </FlexView>
    );
  }

}

export default reduxForm({
  form: 'message',
  onSubmit: (values, dispatch, props) => {
    // Set the order message then go to the next screen
    dispatch(setOrderMessage(values.message));
    props.pushNextScene();
  },
})(Message);
