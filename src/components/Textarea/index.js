// Externals
import React, { PropTypes } from 'react';

// Utils
import { inputShape } from '../../utils/shapes';

// Images
import background from './background.png';

// Styles
import {
  StyledImage,
  StyledKeyboardAvoidingView,
  StyledTextInput,
  StyledView,
} from './styles';

const propTypes = {
  blurOnSubmit: PropTypes.bool,
  input: inputShape.isRequired,
  numberOfLines: PropTypes.number,
};

const defaultProps = {
  blurOnSubmit: true,
  numberOfLines: 5,
};

const Textarea = (props) => {
  const { input, ...inputProps } = props;

  return (
    <StyledKeyboardAvoidingView behavior="padding">
      <StyledView>
        <StyledImage source={background} />
        <StyledTextInput
          {...inputProps}
          multiline
          onBlur={input.onBlur}
          onChangeText={input.onChange}
          onFocus={input.onFocus}
          value={input.value}
        />
      </StyledView>
    </StyledKeyboardAvoidingView>
  );
};

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
