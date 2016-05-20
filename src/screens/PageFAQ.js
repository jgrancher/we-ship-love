// Modules
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import { fetchPages } from '../actions/pages';

const { array, func } = React.PropTypes;

class PageFAQ extends React.Component {

    static propTypes = {
        fetchPages: func.isRequired,
        pages: array.isRequired,
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
    (state) => ({ pages: state.pages.data }),
    (dispatch) => bindActionCreators({
        fetchPages,
    }, dispatch),
)(PageFAQ);
