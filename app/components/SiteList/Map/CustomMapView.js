import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Actions} from "react-native-router-flux";
import { connect } from 'react-redux';

class CustomMapView extends React.Component {
    showInfos(marker) {
        Actions.siteDetails({
            site: marker
        });
    }

    render() {
        let markers = [];
        if (this.props.sites) {
            markers = this.props.sites;
        }

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
                }}>

                {markers.map((site, idx) => <Marker
                                        key={idx}
                                        coordinate={{longitude: site.longitude, latitude: site.latitude}}
                                        onPress={() => this.showInfos(site)}
                                        />
                )}
            </MapView>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sites: state.sitesReducer.sites,
    }
};

export default connect(mapStateToProps)(CustomMapView);
