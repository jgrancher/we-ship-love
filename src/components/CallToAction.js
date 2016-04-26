import React from 'react-native';
import styles from '../styles/components/callToAction';

// Images
import ctaBackground from '../images/cta-bg.png';
import ctaBtnEnabled from '../images/cta-btn.png';
import ctaBtnDisabled from '../images/cta-btn-disabled.png';

const { Image, Text, TouchableHighlight, View } = React;
const { bool, func, number, string } = React.PropTypes;

const CallToAction = (props) => {
    const onPress = props.enabled ? props.onPress : null;
    const ctaBtnImage = props.enabled ? ctaBtnEnabled : ctaBtnDisabled;

    const complement = props.textComplement ? (
        <Text style={[styles.text, styles.textComplement]}>
            {props.textComplement}
        </Text>
    ) : null;

    return (
        <TouchableHighlight
            onPress={onPress}
            style={styles.container}
            underlayColor="transparent"
        >
            <View style={{ flex: 1 }}>
                <Image source={ctaBackground} style={styles.background} />
                <View style={styles.content}>
                    <Text style={styles.step}>{props.step}</Text>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.text}>{props.text}</Text>
                        {complement}
                    </View>
                    <Image source={ctaBtnImage} style={styles.arrow} />
                </View>
            </View>
        </TouchableHighlight>
    );
};

CallToAction.propTypes = {
    enabled: bool,
    onPress: func,
    step: number,
    text: string,
    textComplement: string,
};

CallToAction.defaultProps = {
    enabled: true,
    step: 1,
    text: 'Choisissez votre couleur!',
    textComplement: null,
};

export default CallToAction;
