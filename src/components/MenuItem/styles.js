// Externals
import styled from 'styled-components/native';

// Config
import { raleway } from '../../config/fonts';
import { spaceNormal } from '../../config/sizes';
import {
  brownDark,
  white,
} from '../../config/colors';

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
