import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPages } from '../actions/pages';
import { ScrollView, Text } from 'react-native';

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
        console.log(this.props.pages);

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
