// Externals
import styled from 'styled-components/native';

// Config
import { red } from '../../config/colors';
import { source } from '../../config/fonts';
import { heightCTA } from '../../config/sizes';

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
