// Externals
import React, { PropTypes } from 'react';

// Styles
import {
  StyledButton,
  StyledText,
} from './styles';

const propTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  primary: true,
};

const Button = props => (
  <StyledButton
    {...props}
    activeOpacity={0.6}
    primary={props.primary}
  >
    <StyledText primary={props.primary}>
      {props.title}
    </StyledText>
  </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
