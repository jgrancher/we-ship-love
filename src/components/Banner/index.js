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
  StyledButton,
  StyledView,
} from './styles';

const propTypes = {
  enabled: PropTypes.bool,
  onPress: PropTypes.func,
  step: PropTypes.number,
  text: PropTypes.string,
  textComplement: PropTypes.string,
};

const defaultProps = {
  enabled: true,
  onPress: null,
  step: null,
  text: null,
  textComplement: null,
};

const Banner = props => (
  <StyledButton
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
        {props.text && (
          <StyledImageArrow
            source={props.enabled ? ctaBtnEnabled : ctaBtnDisabled}
          />
        )}
      </StyledView>
    </FlexView>
  </StyledButton>
);

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
