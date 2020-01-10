import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {AsyncStorage, ScrollView, Text, View, StyleSheet} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

class DrawerScreen extends Component {
  navigateToScreen = (route) => () => {
    alert('test2')
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  logout = () => async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  render () {
    return (
      <View style={styles.parentView}>
        <ScrollView>
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText} onPress={this.logout()}>
              Logout
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1
  },
  menuItem: {
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 10
  },
  menuItemText: {
    fontSize: 18,
  },
});

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
