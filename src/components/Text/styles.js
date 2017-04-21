// Externals
import styled from 'styled-components/native';

// Shared
import { brownDark } from '../../shared/colors';
import { source } from '../../shared/fonts';
import { spaceNormal } from '../../shared/sizes';

export default styled.Text`
  color: ${brownDark};
  font-family: ${source};
  font-size: ${props => props.size};
  margin-bottom: ${props => (props.spaced ? spaceNormal : 0)};
  margin-left: ${spaceNormal};
  margin-right: ${spaceNormal};
  margin-top: ${spaceNormal};
  text-align: ${props => props.align};
`;
