// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Banner from '../../components/Banner';
import ContentView from '../../components/ContentView';
import FlexView from '../../components/FlexView';
import Product from '../../components/Product';
import Text from '../../components/Text';

// Actions
import { resetOrder } from '../App/actions';

// Utils
import { stepShape } from '../../utils/shapes';

class OrderConfirmation extends React.Component {

  static propTypes = {
    image: PropTypes.string,
    popFirstScene: PropTypes.func.isRequired,
    resetOrder: PropTypes.func.isRequired,
    step: stepShape.isRequired,
  };

  static defaultProps = {
    image: null,
  };

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
          <Text fontSize={24}>
            Merci pour votre commande !
          </Text>
          <Text marginBottom>
            Vous recevrez un email de confirmation dès que votre commande sera envoyée.
          </Text>
          <Product
            height={0}
            image={this.props.image}
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

    return {
      image: img ? img.src : null,
    };
  },
  dispatch => bindActionCreators({
    resetOrder,
  }, dispatch),
)(OrderConfirmation);
