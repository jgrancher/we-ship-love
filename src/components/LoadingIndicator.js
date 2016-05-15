// Modules
import React from 'react';
import { ActivityIndicatorIOS } from 'react-native';

// Styles
import appStyles from '../styles/base/application';
import { turquoise } from '../config/colors';

const { string } = React.PropTypes;

const LoadingIndicator = (props) => (
    <ActivityIndicatorIOS color={props.color} style={appStyles.indicator} />
);

LoadingIndicator.propTypes = {
    color: string,
};

LoadingIndicator.defaultProps = {
    color: turquoise,
};

export default LoadingIndicator;
