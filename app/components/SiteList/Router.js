import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import {SiteInfo} from "./SiteInfo/SiteInfo";
import CustomMapView from "./Map/CustomMapView";
import ListView from "./List/ListView";

const MapsRoutes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "mapList" component = {CustomMapView} title = "Map List" initial = {true} />
            <Scene key = "siteDetails" component = {SiteInfo} title = "Site details" />
        </Scene>
    </Router>
);

const ListRoutes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "searchList" component = {ListView} title = "Search List" initial = {true} />
            <Scene key = "siteDetails" component = {SiteInfo} title = "Site details" />
        </Scene>
    </Router>
);

export {MapsRoutes, ListRoutes};
