// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Containers & components
import CallToAction from '../../components/CallToAction';
import ContentView from '../../components/ContentView';
import FlexView from '../../components/FlexView';
import Product from '../../components/Product';
import Slider from '../../components/Slider';

// Actions
import {
  asyncCreateCheckout,
  setOrderVariant,
} from '../App/actions';

// Utils
import {
  productImageShape,
  variantShape,
} from '../../utils/shapes';

class Variants extends React.Component {

  static propTypes = {
    asyncCreateCheckout: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(productImageShape).isRequired,
    pushNextScene: PropTypes.func.isRequired,
    setOrderVariant: PropTypes.func.isRequired,
    variants: PropTypes.arrayOf(variantShape).isRequired,
  };

  state = {
    index: 0,
  };

  onIndexChange = (index) => {
    this.setState({ index });
  }

  onNextStep = () => {
    const variant = this.props.variants[this.state.index];

    // Set the order's variant, create a checkout on the API and go to the next screen
    this.props.setOrderVariant(variant);
    this.props.asyncCreateCheckout(variant)
      .then(this.props.pushNextScene)
      .catch(e => console.warn(e)); // eslint-disable-line no-console
  }

  renderContent() {
    return (
      <Slider onIndexChange={this.onIndexChange}>
        {this.props.variants.map((item) => {
          const image = this.props.images.find(i => i.variant_ids[0] === item.id);

          return (
            <Product
              key={item.id}
              image={image && image.src}
            />
          );
        })}
      </Slider>
    );
  }

  render() {
    const variant = this.props.variants[this.state.index];
    const variantTitle = `${variant.title} = ${variant.price}€`;

    return (
      <FlexView>
        <ContentView>
          {this.renderContent()}
        </ContentView>
        <CallToAction
          onPress={this.onNextStep}
          text="Choisissez un supplément"
          textComplement={variantTitle}
        />
      </FlexView>
    );
  }

}

export default connect(
  (state) => {
    // Find the selected product in order amongst the products
    const product = state.products.data.find(p => p.product_id === state.order.product);

    // Find the needed images and variants
    const images = product.images.filter(image => image.variant_ids.length);
    const variants = product.variants;

    return { images, variants };
  },
  dispatch => bindActionCreators({
    asyncCreateCheckout,
    setOrderVariant,
  }, dispatch),
)(Variants);
