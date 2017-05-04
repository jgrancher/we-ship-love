// Externals
import React, { PropTypes } from 'react';

// Styles
import StyledView from './styles';

// Utils
import { childrenShape } from '../../utils/shapes';

// FlexView is a component that has some default attributes to help building layouts.
// Its main goal is to provide a parent component to most of the views, with flex styles.
class FlexView extends React.Component {

  static propTypes = {
    alignItems: PropTypes.oneOf(['center', 'stretch']),
    background: PropTypes.string,
    children: childrenShape,
    flexBasis: PropTypes.number,
    flexDirection: PropTypes.oneOf(['row', 'column']),
    height: PropTypes.number,
    justifyContent: PropTypes.oneOf(['flex-start', 'center', 'space-between']),
  };

  static defaultProps = {
    alignItems: 'stretch',
    background: 'transparent',
    children: null,
    flexBasis: 0,
    flexDirection: 'column',
    height: 0,
    horizontal: false,
    justifyContent: 'flex-start',
  };

  setNativeProps(nativeProps) {
    this.view.setNativeProps(nativeProps);
  }

  render() {
    // If a flexBasis or height is provided, don't make the view stretch.
    const flexBasis = this.props.flexBasis || this.props.height;
    const flexGrow = flexBasis ? 0 : 1;
    const flexShrink = flexBasis ? 0 : 1;

    return (
      <StyledView
        {...this.props}
        alignItems={this.props.alignItems}
        background={this.props.background}
        flexBasis={flexBasis}
        flexDirection={this.props.flexDirection}
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        height={this.props.height}
        justifyContent={this.props.justifyContent}
        ref={(c) => { this.view = c; }}
      >
        {this.props.children}
      </StyledView>
    );
  }
}

export default FlexView;
