// Externals
import React, { PropTypes } from 'react';
import { Modal as NativeModal } from 'react-native';

// Components
import FlexView from '../FlexView';

const propTypes = {
  animationType: PropTypes.oneOf(['fade', 'none', 'slide']),
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool,
};

const defaultProps = {
  animationType: 'slide',
  visible: false,
};

const Modal = props => (
  <NativeModal
    animationType={props.animationType}
    visible={props.visible}
  >
    <FlexView>
      {props.children}
    </FlexView>
  </NativeModal>
);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
