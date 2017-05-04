// Externals
import React, { PropTypes } from 'react';
import { Modal as NativeModal } from 'react-native';

// Components
import FlexView from '../FlexView';

// Styles
import {
  StyledViewContent,
  StyledViewOverlay,
} from './styles';

const propTypes = {
  animationType: PropTypes.oneOf(['fade', 'none', 'slide']),
  children: PropTypes.element.isRequired,
  transparent: PropTypes.bool,
};

const defaultProps = {
  animationType: 'fade',
  transparent: true,
};

const Modal = props => (
  <NativeModal
    animationType={props.animationType}
    transparent={props.transparent}
  >
    <StyledViewOverlay />
    <FlexView
      alignItems="center"
      justifyContent="center"
    >
      <StyledViewContent>
        {props.children}
      </StyledViewContent>
    </FlexView>
  </NativeModal>
);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
