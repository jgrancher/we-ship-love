// Externals
import styled from 'styled-components/native';

// Styles
import { greyDark } from '../../styles/colors';
import { source } from '../../styles/fonts';
import { spaceNormal } from '../../styles/sizes';

export default styled.Text`
  color: ${greyDark};
  font-family: ${source};
  font-size: 14;
  font-style: italic;
  margin-bottom: ${spaceNormal};
  margin-top: ${spaceNormal};
  text-align: center;
`;
