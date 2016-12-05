import React, { Component } from 'react';
import {StyleSheet, View, Text, AsyncStorage, TextInput, Image, Platform, Alert, TouchableHighlight } from 'react-native';

import api from '../../api/index'
import storage from '../../api/storage'

var style = require('../../../Styles/styles');

export default class LogInScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {loading: false, error: false, email: '', password: '', key: ''};
  }

  // Used to move to the next screen
  // Passes the list of projects from the classes to the next screen
  navigateLogIn() {
    this.props.navigator.push({
      title: 'Dashboard',
      extras: {
        authKey: this.state.key
      }
    })
  }

  tryLogIn = async function() {
    console.log(this.state.email)
    if(!this.state.email) {
      this.loginPopUp("Empty email field");
    }
    else if(!this.state.email.includes("@")) {
      this.loginPopUp("Invalid email");
    }
    else if(!this.state.password) {
      this.loginPopUp("Empty password field");
    }
    else {
      try {
        this.setState({loading: true});
        const body = await api.getAuthKey(this.state.email,this.state.password);
        console.log(body);
        if('key' in body) {
          try {
            console.log(body.key);
            await storage.saveAuthKey(body.key)
          } catch (error) {
            console.log(error + " error saving key to storage");
            this.setState({loading: false, error: true})
          }
        }
        if('non_field_errors' in body) {
          this.setState({loading: false, error: true});
          this.loginPopUp("Unable to log in with provided credentials.");
        }


        this.setState({loading: false, key: body.key});
        this.navigateLogIn();
      } catch (e) {
        console.log(e + "error");
        this.setState({loading: false, error: true})
      }
  }
  };

  // Used to move to the next screen
  // Passes the list of projects from the classes to the next screen
  navigateSignUp() {
    this.props.navigator.push({
      title: 'EnterInfo'
    })
  }

  loginPopUp(errorMessage) {
        Alert.alert(
          "Alert",
            errorMessage,
            [
              {text: 'Try Again', onPress: () => {this.setState({password: ''})}}
            ]
    )
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.inputContainer}>
          <Text style={style.textCenter}>Email</Text>
          <TextInput
          style={Platform.OS === 'ios' ? styles.input : {textAlign : 'center', marginBottom: 30}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          selectTextOnFocus={true}
          keyboardType={'email-address'}
          />
          <Text style={style.textCenter}>Password</Text>
          <TextInput
          style={Platform.OS === 'ios' ? styles.input : {textAlign : 'center', marginBottom: 30}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
          />
        </View>
        <View style={StyleSheet.flatten([style.inputContainer, style.alignCenter])}>
          <TouchableHighlight style={style.button}  onPress={() => this.tryLogIn()}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}> Log In </Text>
          </TouchableHighlight>
          <TouchableHighlight style={style.button}  onPress={() => this.navigateSignUp()}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}> Sign Up </Text>
          </TouchableHighlight>
          <TouchableHighlight  onPress={() => this.navigateSignUp()}>
            <Text style={{color: 'blue', textDecorationLine: 'underline'}}> Forgot Password </Text>
          </TouchableHighlight>
        </View>
        <View style={style.container}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   input: {
     height: 30,
     justifyContent: 'center',
     padding: 5,
     borderColor: 'gray',
     borderWidth: 1,
     marginVertical: 10,
     backgroundColor: '#FFF'
   },
 });
