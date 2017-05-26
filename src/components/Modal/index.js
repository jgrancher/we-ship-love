// Externals
import React, { PropTypes } from 'react';
import {
  Modal as NativeModal,
  StatusBar,
} from 'react-native';

// Components
import FlexView from '../FlexView';

// Styles
import {
  backgroundColor,
  barStyle,
} from './styles';

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
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle={barStyle}
    />
    <FlexView>
      {props.children}
    </FlexView>
  </NativeModal>
);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
