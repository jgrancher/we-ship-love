// Externals
import React, { PropTypes } from 'react';
import Swiper from 'react-native-swiper';
import { Image } from 'react-native';

// Images
import arrowLeft from './arrow-left.png';
import arrowRight from './arrow-right.png';

// Utils
import {
  childrenShape,
  stylesShape,
} from '../../utils/shapes';

// Styles
import { height } from './styles';

class Slider extends React.Component {

  static propTypes = {
    buttonWrapperStyle: stylesShape,
    children: childrenShape.isRequired,
    index: PropTypes.number,
    loadMinimal: PropTypes.bool,
    onIndexChange: PropTypes.func,
    nextButton: PropTypes.element,
    prevButton: PropTypes.element,
    showsButtons: PropTypes.bool,
    showsPagination: PropTypes.bool,
  };

  static defaultProps = {
    buttonWrapperStyle: { height },
    index: 0,
    loadMinimal: false,
    onIndexChange: () => {},
    nextButton: <Image source={arrowRight} />,
    prevButton: <Image source={arrowLeft} />,
    showsButtons: true,
    showsPagination: false,
  };

  onMomentumScrollEnd = (e, state) => {
    this.props.onIndexChange(state.index);
  }

  render() {
    return (
      <Swiper
        buttonWrapperStyle={this.props.buttonWrapperStyle}
        index={this.props.index}
        loadMinimal={this.props.loadMinimal}
        nextButton={this.props.nextButton}
        onMomentumScrollEnd={this.onMomentumScrollEnd}
        prevButton={this.props.prevButton}
        showsButtons={this.props.showsButtons}
        showsPagination={this.props.showsPagination}
      >
        {this.props.children}
      </Swiper>
    );
  }
}

export default Slider;
