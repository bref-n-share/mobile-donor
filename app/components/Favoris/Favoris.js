import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

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
        return (
            <View style={styles.parentView}>
                <View style={styles.baseFavoris}>
                    <View>
                        <Image style={styles.iconView} source={require("../../assets/images/heart.png")} />
                    </View>
                    <View>
                        <Text style={styles.titleView}>{this.props.title}</Text>
                        <Text style={styles.descView}>{this.props.text}</Text>
                    </View>
                    <View>
                        {/*TODO: Favoris button */}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        borderWidth: 0.3,
        borderColor: '#969696',
    },
    baseFavoris: {
        flexDirection: 'row'
    },
    demandView: {
        flexDirection: 'row-reverse'
    },
    iconView: {
        margin: 10,
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