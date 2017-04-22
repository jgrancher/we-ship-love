// Externals
import styled from 'styled-components/native';

// Styles
import { source } from '../../styles/fonts';
import {
  greyDark,
  greyLight,
  lightest,
} from '../../styles/colors';

export const StyledPicker = styled.Picker`
  background-color: ${lightest};
  border-top-color: ${greyLight};
  border-top-width: 0.5;
`;

export const itemStyle = {
  color: greyDark,
  fontFamily: source,
  fontSize: 16,
};
