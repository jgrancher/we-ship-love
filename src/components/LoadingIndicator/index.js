// Externals
import React, { PropTypes } from 'react';

// Styles
import {
  StyledActivityIndicator,
  color,
} from './styles';

const propTypes = {
  color: PropTypes.string,
};

const defaultProps = {
  color,
};

const LoadingIndicator = props => (
  <StyledActivityIndicator
    color={props.color}
  />
);

LoadingIndicator.propTypes = propTypes;
LoadingIndicator.defaultProps = defaultProps;

export default LoadingIndicator;
