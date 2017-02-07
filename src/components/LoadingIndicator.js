// Modules
import React from 'react';
import { ActivityIndicator } from 'react-native';

// Styles
import appStyles from '../styles/base/application';
import { turquoise } from '../config/colors';

const LoadingIndicator = (props) => (
    <ActivityIndicator
        color={props.color}
        style={appStyles.indicator}
    />
);

LoadingIndicator.propTypes = {
    color: React.PropTypes.string,
};

LoadingIndicator.defaultProps = {
    color: turquoise,
};

export default LoadingIndicator;
