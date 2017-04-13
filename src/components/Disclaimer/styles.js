// Externals
import styled from 'styled-components/native';

// Shared
import { greyDark } from '../../shared/colors';
import { source } from '../../shared/fonts';
import {
  heightCTA,
  spaceNormal,
} from '../../shared/sizes';

export default styled.Text`
  color: ${greyDark};
  font-family: ${source};
  font-size: 14;
  font-style: italic;
  margin-bottom: ${heightCTA};
  margin-top: ${spaceNormal};
  text-align: center;
`;
