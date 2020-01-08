import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import {SiteInfo} from "../components/SiteList/SiteInfo/SiteInfo";

export default createAppContainer(
    createSwitchNavigator({
            // You could add another route here for authentication.
            // Read more at https://reactnavigation.org/docs/en/auth-flow.html
            Main: MainTabNavigator,
            SiteInfo: SiteInfo,
        },
        {
            initialRouteName: 'Main',
        })
);
