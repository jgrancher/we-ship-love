// Externals
import styled from 'styled-components/native';

// Config
import { greyDark } from '../../config/colors';
import { source } from '../../config/fonts';
import {
  heightCTA,
  spaceNormal,
} from '../../config/sizes';

export default styled.Text`
  color: ${greyDark};
  font-family: ${source};
  font-size: 14;
  font-style: italic;
  margin-bottom: ${heightCTA};
  margin-top: ${spaceNormal};
  text-align: center;
`;
