// Externals
import React, { PropTypes } from 'react';

// Styles
import StyledActivityIndicator from './styles';
import { turquoise } from '../../shared/colors';

const propTypes = {
  color: PropTypes.string,
};

const defaultProps = {
  color: turquoise,
};

const LoadingIndicator = props => (
  <StyledActivityIndicator
    color={props.color}
  />
);

LoadingIndicator.propTypes = propTypes;
LoadingIndicator.defaultProps = defaultProps;

export default LoadingIndicator;
