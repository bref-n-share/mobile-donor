import * as React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import Post from "../Home/Post";
import Favoris from "./Favoris";

export default class FavorisContainer extends React.Component{
    constructor() {
        super();
        this.state = {
            favoris: [
                {
                    image: "../../assets/images/icon.png",
                    title: "info 1",
                    text: "info 1 text",
                    isFavoris:true,
                },
                {
                    image: "../../assets/images/icon.png",
                    title: "info 2",
                    text: "info 2 text",
                    isFavoris:false,
                },
            ],
        };
    }

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                {this.state.favoris.map((fav, idx) => <Favoris title={fav.title} text={fav.text} isFavoris={fav.isFavoris} key={idx}/>)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

});
