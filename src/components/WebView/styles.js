// Externals
import styled from 'styled-components/native';

// Config
import { source } from '../../config/fonts';
import {
  brown,
  turquoise,
} from '../../config/colors';
import {
  spaceNormal,
  spaceBig,
} from '../../config/sizes';

export const StyledWebView = styled.WebView`
  margin-bottom: 80;
`;

// CSS styles injected into WebView
export const embeddedStyles = `
  body { font-family: ${source}, sans-serif; padding: ${spaceNormal}px; }
  h1, strong { color: ${turquoise}; }
  h1 { font-size: 22px; margin: 0 0 ${spaceBig}px; }
  strong { display: block; font-size: 17px; margin: 0 0 ${spaceNormal}px; }
  p { color: ${brown}; font-size: 16px; margin-bottom: ${spaceBig}px; }
  img { height: auto; max-width: 100%; }
  img:not(:last-of-type) { margin-bottom: ${spaceBig}px; }
`;
