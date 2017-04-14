// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Banner from '../../components/Banner';
import ContentView from '../../components/ContentView';
import FlexView from '../../components/FlexView';
import LoadingIndicator from '../../components/LoadingIndicator';
import WebView from '../../components/WebView';

// Actions
import fetchPages from './actions';

class Page extends React.Component {

  static propTypes = {
    content: PropTypes.string,
    fetchPages: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    content: null,
    title: null,
  };

  componentWillMount() {
    this.props.fetchPages();
  }

  renderContent() {
    // Adding ContentView around to make sure the indicator is vertically aligned
    // It is not around the content so that we can see the fields underneath the banner.
    if (this.props.isFetching) {
      return (
        <ContentView>
          <LoadingIndicator />
        </ContentView>
      );
    }

    if (!this.props.content) {
      return null;
    }

    return (
      <WebView
        content={this.props.content}
        title={this.props.title}
      />
    );
  }

  render() {
    return (
      <FlexView>
        {this.renderContent()}
        <Banner />
      </FlexView>
    );
  }

}

export default connect(
  (state, props) => {
    const page = state.pages.data.find(p => p.id === props.id) || {};

    return {
      content: page.body_html,
      isFetching: state.pages.isFetching,
      title: page.title,
    };
  },
  dispatch => bindActionCreators({
    fetchPages,
  }, dispatch),
)(Page);
