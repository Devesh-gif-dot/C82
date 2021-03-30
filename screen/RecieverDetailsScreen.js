import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class RecieverDetailsScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Details of Reciever</Text>
            </View>
        )
    }
}