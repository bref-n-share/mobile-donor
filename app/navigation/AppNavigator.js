import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import SignInScreen from '../screens/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen';

const AuthNavigator = createStackNavigator({SignIn: SignInScreen, Register: RegisterScreen});

export default createAppContainer(
    createSwitchNavigator(
        {
            // You could add another route here for authentication.
            // Read more at https://reactnavigation.org/docs/en/auth-flow.html
            App: MainTabNavigator,
            AuthLoading: AuthLoadingScreen,
            Auth: AuthNavigator,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);
