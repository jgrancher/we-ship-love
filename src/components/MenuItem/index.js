// Externals
import React, { PropTypes } from 'react';
import { TouchableHighlight } from 'react-native';

// Styles
import {
  StyledImage,
  StyledText,
  StyledView,
  underlayColor,
} from './styles';

// Utils
import { routeShape } from '../../utils/shapes';

class MenuItem extends React.Component {

  static propTypes = {
    route: routeShape.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  onPress = () => {
    this.props.onPress(this.props.route);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this.onPress}
        underlayColor={underlayColor}
      >
        <StyledView>
          <StyledImage source={this.props.route.icon} />
          <StyledText>
            {this.props.route.title}
          </StyledText>
        </StyledView>
      </TouchableHighlight>
    );
  }

}

export default MenuItem;
