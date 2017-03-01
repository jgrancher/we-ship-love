// Externals
import React from 'react';

// Components
import FlexView from '../FlexView';

// Config
import { heightContent } from '../../config/sizes';

// Utils
import { childrenShape } from '../../utils/shapes';

const propTypes = {
  children: childrenShape.isRequired,
};

const ContentView = props => (
  <FlexView height={heightContent}>
    {props.children}
  </FlexView>
);

ContentView.propTypes = propTypes;

export default ContentView;
