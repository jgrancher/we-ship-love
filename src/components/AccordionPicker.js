// Modules
import React from 'react';
import { Image, Picker, Text, TouchableHighlight, View } from 'react-native';
import Collapsible from 'react-native-collapsible';

// Images
import iconChevron from '../images/icon-chevron.png';

// Styles
import styles from '../styles/components/accordionPicker';
import { greyLight } from '../config/colors';

const { arrayOf, func, number, oneOfType, shape, string } = React.PropTypes;

const optionShape = shape({
    text: oneOfType([string, number]),
    value: oneOfType([string, number]),
});
const defaultOption = {
    text: 'Veuillez sélectionner un élément',
    value: '',
};

class AccordionPicker extends React.Component {

    static propTypes = {
        defaultValue: optionShape,
        options: arrayOf(optionShape).isRequired,
        onChange: func,
    };

    static defaultProps = {
        defaultValue: defaultOption,
        options: [defaultOption],
        onChange: () => {},
    };

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    state = {
        open: false,
    };

    onChange(value) {
        this.props.onChange(value);
    }

    toggleOpen() {
        this.setState({ open: !this.state.open });
    }

    render() {
        const { defaultValue, options } = this.props;
        const { open } = this.state;

        const styleIcon = [styles.pickerIcon, open ? styles.pickerOpenIcon : null];

        return (
            <View>
                <TouchableHighlight
                    onPress={this.toggleOpen}
                    style={styles.pickerTouchable}
                    underlayColor={greyLight}
                >
                    <View style={styles.pickerTouchableContent}>
                        <Text style={styles.pickerText}>{defaultValue.text}</Text>
                        <Image source={iconChevron} style={styleIcon} />
                    </View>
                </TouchableHighlight>
                <Collapsible collapsed={!open}>
                    <Picker
                        onValueChange={this.onChange}
                        selectedValue={defaultValue.value}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                    >
                        {options.map((option, i) =>
                            <Picker.Item key={i} label={option.text} value={option.value} />
                        )}
                    </Picker>
                </Collapsible>
            </View>
        );
    }

}

export default AccordionPicker;
