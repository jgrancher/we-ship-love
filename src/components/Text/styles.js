// Externals
import styled from 'styled-components/native';

// Shared
import { brownDark } from '../../shared/colors';
import { source } from '../../shared/fonts';
import { spaceBig } from '../../shared/sizes';

export default styled.Text`
  font-family: ${source};
  font-size: 18;
  color: ${brownDark};
  text-align: ${props => props.align};
  margin-bottom: ${props => (props.spaced ? spaceBig : 0)};
`;
