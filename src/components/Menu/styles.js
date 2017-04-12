// Externals
import styled from 'styled-components/native';

// Config
import {
  brown,
  turquoise,
  white,
} from '../../config/colors';
import {
  heightStatusBar,
  heightWindow,
  spaceSmall,
  spaceNormal,
  spaceBig,
  widthMenu,
  widthWindow,
} from '../../config/sizes';

export const StyledViewContainer = styled.View`
  background-color: ${brown};
  height: ${heightWindow};
  margin-top: ${heightStatusBar};
  width: ${widthWindow};
`;

export const StyledViewItems = styled.View`
  border-top-color: ${turquoise};
  border-top-width: 5;
`;

export const StyledViewLinks = styled.View`
  flex: 1;
  padding: ${spaceNormal};
  width: ${widthMenu};
`;

export const StyledViewSocials = styled.View`
  align-items: flex-start;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledLink = styled.TouchableOpacity`
  align-self: center;
  border-bottom-color: ${white};
  border-bottom-width: 1;
  margin-bottom: ${spaceBig};
  padding: ${spaceSmall};
`;
