// Externals
import React, { PropTypes } from 'react';

// Styles
import {
  StyledTextCurrency,
  StyledTextPrice,
  StyledViewContainer,
  StyledViewLozenge,
} from './styles';

const propTypes = {
  active: PropTypes.bool,
  currency: PropTypes.string,
  price: PropTypes.string.isRequired,
};

const defaultProps = {
  active: false,
  currency: '€',
};

const PriceLozenge = props => (
  <StyledViewContainer>
    <StyledViewLozenge active={props.active} />
    <StyledTextPrice>
      {props.price}
    </StyledTextPrice>
    <StyledTextCurrency>
      {props.currency}
    </StyledTextCurrency>
  </StyledViewContainer>
);

PriceLozenge.propTypes = propTypes;
PriceLozenge.defaultProps = defaultProps;

export default PriceLozenge;
