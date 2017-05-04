// Externals
import styled from 'styled-components/native';

// Styles
import { brownDark } from '../../styles/colors';
import { source } from '../../styles/fonts';
import { spaceNormal } from '../../styles/sizes';

export default styled.Text`
  color: ${brownDark};
  font-family: ${source};
  font-size: ${props => props.fontSize};
  margin-bottom: ${props => (props.marginBottom ? spaceNormal : 0)};
  margin-left: ${spaceNormal};
  margin-right: ${spaceNormal};
  margin-top: ${spaceNormal};
  text-align: ${props => props.align};
`;
