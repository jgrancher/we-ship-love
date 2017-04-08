// Externals
import React, { PropTypes } from 'react';

// Styles
import {
  StyledButton,
  StyledText,
} from './styles';

const propTypes = {
  numberOfLines: PropTypes.number,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  numberOfLines: 4,
  text: 'Une erreur est survenue...\nCliquez ici pour rafraichir.\n\n🎈',
};

const RefreshButton = props => (
  <StyledButton
    onPress={props.onPress}
    underlayColor="transparent"
  >
    <StyledText numberOfLines={props.numberOfLines}>
      {props.text}
    </StyledText>
  </StyledButton>
);

RefreshButton.propTypes = propTypes;
RefreshButton.defaultProps = defaultProps;

export default RefreshButton;
