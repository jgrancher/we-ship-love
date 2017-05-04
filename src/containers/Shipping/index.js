// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from 'react-native';
import {
  Field,
  reduxForm,
} from 'redux-form';

// Components
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import ContentView from '../../components/ContentView';
import FlexView from '../../components/FlexView';
import Input from '../../components/Input';
import LoadingIndicator from '../../components/LoadingIndicator';
import Modal from '../../components/Modal';
import ShippingButton from '../../components/ShippingButton';
import Text from '../../components/Text';

// Actions
import fetchRates from './actions';
import {
  asyncSelectShipping,
  setOrderNote,
  setOrderShipping,
} from '../App/actions';

// Utils
import { API_SHIPPING_ID_SPECIFIC_DAY } from '../../utils/constants';
import { validateRequired } from '../../utils/helpers';
import {
  rateShape,
  stepShape,
} from '../../utils/shapes';

class Shipping extends React.Component {

  static propTypes = {
    asyncSelectShipping: PropTypes.func.isRequired,
    fetchRates: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    pushNextScene: PropTypes.func.isRequired,
    rates: PropTypes.arrayOf(rateShape).isRequired,
    setOrderNote: PropTypes.func.isRequired,
    setOrderShipping: PropTypes.func.isRequired,
    step: stepShape.isRequired,
    valid: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    note: null,
  };

  state = {
    index: -1,
    modal: false,
  };

  componentWillMount() {
    this.props.fetchRates();
  }

  onCancelNote = () => {
    this.setState({
      index: -1,
      modal: false,
    });
  }

  onIndexChange = (index) => {
    // Display modal if the specific day is selected
    const modal = this.props.rates[index].id === API_SHIPPING_ID_SPECIFIC_DAY;

    this.setState({ index, modal });
  }

  onNextStep = () => {
    // Set the order shipping rate then go to the next screen
    this.props.setOrderShipping(this.props.rates[this.state.index]);
    this.props.asyncSelectShipping(this.state.index)
      .then(this.props.pushNextScene)
      .catch(e => Alert.alert('Oh, non !', (typeof e === 'string') ? e.trim() : e));
  }

  onValidateNote = () => {
    // Set the order note, disable the modal, and go the next screen
    this.props.setOrderNote(this.input.value);
    this.setState({ modal: false });
    this.onNextStep();
  }

  renderContent() {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    return this.props.rates.map((rate, index) => {
      const onPress = () => this.onIndexChange(index);

      return (
        <ShippingButton
          active={index === this.state.index}
          key={rate.id}
          onPress={onPress}
          {...rate}
        />
      );
    });
  }

  renderModalContent() {
    return (
      <FlexView justifyContent="space-between">
        <Text marginBottom>Merci de renseigner le jour de livraison souhaité:</Text>
        <Field
          component={Input}
          name="note"
          autoFocus
          placeholder="Au matin de la fête des mères"
          ref={(c) => { this.input = c; }}
          returnKeyType="default"
        />
        <FlexView
          alignItems="center"
          height={50}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Button
            onPress={this.onCancelNote}
            title="Annuler"
            type="danger"
          />
          <FlexView flexBasis={20} />
          <Button
            disabled={!this.props.valid}
            onPress={this.onValidateNote}
            title="Confirmer"
            type="success"
          />
        </FlexView>
      </FlexView>
    );
  }

  render() {
    return (
      <FlexView>
        <Modal visible={this.state.modal}>
          {this.renderModalContent()}
        </Modal>
        <ContentView
          alignItems="center"
          justifyContent="center"
        >
          {this.renderContent()}
        </ContentView>
        <Banner
          {...this.props.step}
          enabled={!this.props.isFetching && this.state.index >= 0}
          onPress={this.onNextStep}
        />
      </FlexView>
    );
  }

}

// Composes the component with reduxForm
const ShippingForm = reduxForm({
  form: 'shipping',
  validate: values => ({
    note: validateRequired(values.note),
  }),
})(Shipping);

export default connect(
  state => ({
    isFetching: state.rates.isFetching || state.order.isFetching,
    rates: state.rates.data,
  }),
  dispatch => bindActionCreators({
    asyncSelectShipping,
    fetchRates,
    setOrderNote,
    setOrderShipping,
  }, dispatch),
)(ShippingForm);
