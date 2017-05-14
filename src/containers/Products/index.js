// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Containers & components
import Banner from '../../components/Banner';
import ContentView from '../../components/ContentView';
import FlexView from '../../components/FlexView';
import LoadingIndicator from '../../components/LoadingIndicator';
import ProgressiveImage from '../../components/ProgressiveImage';
import RefreshButton from '../../components/RefreshButton';
import Slider from '../../components/Slider';

// Actions
import fetchProducts from './actions';
import { setOrderProduct } from '../App/actions';

// Utils
import { getResizedImageSource } from '../../utils/helpers';
import {
  productShape,
  stepShape,
} from '../../utils/shapes';

class Products extends React.Component {

  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    products: PropTypes.arrayOf(productShape),
    pushNextScene: PropTypes.func.isRequired,
    setOrderProduct: PropTypes.func.isRequired,
    step: stepShape.isRequired,
  };

  static defaultProps = {
    products: [],
  };

  state = {
    index: 0,
  };

  componentWillMount() {
    this.props.fetchProducts();
  }

  onIndexChange = (index) => {
    this.setState({ index });
  }

  onNextStep = () => {
    const product = this.props.products[this.state.index];

    // Set the order's product and go to the next screen
    this.props.setOrderProduct(product);
    this.props.pushNextScene();
  }

  renderContent() {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    if (!this.props.products.length) {
      return <RefreshButton onPress={this.props.fetchProducts} />;
    }

    return (
      <Slider onIndexChange={this.onIndexChange}>
        {this.props.products.map(item => (
          <ProgressiveImage
            key={item.product_id}
            source={getResizedImageSource(item.images[0].src)}
            thumbnailSource={getResizedImageSource(item.images[0].src, 'thumb')}
            widthRatio={0.85}
          />
        ))}
      </Slider>
    );
  }

  render() {
    // Enable CTA only if there are products
    const hasProducts = this.props.products.length > 0;

    // If products displayed, get the title of the product
    const productTitle = hasProducts ? this.props.products[this.state.index].title : null;

    return (
      <FlexView>
        <ContentView>
          {this.renderContent()}
        </ContentView>
        <Banner
          {...this.props.step}
          enabled={hasProducts}
          onPress={this.onNextStep}
          text={productTitle}
        />
      </FlexView>
    );
  }

}

export default connect(
  state => ({
    isFetching: state.products.isFetching,
    products: state.products.data,
  }),
  dispatch => bindActionCreators({
    fetchProducts,
    setOrderProduct,
  }, dispatch),
)(Products);
