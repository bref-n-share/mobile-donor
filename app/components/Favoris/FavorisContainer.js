import * as React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import SiteElement from '../SiteList/List/SiteElement';
import { connect } from 'react-redux';
import { sitesAll, sitesFavorite } from '../../actions/sites';

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

    render() {
        if (!this.props.sites) {
            return <Text>No sites to show</Text>;
        }

        return (
            <ScrollView>
                {this.filteredSites().map((site, idx) => <SiteElement site={site} key={idx} />)}
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
