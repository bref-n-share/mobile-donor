import React from "react";
import {View, Text, StyleSheet} from "react-native";

export class SiteInfo extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.site);
    }

    render() {
        return (
            <View>
                <Text>{this.props.site.name}</Text>
                <Text>{this.props.site.tel}</Text>
            </View>
        );
    }
}
