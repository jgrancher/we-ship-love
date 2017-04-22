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
  StyledButton,
  StyledImageArrow,
  StyledImageBackground,
  StyledTextPrice,
  StyledTextStep,
  StyledTextSubtitle,
  StyledTextTitle,
  StyledView,
} from './styles';

const propTypes = {
  enabled: PropTypes.bool,
  number: PropTypes.number,
  onPress: PropTypes.func,
  price: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
};

const defaultProps = {
  enabled: true,
  number: null,
  onPress: null,
  price: null,
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
      <StyledView centered={!props.number}>
        {props.number && (
          <StyledTextStep>
            {props.number}
          </StyledTextStep>
        )}
        <View>
          <StyledTextTitle>
            {props.title}
          </StyledTextTitle>
          {props.text && (
            <StyledTextSubtitle>
              {props.text}
            </StyledTextSubtitle>
          )}
          {props.price && (
            <StyledTextPrice>
              {props.price}
            </StyledTextPrice>
          )}
        </View>
        {props.number && (
          <StyledImageArrow source={props.enabled ? arrow : arrowDisabled} />
        )}
      </StyledView>
    </FlexView>
  </StyledButton>
);

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
