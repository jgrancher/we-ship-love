// Externals
import React, { PropTypes } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Banner from '../../components/Banner';
import ContentView from '../../components/ContentView';
import FlexView from '../../components/FlexView';
import ProgressiveImage from '../../components/ProgressiveImage';

// Actions
import { resetOrder } from '../App/actions';

// Utils
import { getResizedImageSource } from '../../utils/helpers';
import { stepShape } from '../../utils/shapes';

class OrderConfirmation extends React.Component {

  static propTypes = {
    image: PropTypes.string,
    popFirstScene: PropTypes.func.isRequired,
    resetOrder: PropTypes.func.isRequired,
    step: stepShape.isRequired,
    thumbnail: PropTypes.string,
  };

  static defaultProps = {
    image: null,
    thumbnail: null,
  };

  componentDidMount() {
    Alert.alert(
      'Merci pour votre commande ! 🎈',
      'Vous recevrez un email de confirmation dès que votre commande sera envoyée.',
    );
  }

  onNextStep = () => {
    this.props.resetOrder();
    this.props.popFirstScene();
  }

  render() {
    return (
      <FlexView>
        <ContentView
          alignItems="center"
          justifyContent="center"
        >
          <ProgressiveImage
            source={this.props.image}
            thumbnailSource={this.props.thumbnail}
          />
        </ContentView>
        <Banner
          {...this.props.step}
          onPress={this.onNextStep}
        />
      </FlexView>
    );
  }

}

export default connect(
  (state) => {
    // Get the image of the selected variant, before the order reset (order.product would be null)
    const product = state.products.data.find(p => p.product_id === state.order.product);
    const img = product ? product.images.find(i => i.variant_ids[0] === state.order.variant) : null;
    const source = img ? img.src : null;

    return {
      image: getResizedImageSource(source),
      thumbnail: getResizedImageSource(source, 'thumb'),
    };
  },
  dispatch => bindActionCreators({
    resetOrder,
  }, dispatch),
)(OrderConfirmation);
