// Externals
import React, { PropTypes } from 'react';

// Styles
import StyledView from './styles';

// Utils
import { childrenShape } from '../../utils/shapes';

class FlexView extends React.Component {

  static propTypes = {
    children: childrenShape.isRequired,
    height: PropTypes.number,
  }

  static defaultProps = {
    height: 0,
  };

  setNativeProps(nativeProps) {
    this.view.setNativeProps(nativeProps);
  }

  render() {
    return (
      <StyledView
        {...this.props}
        height={this.props.height}
        ref={(c) => { this.view = c; }}
      >
        {this.props.children}
      </StyledView>
    );
  }
}

export default FlexView;
