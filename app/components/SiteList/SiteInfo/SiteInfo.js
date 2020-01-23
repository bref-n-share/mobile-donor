import React from "react";
import {View, Text, StyleSheet, Platform, Image, ScrollView} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import TouchableWithoutFeedback from "react-native-web/dist/exports/TouchableWithoutFeedback";
import Post from "../../Home/Post";
import { connect } from 'react-redux';
import { siteUpdate } from '../../../actions/sites';

class SiteInfo extends React.Component {
    async toggleFavorite() {
        const response = await global.ApiConsumer.siteToggleFavorite({
            site: this.props.site.id,
            value: !this.props.site.isFavoris
        });

        let newSite = JSON.parse(JSON.stringify(this.props.site));
        newSite.isFavoris = !newSite.isFavoris;
        this.props.site.isFavoris = newSite.isFavoris;
        this.props.dispatch(siteUpdate(newSite));
        this.forceUpdate();
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
                    <TouchableWithoutFeedback onPress={() => this.toggleFavorite()}>
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

export default connect()(SiteInfo);
