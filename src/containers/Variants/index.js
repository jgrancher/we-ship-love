// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Banner from '../../components/Banner';
import ContentView from '../../components/ContentView';
import FlexView from '../../components/FlexView';
import LoadingIndicator from '../../components/LoadingIndicator';
import ProgressiveImage from '../../components/ProgressiveImage';
import Slider from '../../components/Slider';

// Actions
import {
  asyncCreateCheckout,
  setOrderVariant,
} from '../App/actions';

// Utils
import { getResizedImageSource } from '../../utils/helpers';
import {
  productImageShape,
  stepShape,
  variantShape,
} from '../../utils/shapes';

class Variants extends React.Component {

  static propTypes = {
    asyncCreateCheckout: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(productImageShape).isRequired,
    isFetching: PropTypes.bool.isRequired,
    pushNextScene: PropTypes.func.isRequired,
    setOrderVariant: PropTypes.func.isRequired,
    step: stepShape.isRequired,
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
    this.props.asyncCreateCheckout(variant).then(this.props.pushNextScene);
  }

  renderContent() {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    return (
      <Slider onIndexChange={this.onIndexChange}>
        {this.props.variants.map((item) => {
          const image = this.props.images.find(i => i.variant_ids[0] === item.id);
          const source = image ? image.src : null;

          return (
            <ProgressiveImage
              key={item.id}
              source={getResizedImageSource(source)}
              thumbnailSource={getResizedImageSource(source, 'thumb')}
              widthRatio={1.15}
            />
          );
        })}
      </Slider>
    );
  }

  render() {
    const variant = this.props.variants[this.state.index];
    const text = variant ? variant.title : null;
    const price = variant ? `${variant.price}€` : null;

    return (
      <FlexView>
        <ContentView>
          {this.renderContent()}
        </ContentView>
        <Banner
          {...this.props.step}
          enabled={!this.props.isFetching}
          onPress={this.onNextStep}
          price={price}
          text={text}
        />
      </FlexView>
    );
  }

}

export default connect(
  (state) => {
    const isFetching = state.order.isFetching;

    // Find the selected product in order amongst the products
    const product = state.products.data.find(p => p.product_id === state.order.product);

    // Find the needed images and variants
    const images = product ? product.images.filter(image => image.variant_ids.length) : [];
    const variants = product ? product.variants : [];

    return {
      images,
      isFetching,
      variants,
    };
  },
  dispatch => bindActionCreators({
    asyncCreateCheckout,
    setOrderVariant,
  }, dispatch),
)(Variants);
