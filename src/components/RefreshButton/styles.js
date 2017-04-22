// Externals
import styled from 'styled-components/native';

// Styles
import { red } from '../../styles/colors';
import { source } from '../../styles/fonts';
import { heightCTA } from '../../styles/sizes';

export const StyledButton = styled.TouchableHighlight`
  align-items: center;
  flex: 1;
  justify-content: center;
  margin-bottom: ${heightCTA};
`;

export const StyledText = styled.Text`
  color: ${red};
  font-family: ${source};
  font-size: 18;
  text-align: center;
`;
