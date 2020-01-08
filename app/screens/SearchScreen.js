import React from 'react';
import Sites from '../components/SiteList/Sites';

export default function SearchScreen() {
  return (
        <Sites />
    );
}

SearchScreen.navigationOptions = {
  title: 'Search',
};
