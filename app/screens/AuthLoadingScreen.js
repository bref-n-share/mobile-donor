import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  clearStorage = async () => {
    try {
      await AsyncStorage.clear();
    } catch(error) {}
  }

  _bootstrapAsync = async () => {
    let userToken = await AsyncStorage.getItem('userToken');

    // check token
    if (userToken) {
      try {
        const response = await global.ApiConsumer.reAuthenticate({token: userToken});

        if (200 !== response.status) {
          userToken = null;
          this.clearStorage();
        }
      } catch(error) {
        userToken = null;
        this.clearStorage();
      }
    }

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
