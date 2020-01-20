import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import HomeContainer from "../components/Home/HomeContainer";

export default function HomeScreen() {
  return (
    <HomeContainer/>
  );
}


HomeScreen.navigationOptions = {
  title: 'Home',
};