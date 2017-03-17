// Externals
import React, { PropTypes } from 'react';
import { Picker as NativePicker } from 'react-native';

// Styles
import {
  itemStyle,
  StyledPicker,
} from './styles';

// Utils
import { optionShape } from '../../utils/shapes';

const propTypes = {
  onValueChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(optionShape).isRequired,
  selectedValue: PropTypes.string,
};

const defaultProps = {
  selectedValue: null,
};

const Picker = props => (
  <StyledPicker
    onValueChange={props.onValueChange}
    selectedValue={props.selectedValue}
    itemStyle={itemStyle}
  >
    {props.options.map(option => (
      <NativePicker.Item
        key={option.value}
        {...option}
      />
    ))}
  </StyledPicker>
);

Picker.propTypes = propTypes;
Picker.defaultProps = defaultProps;

export default Picker;
