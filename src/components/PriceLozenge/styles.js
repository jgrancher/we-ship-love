// Externals
import styled from 'styled-components/native';

// Styles
import { raleway } from '../../styles/fonts';
import {
  green,
  grey,
  white,
} from '../../styles/colors';

export const StyledViewContainer = styled.View`
  align-items: center;
  bottom: -20;
  flex-direction: row;
  height: 50;
  justify-content: center;
  left: -85;
  position: absolute;
  width: 70;
  z-index: 1;
`;

export const StyledViewLozenge = styled.View`
  background-color: ${props => (props.active ? green : grey)};
  height: 50;
  left: 0;
  position: absolute;
  top: 0;
  transform: skewX(-7deg) skewY(-7deg);
  width: 70;
`;

export const StyledTextPrice = styled.Text`
  background-color: transparent;
  color: ${white};
  font-family: ${raleway};
  font-size: 27;
  font-weight: bold;
`;

export const StyledTextCurrency = styled(StyledTextPrice)`
  font-size: 15;
  padding-top: 7;
`;
