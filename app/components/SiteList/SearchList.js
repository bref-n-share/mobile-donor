import React from "react";
import {ListRoutes} from "./Router";

export default class SearchList extends React.Component {
    constructor() {
        super();

        let sites = [];
        for(let i = 1; i <= 25; i++) {
            sites.push({
                id: `${i}`,
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

    render() {
        return (
            <ListRoutes/>
        )
    }
}
