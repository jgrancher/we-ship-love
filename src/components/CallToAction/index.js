// Externals
import React, { PropTypes } from 'react';
import { View } from 'react-native';

// Components
import FlexView from '../FlexView';

// Images
import ctaBackground from '../../images/cta-bg.png';
import ctaBtnEnabled from '../../images/cta-btn.png';
import ctaBtnDisabled from '../../images/cta-btn-disabled.png';

// Styles
import {
  StyledImageArrow,
  StyledImageBackground,
  StyledTextStep,
  StyledTextSubtitle,
  StyledTextTitle,
  StyledTouchableHighlight,
  StyledView,
} from './styles';

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
  <StyledTouchableHighlight
    onPress={props.enabled ? props.onPress : null}
    underlayColor="transparent"
  >
    <FlexView>
      <StyledImageBackground
        resizeMode="stretch"
        source={ctaBackground}
      />
      <StyledView>
        <StyledTextStep>
          {props.step}
        </StyledTextStep>
        <View>
          <StyledTextTitle>
            {props.text}
          </StyledTextTitle>
          {props.textComplement && (
            <StyledTextSubtitle>
              {props.textComplement}
            </StyledTextSubtitle>
          )}
        </View>
        <StyledImageArrow source={props.enabled ? ctaBtnEnabled : ctaBtnDisabled} />
      </StyledView>
    </FlexView>
  </StyledTouchableHighlight>
);

CallToAction.propTypes = propTypes;
CallToAction.defaultProps = defaultProps;

export default CallToAction;
