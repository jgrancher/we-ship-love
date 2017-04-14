// Externals
import styled from 'styled-components/native';

// Shared
import { grey } from '../../shared/colors';
import { spaceBig } from '../../shared/sizes';

export const StyledButton = styled.TouchableOpacity`
  margin-bottom: ${spaceBig};
`;

export const StyledText = styled.Text`
  color: ${grey};
  font-size: 10;
  position: absolute;
  text-align: center;
  top: -20;
  width: 124;
`;
