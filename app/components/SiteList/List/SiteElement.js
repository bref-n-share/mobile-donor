import * as React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import TouchableWithoutFeedback from "react-native-web/dist/exports/TouchableWithoutFeedback";
import { connect } from 'react-redux';
import { siteUpdate } from '../../../actions/sites';

class SiteElement extends React.Component {
    constructor() {
        super();
        //TODO: Transformer les longitudes et latitudes en float (string --> float)
        this.state = {
            pressFunction:null,
        };

        this.toggleFavorite = this.toggleFavorite.bind(this);
    }

    async toggleFavorite() {
        const response = await global.ApiConsumer.siteToggleFavorite({
            site: this.props.site.id,
            value: !this.props.site.isFavoris
        });

        let newSite = JSON.parse(JSON.stringify(this.props.site));
        newSite.isFavoris = !newSite.isFavoris;
        this.props.dispatch(siteUpdate(newSite));
    }

    render() {
        let favorisName = Platform.OS === 'ios' ? 'ios-star' : 'md-star';
        if (!this.props.site.isFavoris) {
            favorisName = Platform.OS === 'ios' ? 'ios-star-outline' : 'md-star-outline';
        }

        return (
            <View style={styles.parentView}>
                <TouchableWithoutFeedback style={styles.baseSite} onPress={this.props.pressFunction}>
                    <View style={{flexDirection:'row'}}>
                        <Image style={styles.iconView} source={require("../../../assets/images/heart.png")} />
                        <Text style={styles.titleView}>{this.props.site.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <TouchableWithoutFeedback onPress={this.toggleFavorite}>
                        <Ionicons name={favorisName}
                            size={26}
                            style={{marginTop: 10, marginRight: 5}}
                            color={'rgb(32,32,32)'} />
                    </TouchableWithoutFeedback>
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

export default connect()(SiteElement);
