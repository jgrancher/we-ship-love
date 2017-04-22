// Externals
import styled from 'styled-components/native';

// Styles
import { source } from '../../styles/fonts';
import {
  black,
  greyDark,
  lightest,
} from '../../styles/colors';
import {
  spaceSmall,
  spaceNormal,
  spaceBig,
  widthWindow,
} from '../../styles/sizes';

export const StyledButton = styled.TouchableHighlight`
  background-color: ${lightest};
  margin-left: 45;
  margin-bottom: ${spaceBig};
  padding: ${spaceSmall} ${spaceNormal} ${spaceSmall} ${spaceBig};
  width: ${widthWindow - spaceBig - spaceBig};
`;

export const StyledText = styled.Text`
  color: ${props => (props.active ? black : greyDark)};
  font-family: ${source};
  font-size: 16;
`;

export const underlayColor = lightest;
