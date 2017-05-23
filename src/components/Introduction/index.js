// Externals
import React, { PropTypes } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';

// Components
import FlexView from '../FlexView';

// Styles
import videoStyles from './styles';

// Video
import video from './video.mp4';

const propTypes = {
  onClose: PropTypes.func.isRequired,
};

const Introduction = props => (
  <FlexView>
    <TouchableWithoutFeedback onPress={props.onClose}>
      <Video
        resizeMode="cover"
        source={video}
        style={videoStyles}
      />
    </TouchableWithoutFeedback>
  </FlexView>
);

Introduction.propTypes = propTypes;

export default Introduction;
