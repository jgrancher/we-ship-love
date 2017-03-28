// Externals
import React, { PropTypes } from 'react';

// Utils
import { inputShape } from '../../utils/shapes';

// Styles
import StyledTextInput from './styles';

const propTypes = {
  input: inputShape.isRequired,
  keyboardAppearance: PropTypes.string,
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string,
};

const defaultProps = {
  keyboardAppearance: 'light',
  keyboardType: 'default',
  returnKeyType: 'next',
};

const Input = (props) => {
  const { input, ...inputProps } = props;

  // Show an error if the input is changed and invalid
  const showError = inputProps.meta.touched && inputProps.meta.error;

  return (
    <StyledTextInput
      {...inputProps}
      onBlur={input.onBlur}
      onChangeText={input.onChange}
      onFocus={input.onFocus}
      showError={showError}
      value={input.value}
    />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
