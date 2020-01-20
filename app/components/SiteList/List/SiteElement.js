import * as React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import TouchableWithoutFeedback from "react-native-web/dist/exports/TouchableWithoutFeedback";

export default class SiteElement extends React.Component {
    constructor() {
        super();
        this.state = {
            image: "../../assets/images/icon.png",
            title: "info 1",
            text: "info 1 text",
            isFavoris:true,
            pressFunction:null,
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
                <TouchableWithoutFeedback style={styles.baseSite} onPress={this.props.pressFunction}>
                    <View style={{flexDirection:'row'}}>
                        <Image style={styles.iconView} source={require("../../../assets/images/heart.png")} />
                        <Text style={styles.titleView}>{this.props.title}</Text>
                    </View>
                </TouchableWithoutFeedback>
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
    baseSite: {
        flexDirection: 'row',
    },
    iconView: {
        width: 48,
        height: 48,
    },
    titleView: {
        fontSize: 18,
        padding: 10,
        color: 'rgb(7,54,109)',
        lineHeight: 24,
    },
});