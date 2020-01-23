import React from "react";
import { View , Text, Button, StyleSheet, Image, Alert } from 'react-native';

export default class Sites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgPath: "../../assets/images/heart.png",
            title: "myTitle",
            text: "my text bla bla",
            id: "noId",
            isDemand: false,
            counter: 1,
        };
    }

    async sendDonation() {
        let response = await global.ApiConsumer.sendDonation(this.props.id);
        if (response.status===200) {
            Alert.alert('Vous avez fait un don');
        }
    }


    render() {
        let demandView;
        if(this.props.isDemand==true) {
            demandView = (<View style={styles.demandView}>
                <Button title={"Donner une unité"} onPress={() => this.sendDonation()}></Button>
            </View>)
        } else {
            demandView = (<View/>)
        }
        return (
            <View style={styles.parentView}>
                <View style={styles.basePost}>
                    <View>
                        <Image style={styles.iconView} source={require("../../assets/images/heart.png")} />
                    </View>
                    <View>
                        <Text style={styles.titleView}>{this.props.title}</Text>
                        <Text style={styles.descView}>{this.props.text}</Text>
                        {demandView}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        borderWidth: 0.3,
        borderColor: '#969696',
    },
    basePost: {
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
