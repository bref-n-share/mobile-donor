import React from "react";
import {StyleSheet} from 'react-native';
import CustomMapView from './Map/CustomMapView';
import {View} from "react-native-web";
import {MapsRoutes} from "./Router";

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});

export default class MapList extends React.Component {
    render() {
        return (
            <MapsRoutes/>
        )
    }
}
