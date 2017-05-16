// Styles
import { source } from '../../styles/fonts';
import {
  brown,
  turquoise,
} from '../../styles/colors';
import {
  spaceNormal,
  spaceBig,
} from '../../styles/sizes';

// CSS styles injected into WebView
export default `
  body { font-family: ${source}, sans-serif; padding: ${spaceNormal}px; }
  h1, strong { color: ${turquoise}; }
  h1 { font-size: 22px; margin: 0 0 ${spaceBig}px; }
  strong { display: block; font-size: 17px; margin: 0 0 ${spaceNormal}px; }
  p { color: ${brown}; font-size: 16px; margin-bottom: ${spaceBig}px; }
  img { height: auto; max-width: 100%; }
  img:not(:last-of-type) { margin-bottom: ${spaceBig}px; }
`;
