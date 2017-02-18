// Externals
import React, { PropTypes } from 'react';
import { ActivityIndicator } from 'react-native';

// Styles
import appStyles from '../styles/base/application';
import { turquoise } from '../config/colors';

const propTypes = {
  color: PropTypes.string,
};

const defaultProps = {
  color: turquoise,
};

const LoadingIndicator = props => (
  <ActivityIndicator
    color={props.color}
    style={appStyles.indicator}
  />
);

LoadingIndicator.propTypes = propTypes;
LoadingIndicator.defaultProps = defaultProps;

export default LoadingIndicator;
