// Externals
import styled from 'styled-components/native';

// Styles
import {
  heightContent,
  widthWindow,
} from '../../styles/sizes';

export const StyledImage = styled.Image`
  align-self: center;
  flex-grow: ${props => (props.height === 0 ? 1 : 0)};
  height: ${props => props.height};
  width: ${props => props.width};
`;

export const height = heightContent;

export const width = widthWindow;
