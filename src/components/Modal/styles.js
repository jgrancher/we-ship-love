// Externals
import styled from 'styled-components/native';

// Styles
import {
  white,
  black,
} from '../../styles/colors';
import {
  heightWindow,
  widthWindow,
  spaceNormal,
  spaceBig,
} from '../../styles/sizes';

export const StyledViewOverlay = styled.View`
  background-color: ${black};
  flex: 1;
  height: ${heightWindow};
  left: 0;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: ${widthWindow};
`;

export const StyledViewContent = styled.View`
  background-color: ${white};
  height: ${widthWindow - spaceBig - spaceBig};
  padding: ${spaceNormal};
  width: ${widthWindow - spaceNormal - spaceNormal};
`;
