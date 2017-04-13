// Externals
import styled from 'styled-components/native';

// Shared
import { source } from '../../shared/fonts';
import {
  greyDark,
  greyLight,
  lightest,
} from '../../shared/colors';

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
