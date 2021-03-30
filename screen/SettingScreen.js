import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    SnapshotViewIOS} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SettingScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId:"",
            firstName:"",
            lastName:"",
            address:"",
            docId:"",
            contact:""
        }
    }
    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email;
        db.collection('users').where('email_id','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data();
                this.setState({userId:data.email_id,
                lastName:data.last_name,
                firstName:data.first_name,
                address:data.address,
                contact:data.contact,
                docId:doc.id})
            })
        })
    }
    
    update=()=>{
        db.collection('user').doc(this.state.docId).update({
            "address":this.state.address,
            "first_name":this.state.firstName,
            "last_name":this.state.lastName,
            "contact":this.state.contact
        })

        Alert.alert('Profile Updated successfully');  
    }

    componentDidMount(){
        this.getUserDetails()
    }

    render(){
        return(
            <View>
            <TextInput
          style={styles.formTextInput}
          placeholder ={this.state.firstName}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value={this.state.firstName}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={this.state.lastName}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
          value={this.state.lastName}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={this.state.contact}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
          value={this.state.contact}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={this.state.address}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
          value={this.state.address}
          />
          <TouchableOpacity style={styles.button}
          onPress={()=>{this.update}}><Text>Submit</Text></TouchableOpacity>
        </View>
        )
    }
}


const styles = StyleSheet.create({
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        }
     }
  })