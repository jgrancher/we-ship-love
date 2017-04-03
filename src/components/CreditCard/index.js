// Externals
import React, { PropTypes } from 'react';
import { CreditCardInput } from 'react-native-credit-card-input';

// Styles
import {
  inputContainerStyle,
  inputStyle,
  StyledView,
} from './styles';

// Config
import {
  grey,
  red,
} from '../../config/colors';

const propTypes = {
  onChange: PropTypes.func.isRequired,
};

const CreditCard = props => (
  <StyledView>
    <CreditCardInput
      inputContainerStyle={inputContainerStyle}
      inputStyle={inputStyle}
      invalidColor={red}
      labels={{
        name: 'Nom sur la carte',
        number: 'Numéro de carte',
        expiry: 'Expire fin',
        cvc: 'CVC',
        postalCode: 'Code postal',
      }}
      onChange={props.onChange}
      placeholderColor={grey}
      placeholders={{
        name: 'John Snow',
        number: '1234 5678 1234 5678',
        expiry: 'MM/YY',
        cvc: 'CVC',
        postalCode: '75000',
      }}
      requiresName
    />
  </StyledView>
);

CreditCard.propTypes = propTypes;

export default CreditCard;
