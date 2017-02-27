// Externals
import React, { PropTypes } from 'react';

// Styles
import StyledView from './styles';

const propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

const FlexView = props => (
  <StyledView>
    {props.children}
  </StyledView>
);

FlexView.propTypes = propTypes;

export default FlexView;
