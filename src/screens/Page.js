// Modules
import React from 'react';
import { WebView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import LoadingIndicator from '../components/LoadingIndicator';

// Actions
import { fetchPages } from '../actions/pages';

// Styles
import { brown, turquoise } from '../config/colors';
import { spaceNormal } from '../config/sizes';
import { source } from '../config/fonts';

const { bool, func, string } = React.PropTypes;

class Page extends React.Component {

    static propTypes = {
        content: string,
        fetchPages: func.isRequired,
        isFetching: bool,
        title: string,
    };

    componentWillMount() {
        this.props.fetchPages();
    }

    render() {
        if (this.props.isFetching) {
            return <LoadingIndicator />;
        }

        const html =
            `<style>
                p { color: ${brown}; font-family: ${source}, sans-serif; font-size: 16px;
                    text-align: justify; margin: 20px; }
                strong { color: ${turquoise}; display: block; font-size: 22px;
                    margin: ${spaceNormal}px; text-align: center; }
            </style>
            ${this.props.content}`;

        return <WebView source={{ html }} />;
    }
}

export default connect(
    (state, props) => {
        const page = state.pages.data.find((p) => p.id === props.route.id) || {};
        return {
            content: page.body_html,
            isFetching: state.pages.isFetching,
            title: page.title,
        };
    },
    (dispatch) => bindActionCreators({
        fetchPages,
    }, dispatch),
)(Page);
