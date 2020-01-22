import React, {Component} from 'react';
import {TextInput, View, StyleSheet, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import NotifComponent from "./NotifComponent";


class NotifListComponent extends Component {

    constructor(props) {
        super(props);
        this.loadNotifs();
        this.state = {
            notifs: []
        }
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
            <View>
                {list}
            </View>
        );
    }

}

export default connect()(NotifListComponent);
