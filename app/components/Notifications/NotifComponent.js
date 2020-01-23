import React, {Component} from 'react';
import {TextInput, View, StyleSheet, ScrollView, Text} from 'react-native';


export default class NotifComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.parentView}>
                <Text style={styles.title}>{this.props.notif.title}</Text>
                <Text style={styles.description}>{this.props.notif.description}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentView: {
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderWidth: 0.3,
        borderTopWidth: 0
    },
    title: {
        fontSize: 24
    },
    description: {
        fontSize: 12
    }
});
