import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from "./screens/HomeScreen";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var appNavigator = createSwitchNavigator({
HomeScreen: HomeScreen
});
const AppContainer = createAppContainer(appNavigator);
