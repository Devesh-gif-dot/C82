import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screen/MyLoginScreen';
import {AppDrawerNavigator} from './component/AppDrawerNavigator';

export default function App(){
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  Login:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})
const AppContainer =  createAppContainer(switchNavigator);
