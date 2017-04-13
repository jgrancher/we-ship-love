// Externals
import React, { PropTypes } from 'react';
import { TouchableHighlight } from 'react-native';

// Styles
import {
  StyledImage,
  StyledText,
  StyledView,
} from './styles';

// Shared
import { brownDark } from '../../shared/colors';

// Utils
import { menuItemShape } from '../../utils/shapes';

class MenuItem extends React.Component {

  static propTypes = {
    item: menuItemShape.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  onPress = () => {
    this.props.onPress(this.props.item);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.onPress}
        underlayColor={brownDark}
      >
        <StyledView>
          <StyledImage source={this.props.item.icon} />
          <StyledText>
            {this.props.item.title}
          </StyledText>
        </StyledView>
      </TouchableHighlight>
    );
  }

}

export default MenuItem;
