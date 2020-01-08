import React from "react";
import {Text, TextInput, View, FlatList, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Actions} from "react-native-router-flux";

export default class ListView extends React.Component {
    constructor(props) {
        super(props);

        let sites = [];
        for (let i = 1; i <= 25; i++) {
            sites.push({
                id: i,
                text: 'Item  n°' + i,
                site: {
                    name: 'Association n°' + i,
                    tel: '1234567890',
                }
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

    showInfos(item) {
        Actions.siteDetails({site: item.site});
    }

    renderItem(item) {
        return (
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={ styles.itemButton } onPress={null}>
                    <Text>❤️</Text>
                </TouchableOpacity>
                <Text onPress={() => this.showInfos(item)} style={styles.item}>{item.text}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.parentView}>
                <TextInput style={styles.textInput}
                           placeholder="🔎 Association ..."
                           onChangeText={terms => this.onChangeSearchInput(terms)}/>

                <FlatList style={styles.flatList}
                          data={this.filteredSites()}
                          ItemSeparatorComponent={this.FlatListItemSeparator}
                          renderItem={({item}) => this.renderItem(item)}
                          keyExtractor={item => item.id}/>
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
        padding: 20,
        flex: 3,
    },
    itemButton: {
        height: 50,
        width: 50,
        flex:1,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    }

});
