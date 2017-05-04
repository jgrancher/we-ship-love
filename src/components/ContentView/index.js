// Externals
import React from 'react';

// Components
import FlexView from '../FlexView';

// Styles
import height from './styles';

// Utils
import { childrenShape } from '../../utils/shapes';

const propTypes = {
  children: childrenShape.isRequired,
};

// ContentView is just a FlexView component
// containing a default height (equal to heightContent in sizes.js)
const ContentView = props => (
  <FlexView
    {...props}
    height={height}
  >
    {props.children}
  </FlexView>
);

ContentView.propTypes = propTypes;

export default ContentView;
