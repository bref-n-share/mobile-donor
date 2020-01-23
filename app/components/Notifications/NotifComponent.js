import React, {Component} from 'react';
import {TextInput, View, StyleSheet, ScrollView, Text} from 'react-native';

class NotifComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if ('simpleNotification' == this.props.notif.type) {
            return (
                <View style={styles.parentView}>
                    <Text style={styles.title}>{this.props.notif.title} - 🏢 {this.props.notif.site.name}</Text>
                    <Text style={styles.description}>{this.props.notif.description}</Text>
                </View>
            );
        }
        else if ('post' == this.props.notif.type) {
            return (
                <View style={styles.parentView}>

                </View>
            );
        }
        else {
            return (
                <View style={styles.parentView}>
                    <Text>Can't show notification</Text>
                </View>
            );
        }
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

export default NotifComponent;
