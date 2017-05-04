// Externals
import React, { PropTypes } from 'react';

// Styles
import StyledText from './styles';

// Utils
import { childrenShape } from '../../utils/shapes';

const propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: childrenShape.isRequired,
  fontSize: PropTypes.number,
  marginBottom: PropTypes.bool,
};

const defaultProps = {
  align: 'center',
  fontSize: 18,
  marginBottom: false,
};

const Text = props => (
  <StyledText
    align={props.align}
    fontSize={props.fontSize}
    marginBottom={props.marginBottom}
  >
    {props.children}
  </StyledText>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
