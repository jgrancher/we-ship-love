// Externals
import styled from 'styled-components/native';

// Config
import {
  heightCTA,
  heightNavigationBar,
} from '../../config/sizes';

export default styled.ActivityIndicator`
  flex: 1;
  margin-bottom: ${heightCTA};
  margin-top: ${heightNavigationBar};
`;
