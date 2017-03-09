// Externals
import React from 'react';

// Styles
import StyledTextInput from './styles';

const defaultProps = {
  keyboardAppearance: 'light',
  keyboardType: 'default',
  returnKeyType: 'next',
};

const Input = props => (
  <StyledTextInput {...props} />
);

Input.defaultProps = defaultProps;

export default Input;
