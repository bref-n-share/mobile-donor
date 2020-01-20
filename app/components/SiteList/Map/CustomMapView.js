import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Actions} from "react-native-router-flux";

export default class CustomMapView extends React.Component {
    constructor() {
        super();
        this.state = {
            //TODO: Récupérer les marqueurs
            markers: [{
                title: 'hello',
                description:'test description',
                coordinates: {
                    latitude: 45.750000,
                    longitude: 4.750000
                },
                site: {
                    name: 'Emmaus',
                    tel: '0987654321',
                }
            },
                {
                    title: 'hello 2',
                    description:'test description 2',
                    coordinates: {
                        latitude: 45.750000,
                        longitude: 4.950000
                    },
                    site: {
                        name: 'Resto du Coeur',
                        tel: '1234567890',
                    }
                }],
        };
    }

    showInfos(marker) {
        Actions.siteDetails({
            site: marker.site
        });
    }

    render() {
        const children = [...this.state.markers];
        return (
            <MapView
                style = {{ flex: 1 }}
                showsUserLocation = {true}
                showsMyLocationButton = {true}
                zoomEnabled = {true}
                initialRegion = {{
                    latitude: 45.750000,
                    longitude: 4.850000,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {children.map((marker, idx) => <Marker
                                        key={idx}
                                        coordinate={marker.coordinates}
                                        onPress={() => this.showInfos(marker)}
                                        />
                )}
            </MapView>
        )
    }
}

