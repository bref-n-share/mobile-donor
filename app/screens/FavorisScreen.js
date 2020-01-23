import React from 'react';
import {FavorisRoutes} from '../components/SiteList/Router';

export default function FavorisScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <FavorisRoutes/>;
}

FavorisScreen.navigationOptions = {
  title: 'app.json',
};
