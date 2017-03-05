// Externals
import React from 'react';

// Utils
import { inputShape } from '../../utils/shapes';

// Images
import bgMessage from '../../images/bg-message.png';

// Styles
import {
  StyledImage,
  StyledKeyboardAvoidingView,
  StyledTextInput,
  StyledView,
} from './styles';

const propTypes = {
  input: inputShape.isRequired,
};

const Textarea = props => (
  <StyledKeyboardAvoidingView behavior="padding">
    <StyledView>
      <StyledImage source={bgMessage} />
      <StyledTextInput
        blurOnSubmit
        multiline
        numberOfLines={5}
        onChangeText={props.input.onChange}
      />
    </StyledView>
  </StyledKeyboardAvoidingView>
);

Textarea.propTypes = propTypes;

export default Textarea;
