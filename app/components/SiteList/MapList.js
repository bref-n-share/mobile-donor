import React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});

export default class MapList extends React.Component {
    render() {
        return (
            <MapView
                style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true}
                zoomEnabled = {true}
                initialRegion={{
                    latitude: 45.750000,
                    longitude: 4.850000,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        )
    }
}
