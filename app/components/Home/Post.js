import React from "react";
import { View , Text, Button, StyleSheet, Image } from 'react-native';
import NumericInput from 'react-native-numeric-input'


export default class Sites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgPath: "../../assets/images/heart.png",
            title: "myTitle",
            text: "my text bla bla",
            isDemand: false,
            counter: 1,
        };
    }


    render() {
        let demandView;
        if(this.props.isDemand==true) {
            demandView = (<View style={styles.demandView}>
                <Button title={"Envoyer"}></Button>
                <NumericInput
                    initValue={1}
                    value={this.props.counter}
                    minValue={1}
                    onChange={value => this.setState({counter: value})}
                    totalWidth={150}
                    totalHeight={25}
                    iconSize={10}
                    step={1}
                    valueType='integer'
                    rounded
                    textColor='#07366d'
                    iconStyle={{color: 'white'}}
                    rightButtonBackgroundColor='#007AFF'
                    leftButtonBackgroundColor='#969696'/>
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
                    </View>
                </View>
                {demandView}
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
