// Externals
import styled from 'styled-components/native';

// Styles
import { white } from '../../styles/colors';
import { raleway } from '../../styles/fonts';
import {
  heightCTA,
  widthWindow,
} from '../../styles/sizes';

export const StyledButton = styled.TouchableHighlight`
  bottom: 0;
  height: ${heightCTA};
  left: 0;
  position: absolute;
  width: ${widthWindow};
`;

export const StyledImageBackground = styled.Image`
  bottom: 0;
  left: 0;
  position: absolute;
  width: ${widthWindow};
`;

export const StyledView = styled.View`
  align-items: center;
  flex-direction: row;
  flex: 1;
  justify-content: ${props => (props.centered ? 'center' : 'space-between')};
  padding-left: 15;
  padding-top: 30;
`;

export const StyledTextStep = styled.Text`
  color: ${white};
  font-family: ${raleway};
  font-size: 46;
  font-weight: bold;
`;

export const StyledTextTitle = styled.Text`
  color: ${white};
  font-family: ${raleway};
  font-size: 17;
  padding-top: 15;
  text-align: center;
`;

export const StyledTextSubtitle = styled(StyledTextTitle)`
  font-size: 13;
  padding-top: 0;
`;

export const StyledTextPrice = styled(StyledTextSubtitle)`
  font-size: 24;
`;

export const StyledImageArrow = styled.Image`
  margin-right: 5;
  margin-top: 15;
`;
