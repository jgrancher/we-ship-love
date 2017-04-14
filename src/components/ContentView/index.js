// Externals
import React, { PropTypes } from 'react';

// Components
import FlexView from '../FlexView';

// Shared
import { heightContent } from '../../shared/sizes';

// Utils
import { childrenShape } from '../../utils/shapes';

const propTypes = {
  children: childrenShape.isRequired,
  centered: PropTypes.bool,
};

const defaultProps = {
  centered: false,
};

const ContentView = props => (
  <FlexView
    centered={props.centered}
    height={heightContent}
  >
    {props.children}
  </FlexView>
);

ContentView.propTypes = propTypes;
ContentView.defaultProps = defaultProps;

export default ContentView;
