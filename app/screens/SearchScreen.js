import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import MapView from "react-native-maps";

/**
 * @return {boolean}
 * @return {boolean}
 */

export default function SearchScreen() {
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
);
}

SearchScreen.navigationOptions = {
  title: 'Search',
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});
