// Externals
import React, { PropTypes } from 'react';

// Styles
import StyledText from './styles';

// Utils
import { childrenShape } from '../../utils/shapes';

const propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: childrenShape.isRequired,
  spaced: PropTypes.bool,
};

const defaultProps = {
  align: 'left',
  spaced: false,
};

const Text = props => (
  <StyledText
    align={props.align}
    spaced={props.spaced}
  >
    {props.children}
  </StyledText>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
