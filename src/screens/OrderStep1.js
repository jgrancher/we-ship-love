// External
import React from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import OrderStep2 from './OrderStep2';
import CallToAction from '../components/CallToAction';

// Actions
import { fetchProducts } from '../actions/products';
import { addItem } from '../actions/cart';

// Styles
import styles from '../styles/components/swiper';
import * as colors from '../config/colors';
import * as sizes from '../config/sizes';

// Images
import btnSliderNext from '../images/btn-slider-next.png';
import btnSliderPrev from '../images/btn-slider-previous.png';
import balloonBlue from '../images/slider-blue.jpg';
import balloonMagenta from '../images/slider-magenta.jpg';
import balloonPink from '../images/slider-pink.jpg';
import balloonRed from '../images/slider-red.jpg';
import balloonWhite from '../images/slider-white.jpg';
import balloonYellow from '../images/slider-yellow.jpg';

const { ActivityIndicatorIOS, Image, View } = React;
const { array, func, object } = React.PropTypes;

const balloonsImages = {
    1124110652: balloonRed,
    1516785796: balloonMagenta,
    4148472901: balloonPink,
    4148501445: balloonBlue,
    4148506117: balloonYellow,
    4148511237: balloonWhite,
};

class OrderStep1 extends React.Component {

    static propTypes = {
        addItem: func.isRequired,
        fetchProducts: func.isRequired,
        navigator: object.isRequired,
        products: array,
    };

    constructor(props) {
        super(props);
        props.fetchProducts();
        this.onNextStep = this.onNextStep.bind(this);
    }

    onNextStep() {
        const { addItem: addItemToCart, navigator, products } = this.props;

        addItemToCart(products[this._swiper.state.index]);

        navigator.push({
            component: OrderStep2,
            index: 1,
            navigator: this.props.navigator,
        });
    }

    render() {
        const { products } = this.props;
        const hasProducts = products.length > 0;

        const content = !hasProducts
            ? <ActivityIndicatorIOS color={colors.turquoise} style={styles.indicator} />
            : (
                <Swiper
                    buttonWrapperStyle={{ height: sizes.heightScene - sizes.heightCTA }}
                    height={sizes.heightSwiper}
                    ref={(s) => { this._swiper = s; }}
                    showsButtons
                    nextButton={<Image source={btnSliderNext} />}
                    prevButton={<Image source={btnSliderPrev} />}
                    showsPagination={false}
                >
                    {products.map((item, i) => (
                        <Image
                            key={i}
                            source={balloonsImages[item.id]}
                            style={styles.slide}
                        />
                    ))}
                </Swiper>
            );

        return (
            <View style={{ flex: 1 }}>
                <View style={styles.content}>{content}</View>
                <CallToAction enabled={hasProducts} onPress={this.onNextStep} />
            </View>
        );
    }

}

export default connect(
    (state) => ({ products: state.products.data }),
    (dispatch) => bindActionCreators({ addItem, fetchProducts }, dispatch)
)(OrderStep1);
