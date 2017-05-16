// Externals
import React, { PropTypes } from 'react';
import {
  Linking,
  WebView as NativeWebView,
} from 'react-native';

// Styles
import embeddedStyles from './styles';

class WebView extends React.Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  onNavigationStateChange = (event) => {
    if (event.navigationType === 'click' && event.url) {
      this.webView.stopLoading();
      Linking.openURL(event.url);
    }
  }

  render() {
    // Build up HTML source with title & content props.
    const body = `<h1>${this.props.title}</h1><div>${this.props.content}</div>`;
    const html = `<style>${embeddedStyles}</style><body>${body}</body>`;

    return (
      <NativeWebView
        onNavigationStateChange={this.onNavigationStateChange}
        ref={(c) => { this.webView = c; }}
        source={{ html }}
      />
    );
  }

}

export default WebView;
