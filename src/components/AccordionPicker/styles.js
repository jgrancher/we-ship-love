// Externals
import styled from 'styled-components/native';

// Config
import { spaceSmall } from '../../config/sizes';
import {
  grey,
  greyLight,
  lightest,
} from '../../config/colors';

export const StyledTouchableHighlight = styled.TouchableHighlight`
  background-color: ${lightest};
  border-width: 1;
  border-color: ${lightest};
  height: 48;
  padding-left: ${spaceSmall};
`;

export const StyledView = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: row;
`;

export const StyledText = styled.Text`
  color: ${grey};
  flex: 1;
  font-size: 16;
  text-align: center;
`;

export const StyledImage = styled.Image`
  margin-right: 10;
  margin-top: ${props => (props.open ? 0 : 2)};
  transform: rotate(${props => (props.open ? 180 : 0)}deg);
`;

export const underlayColor = greyLight;
