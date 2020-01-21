import React from "react";
import {View, Text, StyleSheet, Platform, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export class SiteInfo extends React.Component {
    render() {
        let favorisIcon;
        if (this.props.site.isFavoris){
            favorisIcon = (<Ionicons
                name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
                size={26}
                style={{marginBottom: -3}}
                color={'rgb(32,32,32)'}
            />)
        }
        else {
            favorisIcon = (<Ionicons
                name={Platform.OS === 'ios' ? 'ios-star-outline' : 'md-star-outline'}
                size={26}
                style={{marginBottom: -3}}
                color={'rgb(32,32,32)'}
            />)
        }
        return (
            <View style={styles.parentView}>
                <View style={styles.headerView}>
                    <Image style={styles.iconView} source={require("../../../assets/images/heart.png")} />
                    <View style={styles.headerTextView}>
                        <Text style={styles.header}>{this.props.site.name}</Text>
                        <Text style={styles.subHeader}>Ville: {this.props.site.city}</Text>
                    </View>
                    {favorisIcon}
                </View>
                <Text style={styles.subHeader}>Description:</Text>
                <Text style={styles.textBlue}>{this.props.site.description}</Text>
                <Text style={styles.textBlack}>Tel: {this.props.site.tel}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    headerView: {
        flexDirection: 'row',
        paddingBottom: 15,
    },
    headerTextView: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 32
    },
    subHeader: {
        fontSize: 20
    },
    textBlue: {
        fontSize: 18,
        color: 'rgb(38,61,76)',
    },
    textBlack: {
        fontSize: 16,
        color: 'rgb(32,32,32)',
    },
    iconView: {
        width: 48,
        height: 48,
        padding: 10,
    },
});
