// Externals
import styled from 'styled-components/native';

// Styles
import { spaceBig } from '../../styles/sizes';
import {
  turquoise,
  white,
} from '../../styles/colors';

export const StyledButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${props => (props.primary ? turquoise : white)};
  border-color: ${turquoise};
  border-style: solid;
  border-width: 2;
  height: 50;
  justify-content: center;
  padding-left: ${spaceBig};
  padding-right: ${spaceBig};
`;

export const StyledText = styled.Text`
  color: ${props => (props.primary ? white : turquoise)};
`;
