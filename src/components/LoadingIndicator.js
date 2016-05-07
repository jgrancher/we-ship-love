import React from 'react-native';
import appStyles from '../styles/base/application';
import { turquoise } from '../config/colors';

const { ActivityIndicatorIOS } = React;
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
