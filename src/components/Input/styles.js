// Externals
import styled from 'styled-components/native';

// Config
import { spaceSmall } from '../../config/sizes';
import {
  grey,
  lightest,
} from '../../config/colors';

export default styled.TextInput`
  background-color: ${lightest};
  border-width: 1;
  border-color: ${lightest};
  color: ${grey};
  height: 48;
  margin-bottom: ${spaceSmall};
  padding-left: ${spaceSmall};
  padding-right: ${spaceSmall};
  font-size: 16;
  text-align: center;
`;
