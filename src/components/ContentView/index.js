// Externals
import React, { PropTypes } from 'react';

// Components
import FlexView from '../FlexView';

// Styles
import height from './styles';

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
    height={height}
  >
    {props.children}
  </FlexView>
);

ContentView.propTypes = propTypes;
ContentView.defaultProps = defaultProps;

export default ContentView;
