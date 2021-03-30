import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,KeyboardAvoidingView,Modal, ScrollView } from 'react-native';
import {createAppContainer,createSwitcthNavigator} from 'react-navigation';
import * as firebase from 'firebase';
import db from '../config'

export default class Donate extends Component{
    constructor(){
        super();
        this.state={
            bookName:"",
            reason:""
        }
    }
    render(){
        return(
            <View>
                <Text> Donate</Text>
            </View>   
        )
    }
}