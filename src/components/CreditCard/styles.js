// Externals
import styled from 'styled-components/native';

// Config
import {
  grey,
  lightest,
} from '../../config/colors';
import {
  spaceBig,
  spaceSmall,
} from '../../config/sizes';

export const StyledView = styled.View`
  margin-top: ${spaceBig};
`;

export const labelStyle = {

};

export const inputStyle = {
  backgroundColor: lightest,
  borderColor: lightest,
  borderWidth: 1,
  color: grey,
  fontSize: 16,
  height: 48,
  paddingLeft: spaceSmall,
  paddingRight: spaceSmall,
};

export const inputContainerStyle = {
  borderBottomWidth: 1,
  borderBottomColor: lightest,
};
