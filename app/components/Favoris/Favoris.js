import * as React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

export default class Favoris extends React.Component {
    constructor() {
        super();
        this.state = {
                image: "../../assets/images/icon.png",
                title: "info 1",
                text: "info 1 text",
                isFavoris:true,
        };
    }

    render() {
        let favorisIcon;
        if (this.state.isFavoris){
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
                <View style={styles.baseFavoris}>
                    <Image style={styles.iconView} source={require("../../assets/images/heart.png")} />
                    <View style={{padding: 10}}>
                        <Text style={styles.titleView}>{this.props.title}</Text>
                        <Text style={styles.descView}>{this.props.text}</Text>
                    </View>
                </View>
                <View>
                    {favorisIcon}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        padding: 10,
        flex: 1,
        borderWidth: 0.3,
        borderColor: '#969696',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    baseFavoris: {
        flexDirection: 'row',
    },
    iconView: {
        width: 48,
        height: 48,
    },
    titleView: {
        fontSize: 18,
        color: 'rgb(7,54,109)',
        lineHeight: 24,
    },
    descView: {
        fontSize: 12,
        color: 'rgb(32,32,32)',
    },
});