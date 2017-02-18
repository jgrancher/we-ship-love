// Externals
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Image,
  View,
  WebView,
} from 'react-native';

// Components
import LoadingIndicator from '../components/LoadingIndicator';

// Actions
import fetchPages from '../actions/pages';

// Images
import ctaBackground from '../images/cta-bg.png';

// Styles
import styles from '../styles/components/page';
import { brown, turquoise } from '../config/colors';
import { spaceNormal, spaceBig } from '../config/sizes';
import { source } from '../config/fonts';

// WebView styles
const style = `
  body { font-family: ${source}, sans-serif; padding: ${spaceBig}px; }
  h1, strong { color: ${turquoise}; }
  h1 { font-size: 22px; margin: 0 0 ${spaceBig}px; }
  strong { display: block; font-size: 17px; margin: 0 0 ${spaceNormal}px; }
  p { color: ${brown}; font-size: 16px; margin-bottom: ${spaceBig}px; }
`;

class Page extends React.Component {

  static propTypes = {
    content: PropTypes.string,
    fetchPages: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    title: PropTypes.string,
  };

  static defaultProps = {
    content: null,
    isFetching: false,
    title: null,
  };

  componentWillMount() {
    this.props.fetchPages();
  }

  render() {
    if (this.props.isFetching) {
      return <LoadingIndicator />;
    }

    const body = `<h1>${this.props.title}</h1><div>${this.props.content}</div>`;
    const html = `<style>${style}</style><body>${body}</body>`;

    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ html }}
          style={styles.webview}
        />
        <Image
          resizeMode="stretch"
          source={ctaBackground}
          style={styles.background}
        />
      </View>
    );
  }
}

export default connect(
    (state, props) => {
      const page = state.pages.data.find(p => p.id === props.route.id) || {};

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
