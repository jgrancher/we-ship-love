// Externals
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Styles
import contentContainerStyle from './styles';

// Shared
import {
  heightCTA,
  spaceNormal,
} from '../../shared/sizes';

// Shapes
import { childrenShape } from '../../utils/shapes';

class ScrollView extends React.Component {

  static propTypes = {
    children: childrenShape.isRequired,
  };

  state = {
    isOpen: false,
  };

  onKeyboardWillHide = () => {
    this.setState({ isOpen: false });
  }

  onKeyboardWillShow = () => {
    this.setState({ isOpen: true });
  }

  render() {
    const dynamicStyle = {
      paddingBottom: this.state.isOpen ? 0 : heightCTA,
      paddingTop: this.state.isOpen ? 0 : spaceNormal,
    };

    return (
      <KeyboardAwareScrollView
        centerContent={!this.state.isOpen}
        contentContainerStyle={{ ...contentContainerStyle, ...dynamicStyle }}
        keyboardDismissMode="interactive"
        onKeyboardWillHide={this.onKeyboardWillHide}
        onKeyboardWillShow={this.onKeyboardWillShow}
      >
        {this.props.children}
      </KeyboardAwareScrollView>
    );
  }
}

export default ScrollView;
