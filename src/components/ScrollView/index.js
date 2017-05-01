// Externals
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Styles
import { contentContainerStyle } from './styles';

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
    const styles = {
      ...contentContainerStyle,
      flexGrow: this.state.isOpen ? 0 : 1,
      paddingVertical: this.state.isOpen ? 0 : contentContainerStyle.paddingVertical,
    };

    return (
      <KeyboardAwareScrollView
        centerContent={!this.state.isOpen}
        contentContainerStyle={styles}
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
