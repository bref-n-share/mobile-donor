import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import FavorisContainer from "../components/Favoris/FavorisContainer";

export default function FavorisScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <FavorisContainer/>;
}

FavorisScreen.navigationOptions = {
  title: 'app.json',
};
