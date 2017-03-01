// Externals
import React, { PropTypes } from 'react';
import Collapsible from 'react-native-collapsible';
import {
  Image,
  Picker,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

// Images
import iconChevron from '../../images/icon-chevron.png';

// Utils
import { optionShape } from '../../utils/shapes';

// Styles
import styles from '../../styles/components/accordionPicker';
import { greyLight } from '../../config/colors';

class AccordionPicker extends React.Component {

  static propTypes = {
    defaultValue: optionShape,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(optionShape).isRequired,
  };

  static defaultProps = {
    defaultValue: {
      text: 'Veuillez sélectionner un élément',
      value: '',
    },
    onChange: () => {},
  };

  state = {
    open: false,
  };

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styleIcon = [styles.pickerIcon, this.state.open && styles.pickerOpenIcon];

    return (
      <View>
        <TouchableHighlight
          onPress={this.toggleOpen}
          style={styles.pickerTouchable}
          underlayColor={greyLight}
        >
          <View style={styles.pickerTouchableContent}>
            <Text style={styles.pickerText}>
              {this.props.defaultValue.text}
            </Text>
            <Image
              source={iconChevron}
              style={styleIcon}
            />
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={!this.state.open}>
          <Picker
            onValueChange={this.props.onChange}
            selectedValue={this.props.defaultValue.value}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            {this.props.options.map(option => (
              <Picker.Item
                key={option.value}
                label={option.text}
                value={option.value}
              />
            ))}
          </Picker>
        </Collapsible>
      </View>
    );
  }

}

export default AccordionPicker;
