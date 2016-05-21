// Modules
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { fetchPages } from '../actions/pages';

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
        return (
            <ScrollView>
                <Text>Test</Text>
            </ScrollView>
        );
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
