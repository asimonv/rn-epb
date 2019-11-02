import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import InfoScreen from './screens/InfoScreen';
import KnowMoreScreen from './screens/KnowMore';
import CodesScreen from './screens/CodesScreen';
import CodeScreen from './screens/Code';
import GridScreen from './screens/GridScreen';
import ListElementsScreen from './screens/ListElements';
import HowToScreen from './screens/HowTo';
import ImportanceScreen from './screens/ImportanceScreen';
import PrevalenceScreen from './screens/PrevalenceScreen';

const App = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  InfoScreen: { screen: InfoScreen },
  KnowMoreScreen: { screen: KnowMoreScreen },
  CodesScreen: { screen: CodesScreen },
  CodeScreen: { screen: CodeScreen },
  GridScreen: { screen: GridScreen },
  ListElementsScreen: { screen: ListElementsScreen },
  HowToScreen: { screen: HowToScreen },
  ImportanceScreen: { screen: ImportanceScreen },
  PrevalenceScreen: { screen: PrevalenceScreen },
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
