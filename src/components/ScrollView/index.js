// Externals
import React from 'react';

// Styles
import StyledScrollView from './styles';

// Shapes
import { childrenShape } from '../../utils/shapes';

const propTypes = {
  children: childrenShape.isRequired,
};

const ScrollView = props => (
  <StyledScrollView keyboardDismissMode="interactive">
    {props.children}
  </StyledScrollView>
);

ScrollView.propTypes = propTypes;

export default ScrollView;
