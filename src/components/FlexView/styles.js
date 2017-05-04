// Externals
import styled from 'styled-components/native';

export default styled.View`
  align-items: ${props => props.alignItems};
  background-color: ${props => props.background};
  flex-basis: ${props => props.height};
  flex-direction: ${props => props.flexDirection};
  flex-grow: ${props => (props.height ? 0 : 1)};
  flex-shrink: ${props => (props.height ? 0 : 1)};
  height: ${props => props.height};
  justify-content: ${props => props.justifyContent};
`;
