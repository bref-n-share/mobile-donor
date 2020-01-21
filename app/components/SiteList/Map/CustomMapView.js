import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Actions} from "react-native-router-flux";

export default class CustomMapView extends React.Component {
    constructor() {
        super();
        let sites = [];
        for (let i = 1; i <= 25; i++) {
            sites.push({
                name: 'Association n°' + i,
                description: "Description de l'association " + i,
                id: "a2172105-91b0-4f84-88a5-a6225424392" + i,
                address: "50 rue de Mon adresse bidon",
                postalCode: "69008",
                city: "Lyon",
                phone: "0678828728",
                tel: '1234567890',
                isFavoris: true,
                longitude: 4.050000 + i / 10,
                latitude: 45.750000,
            });
        }
        this.state = {
            sites: sites,
        };
    }

    showInfos(site) {
        Actions.siteDetails({
            site: site
        });
    }

    render() {
        const children = [...this.state.sites];
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
                {children.map((site, idx) => <Marker
                                        key={idx}
                                        coordinate={{longitude: site.longitude, latitude: site.latitude,}}
                                        onPress={() => this.showInfos(site)}
                                        />
                )}
            </MapView>
        )
    }
}

