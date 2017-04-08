// Externals
import React, { PropTypes } from 'react';
import { View } from 'react-native';

// Components
import FlexView from '../FlexView';

// Images
import arrow from './arrow.png';
import arrowDisabled from './arrow-disabled.png';
import bannerBackground from './banner-background.png';

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
        source={bannerBackground}
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
            source={props.enabled ? arrow : arrowDisabled}
          />
        )}
      </StyledView>
    </FlexView>
  </StyledButton>
);

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
