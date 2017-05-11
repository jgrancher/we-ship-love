// Externals
import styled from 'styled-components/native';

// Styles
import {
  black,
  greyLight,
  red,
  turquoise,
  white,
} from '../../styles/colors';

function getColor(type) {
  if (type === 'danger') return red;
  if (type === 'success') return turquoise;
  return greyLight;
}

export const StyledButton = styled.TouchableHighlight`
  align-items: center;
  background-color: ${props => getColor(props.type)};
  flex-grow: 1;
  height: 50;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const StyledText = styled.Text`
  color: ${props => (props.type === 'default' ? black : white)};
`;

export const getUnderlayColor = type => getColor(type);
