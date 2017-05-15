// Externals
import styled from 'styled-components/native';

// Styles
import { brown } from '../../styles/colors';
import { raleway } from '../../styles/fonts';
import { heightContent } from '../../styles/sizes';

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  align-items: center;
  height: ${heightContent};
  justify-content: center;
`;

export const StyledView = styled.View`
  height: 371;
  justify-content: center;
  width: 331;
`;

export const StyledImage = styled.Image`
  left: 0;
  position: absolute;
  top: 0;
`;

export const StyledTextInput = styled.TextInput`
  align-self: center;
  color: ${brown};
  font-family: ${raleway};
  font-size: 20;
  height: 250;
  width: 210;
`;
