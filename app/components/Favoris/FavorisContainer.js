import * as React from 'react';
import {  ScrollView, Text } from 'react-native';
import SiteElement from '../SiteList/List/SiteElement';
import { connect } from 'react-redux';
import { sitesAll, sitesFavorite } from '../../actions/sites';
import {Actions} from "react-native-router-flux";

class FavorisContainer extends React.Component{
    constructor(props) {
        super(props);

        this.loadSites();
    }

    async loadSites() {
        let response = await global.ApiConsumer.loadSites();
        this.props.dispatch(sitesAll(response.data));

        response = await global.ApiConsumer.loadFavoriteSites();
        this.props.dispatch(sitesFavorite(response.data));
    }

    filteredSites() {
        if (!this.props.sites) {
            return null;
        }

        return this.props.sites.filter(site => site.isFavoris);
    }

    showInfos(item) {
        Actions.jump('siteDetails', {site: item});
    }

    render() {
        if (!this.props.sites) {
            return <Text>No sites to show</Text>;
        }

        return (
            <ScrollView>
                {this.filteredSites().map((site, idx) => <SiteElement site={site} key={idx} pressFunction={() => this.showInfos(site)} />)}
            </ScrollView>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sites: state.sitesReducer.sites,
    }
};

export default connect(mapStateToProps)(FavorisContainer);
