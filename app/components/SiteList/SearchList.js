import React from "react";
import { Text, TextInput, View, FlatList, StyleSheet } from 'react-native';

export default class SearchList extends React.Component {
    constructor() {
        super();

        let sites = [];
        for(let i = 1; i <= 25; i++) {
            sites.push({
                id: i,
                text: 'Item  n°' + i
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

        return this.state.sites.filter(site => site.text.includes(this.state.searchTerms));
    }

    FlatListItemSeparator = () => (<View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>);

    render() {
        return (
            <View style={styles.parentView}>
                <TextInput style={styles.textInput}
                    placeholder="🔎 Association ..."
                    onChangeText={terms => this.onChangeSearchInput(terms)} />

                <FlatList style={styles.flatList}
                    data={this.filteredSites()}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}
                    keyExtractor={item => item.id} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
    },
    textInput: {
        height: 40,
        fontSize: 18,
    },
    item: {
        fontSize: 18,
        marginBottom: 5,
    }
});
