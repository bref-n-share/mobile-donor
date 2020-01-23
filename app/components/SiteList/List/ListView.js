import React from "react";
import {TextInput, View, StyleSheet, ScrollView, Text} from 'react-native';
import {Actions} from "react-native-router-flux";
import SiteElement from "./SiteElement";
import { connect } from 'react-redux';

class ListView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
            return this.props.sites;
        }

        return this.props.sites.filter(site => site.text.includes(this.state.searchTerms));
    }

    FlatListItemSeparator = () => (<View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>);

    showInfos(item) {
        Actions.jump('siteDetails', {site: item});
    }

    renderItem(item) {
        return (
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={ styles.itemButton } onPress={null}>
                    <Text>❤️</Text>
                </TouchableOpacity>
                <Text onPress={() => this.showInfos(item)} style={styles.item}>{item.name}</Text>
            </View>
        )
    }

    render() {
        let sites = <Text>No sites to show</Text>;

        if (this.props.sites) {
            sites =
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    {this.filteredSites().map((site, idx) => <SiteElement site={site} key={idx} pressFunction={() => this.showInfos(site)}/>)}
                </ScrollView>;
        }

        return (
            <View>
                <TextInput style={styles.textInput}
                           placeholder="🔎 Association ..."
                           onChangeText={terms => this.onChangeSearchInput(terms)}/>

                {sites}
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
        marginVertical: 10,
        paddingHorizontal: 10
    },
});

const mapStateToProps = (state, ownProps) => {
    return {
        sites: state.sitesReducer.sites,
    }
};

export default connect(mapStateToProps)(ListView);
