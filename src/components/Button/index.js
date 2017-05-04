// Externals
import React, { PropTypes } from 'react';

// Styles
import {
  StyledButton,
  StyledText,
  underlayColor,
} from './styles';

const propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'danger', 'success']),
};

const defaultProps = {
  type: 'default',
};

const Button = props => (
  <StyledButton
    {...props}
    underlayColor={underlayColor}
    type={props.type}
  >
    <StyledText>
      {props.title}
    </StyledText>
  </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
