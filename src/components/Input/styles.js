// Externals
import styled from 'styled-components/native';

// Styles
import { spaceSmall } from '../../styles/sizes';
import {
  grey,
  lightest,
  red,
} from '../../styles/colors';

export default styled.TextInput`
  background-color: ${lightest};
  border-width: 1;
  border-color: ${props => (props.showError ? red : lightest)};
  color: ${grey};
  height: 48;
  margin-bottom: ${spaceSmall};
  padding-left: ${spaceSmall};
  padding-right: ${spaceSmall};
  font-size: 16;
  text-align: center;
`;
