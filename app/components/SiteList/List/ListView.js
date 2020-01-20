import React from "react";
import {TextInput, View, StyleSheet, ScrollView} from 'react-native';
import {Actions} from "react-native-router-flux";
import SiteElement from "./SiteElement";

export default class ListView extends React.Component {
    constructor(props) {
        super(props);

        let sites = [];
        for (let i = 1; i <= 25; i++) {
            sites.push({
                name: 'Association n°' + i,
                tel: '1234567890',
                isFavoris: true
            });
        }

        this.state = {
            sites: sites,
            searchTerms: '',
        };
    }

    onChangeSearchInput(terms) {
        this.setState({
            searchTerms: terms,
        });
    }

    filteredSites() {
        if (!this.state.searchTerms) {
            return this.state.sites;
        }
        return this.state.sites.filter(site => site.name.includes(this.state.searchTerms));
    }

    showInfos(site) {
        console.log("-------____  PRESSED  ____-------")
        Actions.siteDetails({site: site});
    }

    render() {
        let filteredSites = this.filteredSites();
        return (
            <View>
                <TextInput style={styles.textInput}
                           placeholder="🔎 Association ..."
                           onChangeText={terms => this.onChangeSearchInput(terms)}/>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    {filteredSites.map((site, idx) => <SiteElement title={site.name} isFavoris={site.isFavoris} key={idx} pressFunction={() => this.showInfos(site)}/>)}
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        fontSize: 18,
        backgroundColor: '#fafafa',
        borderRadius: 50,
        width: '75%',
        borderColor: '#969696',
        borderStyle: 'solid',
        borderWidth: 1,
        alignSelf: 'center',
        flexDirection: 'row',

    },
});
