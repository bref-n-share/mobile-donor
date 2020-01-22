import React from "react";
import MapList from './MapList';
import SearchList from './SearchList';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { sitesAll, sitesFavorite } from '../../actions/sites';
import { connect } from 'react-redux';

class Sites extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMapView: false,
        };

        this.loadSites();
    }

    async loadSites() {
        let response = await global.ApiConsumer.loadSites();
        this.props.dispatch(sitesAll(response.data));

        response = await global.ApiConsumer.loadFavoriteSites();
        this.props.dispatch(sitesFavorite(response.data));
    }

    toggleView() {
        this.setState({
            isMapView: !this.state.isMapView
        });
    }

    render() {
        let sites = this.state.isMapView ? <MapList /> : <SearchList />;
        let buttonTitle = !this.state.isMapView ? '🗺' : '🏢';
        return (
            <View style={styles.parentView}>
                <View style={styles.listView}>
                    {sites}
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={ styles.button } onPress={() => this.toggleView()}>
                        <Text>{buttonTitle}️</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
    },
    listView: {
        flex: 1,
    },
    buttonView: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#ededed',
        borderRadius: 50,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    button: {
        padding: 20,
        borderRadius: 50,
        fontSize: 70
    }
});

export default connect()(Sites);
