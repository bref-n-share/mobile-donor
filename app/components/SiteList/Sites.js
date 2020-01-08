import React from "react";
import MapList from './MapList';
import SearchList from './SearchList';
import { View , Button, StyleSheet } from 'react-native';

export default class Sites extends React.Component {
    constructor() {
        super();

        this.state = {
            isMapView: false,
        };
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
                    <Button title={buttonTitle}
                        onPress={() => this.toggleView()}/>
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
});
