// Externals
import React, { PropTypes } from 'react';
import Collapsible from 'react-native-collapsible';
import { View } from 'react-native';

// Components
import Picker from '../Picker';

// Styles
import {
  StyledImage,
  StyledText,
  StyledTouchableHighlight,
  StyledView,
  underlayColor,
} from './styles';

// Images
import iconChevron from '../../images/icon-chevron.png';

// Utils
import {
  inputShape,
  optionShape,
} from '../../utils/shapes';

class AccordionPicker extends React.Component {

  static propTypes = {
    input: inputShape.isRequired,
    options: PropTypes.arrayOf(optionShape).isRequired,
    selectedValue: PropTypes.string,
  };

  static defaultProps = {
    selectedValue: null,
  };

  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { input, ...pickerProps } = this.props;
    const option = this.props.options.find(o => o.value === input.value);

    return (
      <View>
        <StyledTouchableHighlight
          onPress={this.toggleOpen}
          underlayColor={underlayColor}
        >
          <StyledView>
            <StyledText>
              {option && option.label}
            </StyledText>
            <StyledImage
              open={this.state.open}
              source={iconChevron}
            />
          </StyledView>
        </StyledTouchableHighlight>
        <Collapsible collapsed={!this.state.open}>
          <Picker
            {...pickerProps}
            onValueChange={input.onChange}
            options={this.props.options}
            selectedValue={input.value}
          />
        </Collapsible>
      </View>
    );
  }

}

export default AccordionPicker;
