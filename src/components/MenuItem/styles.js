// Externals
import styled from 'styled-components/native';

// Styles
import { raleway } from '../../styles/fonts';
import { spaceNormal } from '../../styles/sizes';
import {
  brownDark,
  white,
} from '../../styles/colors';

export const StyledView = styled.View`
  border-bottom-color: ${brownDark};
  border-bottom-width: 2;
  flex-direction: row;
  padding: ${spaceNormal};
`;

export const StyledImage = styled.Image`
  margin-right: ${spaceNormal};
  width: 20;
`;

export const StyledText = styled.Text`
  color: ${white};
  font-family: ${raleway};
  font-size: 17;
  font-weight: 600;
`;

export const underlayColor = brownDark;
