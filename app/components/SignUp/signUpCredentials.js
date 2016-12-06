import React, { Component } from 'react';
import {StyleSheet, View, Text, AsyncStorage, TextInput, Image, Platform, Alert, TouchableHighlight } from 'react-native';

import api from '../api/index';
import storage from '../api/storage';

var style = require('../../styles/styles');

export default class CredentialsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {loading: false, error: false, email: '', password: '', password2: '', firstName: '', lastName: '', key: ''};
  }

  // Used to move to the next screen
  // Passes the list of projects from the classes to the next screen
  navigateInfo() {
    this.props.navigator.push({
      title: 'InfoScreen',
      extras: {
        authKey: this.state.key
      }
    })
  }

  trySignUp = async function() {
    if(!this.state.firstName) {
      this.signinPopUp("Empty First Name field");
    }
    else if(!this.state.lastName) {
      this.signinPopUp("Empty Last Name field");
    }
    else if(!this.state.email) {
      this.signinPopUp("Empty email field");
    }
    else if(!this.state.email.includes("@")) {
      this.signinPopUp("Invalid email");
    }
    else if(!this.state.password) {
      this.signinPopUp("Empty password field");
    }
    else if(this.state.password != this.state.password2) {
      this.signinPopUp("Passwords don't match");
    }
    else {
      try {
        this.setState({loading: true});
        const body = await api.signUp(this.state.email,this.state.password, this.state.password2, this.state.firstName, this.state.lastName);
        console.log(body);
        if('key' in body) {
          try {
            console.log(body.key);
            await storage.saveAuthKey(body.key)
            this.setState({loading: false, key: body.key});
            this.navigateInfo();
          } catch (error) {
            console.log(error + " error saving key to storage");
            this.setState({loading: false, error: true})
          }
        }
        if(!('key' in body)) {
          console.log(body);
          this.setState({loading: false, error: true});
          this.signinPopUp(body);
        }

      } catch (e) {
        console.log(e + "error");
        this.setState({loading: false, error: true})
      }
  }
  };

  signinPopUp(errorMessage) {
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
      <View style={[style.container, style.margin16]}>
        <View style={styles.textContainer}>
          <Text style={style.textCenter}>First Name</Text>
          <TextInput
          style={Platform.OS === 'ios' ? styles.input : {textAlign : 'center'}}
          onChangeText={(firstName) => this.setState({firstName})}
          value={this.state.firstName}
          selectTextOnFocus={true}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={style.textCenter}>Last Name</Text>
          <TextInput
          style={Platform.OS === 'ios' ? styles.input : {textAlign : 'center'}}
          onChangeText={(lastName) => this.setState({lastName})}
          value={this.state.lastName}
          selectTextOnFocus={true}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={style.textCenter}>Email</Text>
          <TextInput
          style={Platform.OS === 'ios' ? styles.input : {textAlign : 'center'}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          selectTextOnFocus={true}
          keyboardType={'email-address'}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={style.textCenter}>Password</Text>
          <TextInput
          style={Platform.OS === 'ios' ? styles.input : {textAlign : 'center'}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={style.textCenter}>Password Again</Text>
          <TextInput
          style={Platform.OS === 'ios' ? styles.input : {textAlign : 'center'}}
          onChangeText={(password2) => this.setState({password2})}
          value={this.state.password2}
          secureTextEntry={true}
          />
        </View>
      <View style={StyleSheet.flatten([style.inputContainer, style.alignCenter])}>
        <TouchableHighlight style={style.button}  onPress={() => this.trySignUp()}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}> Sign Up </Text>
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
   textContainer: {
     flex: 1,
     marginTop: 16,
     padding: 8,
     justifyContent: 'flex-start'
   },
 });
