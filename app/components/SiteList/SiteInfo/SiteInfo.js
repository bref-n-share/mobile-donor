import React from "react";
import {View, Text, StyleSheet} from "react-native";

export class SiteInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.parentView}>
                <Text style={styles.header}>{this.props.site.name}</Text>
                <Text style={styles.subHeader}>Tel: {this.props.site.tel}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 36
    },
    subHeader: {
        fontSize: 24
    }
});
