// Externals
import styled from 'styled-components/native';

// Shared
import {
  grey,
  lightest,
} from '../../shared/colors';
import {
  spaceBig,
  spaceSmall,
} from '../../shared/sizes';

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
