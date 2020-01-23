import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import TabBarIcon from '../components/TabBarIcon';
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';
import FavorisScreen from '../screens/FavorisScreen';
import DrawerScreen from '../screens/DrawerScreen';

import NotifListComponent from "../components/Notifications/NotifListComponent";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: { headerMode: 'none' },
});

// HOME
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Accueil',
  tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
    header: null
};
HomeStack.path = '';

// SEARCH
const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  config
);
SearchStack.navigationOptions = {
  tabBarLabel: 'Rechercher',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
  ),
};
SearchStack.path = '';

// FAVORIS
const FavorisStack = createStackNavigator(
  {
    Favoris: FavorisScreen,
  },
  config
);
FavorisStack.navigationOptions = {
  tabBarLabel: 'Favoris',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} />
  ),
};
FavorisStack.path = '';

const bottomTabNavigator = createBottomTabNavigator({
    SearchStack,
    HomeStack,
    FavorisStack,
});
bottomTabNavigator.path = '';

const drawerNavigator = createDrawerNavigator(
    {
        Home: bottomTabNavigator,
        Notif: NotifListComponent
    },
    {
        initialRouteName: 'Home',
        contentComponent: DrawerScreen,
        navigationOptions: ({navigation}) => ({
          headerStyle: {backgroundColor: '#9c915c'},
          title: 'Bref\'n\'Share',
          headerTintColor: '#fff',
        }),
    }
);

const mainNavigator = createStackNavigator({
  Home:  drawerNavigator
}, {
  headerMode: 'float',
});

export default mainNavigator;
