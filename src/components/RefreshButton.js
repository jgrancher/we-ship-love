// Modules
import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

// Styles
import styles from '../styles/components/refreshButton';

const { func, string } = React.PropTypes;

const RefreshButton = (props) => (
    <TouchableHighlight
        onPress={props.onPress}
        style={styles.container}
        underlayColor="transparent"
    >
        <Text numberOfLines={4} style={styles.text}>
            {props.text}
        </Text>
    </TouchableHighlight>
);

RefreshButton.propTypes = {
    onPress: func.isRequired,
    text: string,
};

RefreshButton.defaultProps = {
    text: `Une erreur est survenue...\nCliquez ici pour rafraichir.\n\n¯\\_(ツ)_/¯`,
};

export default RefreshButton;
