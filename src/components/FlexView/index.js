// Externals
import React, { PropTypes } from 'react';

// Styles
import StyledView from './styles';

// Utils
import { childrenShape } from '../../utils/shapes';

const propTypes = {
  children: childrenShape.isRequired,
  height: PropTypes.number,
};

const defaultProps = {
  height: 0,
};

const FlexView = props => (
  <StyledView height={props.height}>
    {props.children}
  </StyledView>
);

FlexView.propTypes = propTypes;
FlexView.defaultProps = defaultProps;

export default FlexView;
