// Externals
import React from 'react';

// Styles
import StyledText from './styles';

// Utils
import { childrenShape } from '../../utils/shapes';

const propTypes = {
  children: childrenShape.isRequired,
};

const Text = props => (
  <StyledText>
    {props.children}
  </StyledText>
);

Text.propTypes = propTypes;

export default Text;
