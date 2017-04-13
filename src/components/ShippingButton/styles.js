// Externals
import styled from 'styled-components/native';

// Shared
import { source } from '../../shared/fonts';
import {
  black,
  greyDark,
  lightest,
} from '../../shared/colors';

export const StyledButton = styled.TouchableHighlight`
  background-color: ${lightest};
  margin: 40 20 0 45;
  padding: 10 20 10 60;
`;

export const StyledText = styled.Text`
  color: ${props => (props.active ? black : greyDark)};
  font-family: ${source};
  font-size: 16;
`;
