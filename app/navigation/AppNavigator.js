import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import SignInScreen from '../screens/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen';

import NotifListComponent from "../components/Notifications/NotifListComponent";
import {View, Text, StyleSheet, Button} from "react-native";


const AuthNavigator = createStackNavigator({SignIn: SignInScreen, Register: RegisterScreen});
const NotifNavigator = createStackNavigator({
    List: {
        screen: NotifListComponent,
        title: 'Vos notifications',
        navigationOptions: ({ navigation }) => ({
            title: `Vos notifications`,
            headerTitle: () => <Header />,
        }),
    }
});
export default createAppContainer(
    createSwitchNavigator(
        {
            // You could add another route here for authentication.
            // Read more at https://reactnavigation.org/docs/en/auth-flow.html
            App: MainTabNavigator,
            AuthLoading: AuthLoadingScreen,
            Auth: AuthNavigator,
            Notif: NotifNavigator,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Mes notifications</Text>
            </View>
        );
    }
}
