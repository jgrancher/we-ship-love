// Externals
import styled from 'styled-components/native';

// Shared
import { red } from '../../shared/colors';
import { source } from '../../shared/fonts';
import { heightCTA } from '../../shared/sizes';

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
