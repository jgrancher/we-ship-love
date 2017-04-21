// Externals
import styled from 'styled-components/native';

export default styled.Image`
  align-self: center;
  flex-grow: ${props => (props.height === 0 ? 1 : 0)};
  height: ${props => props.height};
  width: ${props => props.width};
`;
