// Externals
import React from 'react';

// Styles
import StyledScrollView from './styles';

// Shapes
import { childrenShape } from '../../utils/shapes';

const propTypes = {
  children: childrenShape.isRequired,
};

const Form = props => (
  <StyledScrollView keyboardDismissMode="interactive">
    {props.children}
  </StyledScrollView>
);

Form.propTypes = propTypes;

export default Form;
