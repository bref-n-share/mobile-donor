import React from "react";
import {View, Text, StyleSheet, Platform, Image, ScrollView} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import TouchableWithoutFeedback from "react-native-web/dist/exports/TouchableWithoutFeedback";
import SiteElement from "../List/SiteElement";
import Post from "../../Home/Post";

export class SiteInfo extends React.Component {
    toggleFavorite(parent){
        let site = parent.props.site;
        site.isFavoris = !site.isFavoris;
        parent.setState({site:site})
    }

    render() {
        let favorisName = Platform.OS === 'ios' ? 'ios-star' : 'md-star';
        if (!this.props.site.isFavoris) {
            favorisName = Platform.OS === 'ios' ? 'ios-star-outline' : 'md-star-outline';
        }


        let phone = null;
        if (this.props.site.phone) {
            phone = <Text style={styles.textBlack}>Tel: {this.props.site.phone}</Text>
        }
        let parent = this;
        console.log(this.props.site.posts);
        let list = <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
            {this.props.site.posts.map((post, idx) => <Post id={post.id} title={post.title} text={post.description} type={post.type} key={idx}/>)}
        </ScrollView>;
        return (
            <View style={styles.parentView}>
                <View style={styles.headerView}>
                    <Image style={styles.iconView} source={require("../../../assets/images/heart.png")} />
                    <View style={styles.headerTextView}>
                        <Text style={styles.header}>{this.props.site.name}</Text>
                        <Text style={styles.subHeader}>Ville: {this.props.site.city} - {this.props.site.postalCode}</Text>
                        <Text style={styles.subHeader}>{this.props.site.address}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => this.toggleFavorite(parent)}>
                        <Ionicons name={favorisName}
                            size={26}
                            style={{marginBottom: -3}}
                            color={'rgb(32,32,32)'} />
                    </TouchableWithoutFeedback>
                </View>
                <Text style={styles.subHeader}>Description:</Text>
                <Text style={styles.textBlue}>{this.props.site.description}</Text>
                {phone}
                {list}
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
