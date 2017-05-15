/* eslint-disable react/jsx-no-bind */

// Externals
import React, { PropTypes } from 'react';

// Styles
import {
  StyledImage,
  StyledKeyboardAvoidingView,
  StyledTextInput,
  StyledView,
} from './styles';

// Utils
import { inputShape } from '../../utils/shapes';

// Images
import background from './background.png';

class Textarea extends React.Component {

  static propTypes = {
    input: inputShape.isRequired,
    numberOfLines: PropTypes.number,
  };

  static defaultProps = {
    numberOfLines: 5,
  };

  onResponderRelease = () => this.input.blur();

  onStartShouldSetResponder = () => true;

  render() {
    const { input, ...inputProps } = this.props;

    return (
      <StyledKeyboardAvoidingView
        behavior="padding"
        onStartShouldSetResponder={this.onStartShouldSetResponder}
        onResponderRelease={this.onResponderRelease}
      >
        <StyledView>
          <StyledImage source={background} />
          <StyledTextInput
            {...inputProps}
            innerRef={(c) => { this.input = c; }}
            multiline
            onBlur={input.onBlur}
            onChangeText={input.onChange}
            onFocus={input.onFocus}
            value={input.value}
          />
        </StyledView>
      </StyledKeyboardAvoidingView>
    );
  }

}

export default Textarea;
