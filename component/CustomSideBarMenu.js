import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert,KeyboardAvoidingView,Modal, ScrollView } from 'react-native';
import * as firebase from 'firebase';
import db from '../config';
import {DrawerItems} from 'react-navigation-drawer';

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:0.8}}>
                    <DrawerItems 
                    {...this.props} />
                </View>
                <View style={styles.logoutContainer}>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Login')
                    firebase.auth().signOut()}}><Text>lOGOUT</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    logoutContainer: {
      flex: 0.2,
      justifyContent:'flex-end',
      paddingBottom:30
      },
      button:{
        backgroundColor:'red',
        width:'100%',
        height:30,
        alignItems:'center',
        justifyContent:'center',
        padding:10
      }

    
  });

