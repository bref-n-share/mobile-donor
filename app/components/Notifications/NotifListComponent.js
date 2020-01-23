import React, {Component} from 'react';
import {connect} from 'react-redux';
import NotifComponent from "./NotifComponent";
import { withNavigation, ScrollView } from 'react-navigation';

class NotifListComponent extends Component {
    constructor(props) {
        super(props);
        this.loadNotifs();
        this.state = {
            notifs: []
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('didFocus', () => {
            this.loadNotifs();
        });
    }

    async loadNotifs() {
        const response = await global.ApiConsumer.getNotifs();
        this.setState({notifs: response.data});
    }

    render() {
        const list = this.state.notifs.map((n, idx) => {
            return (<NotifComponent key={idx} notif={n}/>)
        });
        return (
            <ScrollView>
                {list}
            </ScrollView>
        );
    }

}

export default withNavigation(connect()(NotifListComponent));
