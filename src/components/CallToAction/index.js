// Externals
import React, { PropTypes } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

// Components
import FlexView from '../FlexView';

// Images
import ctaBackground from '../../images/cta-bg.png';
import ctaBtnEnabled from '../../images/cta-btn.png';
import ctaBtnDisabled from '../../images/cta-btn-disabled.png';

// Styles
import styles from '../../styles/components/callToAction';

const propTypes = {
  enabled: PropTypes.bool,
  onPress: PropTypes.func,
  step: PropTypes.number,
  text: PropTypes.string.isRequired,
  textComplement: PropTypes.string,
};

const defaultProps = {
  enabled: true,
  onPress: () => {},
  step: 1,
  textComplement: null,
};

const CallToAction = props => (
  <TouchableHighlight
    onPress={props.enabled ? props.onPress : null}
    style={styles.container}
    underlayColor="transparent"
  >
    <FlexView>
      <Image
        resizeMode="stretch"
        source={ctaBackground}
        style={styles.background}
      />
      <View style={styles.content}>
        <Text style={styles.step}>
          {props.step}
        </Text>
        <FlexView>
          <Text style={styles.text}>
            {props.text}
          </Text>
          {props.textComplement && (
            <Text style={[styles.text, styles.textComplement]}>
              {props.textComplement}
            </Text>
          )}
        </FlexView>
        <Image
          source={props.enabled ? ctaBtnEnabled : ctaBtnDisabled}
          style={styles.arrow}
        />
      </View>
    </FlexView>
  </TouchableHighlight>
);

CallToAction.propTypes = propTypes;
CallToAction.defaultProps = defaultProps;

export default CallToAction;
