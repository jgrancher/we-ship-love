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
  StyledButton,
  StyledView,
  underlayColor,
} from './styles';

// Images
import chevron from './chevron.png';

// Utils
import {
  inputShape,
  optionShape,
} from '../../utils/shapes';

class AccordionPicker extends React.Component {

  static propTypes = {
    input: inputShape.isRequired,
    options: PropTypes.arrayOf(optionShape).isRequired,
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
        <StyledButton
          onPress={this.toggleOpen}
          underlayColor={underlayColor}
        >
          <StyledView>
            <StyledText>
              {option && option.label}
            </StyledText>
            <StyledImage
              open={this.state.open}
              source={chevron}
            />
          </StyledView>
        </StyledButton>
        <Collapsible collapsed={!this.state.open}>
          <Picker
            {...pickerProps}
            onValueChange={input.onChange}
            selectedValue={input.value}
          />
        </Collapsible>
      </View>
    );
  }

}

export default AccordionPicker;
