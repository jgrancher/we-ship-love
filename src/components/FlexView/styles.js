// Externals
import styled from 'styled-components/native';

export default styled.View`
  align-items: ${props => props.alignItems};
  background-color: ${props => props.background};
  flex-basis: ${props => props.flexBasis};
  flex-direction: ${props => props.flexDirection};
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => props.flexShrink};
  height: ${props => props.height};
  justify-content: ${props => props.justifyContent};
`;
