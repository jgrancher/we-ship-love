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
  number: PropTypes.number,
  onPress: PropTypes.func,
  text: PropTypes.string,
  title: PropTypes.string,
};

const defaultProps = {
  enabled: true,
  number: null,
  onPress: null,
  text: null,
  title: null,
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
          {props.number}
        </StyledTextStep>
        <View>
          <StyledTextTitle>
            {props.title}
          </StyledTextTitle>
          {props.text && (
            <StyledTextSubtitle>
              {props.text}
            </StyledTextSubtitle>
          )}
        </View>
        {props.title && (
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
