// Externals
import styled from 'styled-components/native';

// Styles
import { greyDark } from '../../styles/colors';
import { source } from '../../styles/fonts';
import {
  heightCTA,
  spaceNormal,
} from '../../styles/sizes';

export default styled.Text`
  color: ${greyDark};
  font-family: ${source};
  font-size: 14;
  font-style: italic;
  margin-bottom: ${heightCTA};
  margin-top: ${spaceNormal};
  text-align: center;
`;
