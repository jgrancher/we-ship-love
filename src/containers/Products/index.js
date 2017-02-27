// Externals
import React, { PropTypes } from 'react';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Image,
  View,
} from 'react-native';

// Containers & components
import CallToAction from '../../components/CallToAction';
import LoadingIndicator from '../../components/LoadingIndicator';
import RefreshButton from '../../components/RefreshButton';

// Actions
import {
  addToCart,
  fetchProducts,
} from './actions';

// Images
import btnSliderNext from '../../images/btn-slider-next.png';
import btnSliderPrev from '../../images/btn-slider-previous.png';

// Helpers
import { productShape } from '../../utils/shapes';

// Styles
import appStyles from '../../styles/base/application';
import styles from '../../styles/components/swiper';
import * as sizes from '../../config/sizes';

class Products extends React.Component {

  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    products: PropTypes.arrayOf(productShape),
    pushNextScene: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isFetching: false,
    products: [],
  };

  constructor(props) {
    super(props);

    // Calculated height of screen
    this.height = sizes.heightScene - sizes.heightCTA;
  }

  componentWillMount() {
    this.props.fetchProducts()
      .catch(() => this.setState({ isFetching: false }));
  }

  onNextStep = () => {
    const product = this.props.products[this.swiper.state.index];

    // Add the currently diplayed product to cart and go to the next screen
    this.props.addToCart(product);
    this.props.pushNextScene();
  }

  renderContent() {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    if (!this.props.isFetching && !this.props.products.length) {
      return <RefreshButton onPress={this.props.fetchProducts} />;
    }

    return (
      <Swiper
        buttonWrapperStyle={{ height: this.height }}
        height={sizes.heightSwiper}
        nextButton={<Image source={btnSliderNext} />}
        prevButton={<Image source={btnSliderPrev} />}
        ref={(s) => { this.swiper = s; }}
        showsButtons
        showsPagination={false}
      >
        {this.props.products.map(item => (
          <Image
            key={item.id}
            source={PRODUCTS[item.id]}
            style={styles.slide}
          />
        ))}
      </Swiper>
    );
  }

  render() {
    const hasProducts = this.props.products.length > 0;

    return (
      <View style={{ flex: 1 }}>
        <View style={appStyles.content}>
          {this.renderContent()}
        </View>
        <CallToAction
          enabled={hasProducts}
          onPress={this.onNextStep}
        />
      </View>
    );
  }

}

export default connect(
  state => ({
    isFetching: state.products.isFetching,
    products: state.products.data,
  }),
  dispatch => bindActionCreators({
    addToCart,
    fetchProducts,
  }, dispatch),
)(Products);
