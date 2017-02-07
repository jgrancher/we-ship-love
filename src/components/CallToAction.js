// Modules
import React from 'react';
import {
    Image,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

// Images
import ctaBackground from '../images/cta-bg.png';
import ctaBtnEnabled from '../images/cta-btn.png';
import ctaBtnDisabled from '../images/cta-btn-disabled.png';

// Styles
import styles from '../styles/components/callToAction';

const CallToAction = (props) => (
    <TouchableHighlight
        onPress={props.enabled ? props.onPress : null}
        style={styles.container}
        underlayColor="transparent"
    >
        <View style={{ flex: 1 }}>
            <Image
                resizeMode="stretch"
                source={ctaBackground}
                style={styles.background}
            />
            <View style={styles.content}>
                <Text style={styles.step}>
                    {props.step}
                </Text>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>
                        {props.text}
                    </Text>
                    {props.textComplement && (
                        <Text style={[styles.text, styles.textComplement]}>
                            {props.textComplement}
                        </Text>
                    )}
                </View>
                <Image
                    source={props.enabled ? ctaBtnEnabled : ctaBtnDisabled}
                    style={styles.arrow}
                />
            </View>
        </View>
    </TouchableHighlight>
);

CallToAction.propTypes = {
    enabled: React.PropTypes.bool,
    onPress: React.PropTypes.func,
    step: React.PropTypes.number,
    text: React.PropTypes.string,
    textComplement: React.PropTypes.string,
};

CallToAction.defaultProps = {
    enabled: true,
    step: 1,
    text: 'Choisissez votre couleur!',
    textComplement: null,
};

export default CallToAction;
