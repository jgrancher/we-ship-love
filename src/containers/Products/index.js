// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Containers & components
import CallToAction from '../../components/CallToAction';
import ContentView from '../../components/ContentView';
import FlexView from '../../components/FlexView';
import LoadingIndicator from '../../components/LoadingIndicator';
import Product from '../../components/Product';
import RefreshButton from '../../components/RefreshButton';
import Slider from '../../components/Slider';

// Actions
import {
  addToCart,
  fetchProducts,
} from './actions';

// Utils
import { productShape } from '../../utils/shapes';

class Products extends React.Component {

  static propTypes = {
    addToCart: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    products: PropTypes.arrayOf(productShape),
    pushNextScene: PropTypes.func.isRequired,
  };

  static defaultProps = {
    products: [],
  };

  state = {
    index: 0,
  };

  componentWillMount() {
    this.props.fetchProducts()
      .catch(e => console.warn(e)); // eslint-disable-line no-console
  }

  onIndexChange = (index) => {
    this.setState({ index });
  }

  onNextStep = () => {
    const product = this.props.products[this.state.index];

    // Add the currently diplayed product to cart and go to the next screen
    this.props.addToCart(product);
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
          <Product
            key={item.product_id}
            product={item}
          />
        ))}
      </Slider>
    );
  }

  render() {
    // Enable CTA only if there are products
    const hasProducts = this.props.products.length > 0;

    return (
      <FlexView>
        <ContentView>
          {this.renderContent()}
        </ContentView>
        <CallToAction
          enabled={hasProducts}
          onPress={this.onNextStep}
          text="Choisissez votre couleur!"
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
    addToCart,
    fetchProducts,
  }, dispatch),
)(Products);
