/* eslint-disable react/jsx-no-bind */

// Externals
import React, { PropTypes } from 'react';

// Styles
import StyledTextInput from './styles';

// Utils
import { inputShape } from '../../utils/shapes';

class Input extends React.Component {

  static propTypes = {
    focus: PropTypes.bool,
    input: inputShape.isRequired,
    keyboardAppearance: PropTypes.string,
    keyboardType: PropTypes.string,
    returnKeyType: PropTypes.string,
  };

  static defaultProps = {
    focus: false,
    keyboardAppearance: 'light',
    keyboardType: 'default',
    returnKeyType: 'next',
  };

  componentWillUpdate(nextProps) {
    if (!this.props.focus && nextProps.focus) {
      this.input.focus();
    }
  }

  render() {
    const { input, ...inputProps } = this.props;

    // Show an error if the input is changed and invalid
    const showError = inputProps.meta.touched && inputProps.meta.error;

    return (
      <StyledTextInput
        {...inputProps}
        innerRef={(c) => { this.input = c; }}
        onBlur={input.onBlur}
        onChangeText={input.onChange}
        onFocus={input.onFocus}
        showError={showError}
        value={input.value}
      />
    );
  }

}

export default Input;
