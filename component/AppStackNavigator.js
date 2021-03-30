import React,{Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import SettingScreen from '../screen/SettingScreen';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import Donate from '../screen/Donate';
import RecieverDetailsScreen from '../screen/RecieverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
    Donate:{screen:Donate , navigationOptions:{headerShown:false}},
    RecieverDetailsScreen:{screen:RecieverDetailsScreen , navigationOptions:{headerShown:false}}
},
{initialRouteName:'Donate'})