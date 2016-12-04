import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Image, TouchableHighlight } from 'react-native';

var style = require('../../styles/styles');

export default class LogInScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  // Used to move to the next screen
  // Passes the list of projects from the classes to the next screen
  navigateLogIn() {
    this.props.navigator.push({
      title: 'Dashboard'
    })
  }

  // Used to move to the next screen
  // Passes the list of projects from the classes to the next screen
  navigateSignUp() {
    this.props.navigator.push({
      title: 'EnterInfo'
    })
  }

  render() {
    return (
      <View style={[style.container]}>
          <Image style={{alignSelf: 'center', marginTop: 50}}
                source={require('../../assets/img/Logo.png')}
          />
          <View style={style.inputContainer}>
          <Text style={style.textCenter}>Email</Text>
          <TextInput
          style={{textAlign : 'center', marginBottom: 30}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
          <Text style={style.textCenter}>Password</Text>
          <TextInput
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          />
        </View>
        <View style={StyleSheet.flatten([style.inputContainer, style.alignCenter])}>
          <TouchableHighlight style={style.button}  onPress={() => this.navigateLogIn()}>
            <Text style={StyleSheet.flatten([style.buttonText])}> Log In </Text>
          </TouchableHighlight>
          <TouchableHighlight style={style.button}  onPress={() => this.navigateSignUp()}>
            <Text style={StyleSheet.flatten([style.buttonText])}> Sign Up </Text>
          </TouchableHighlight>
          <TouchableHighlight  onPress={() => this.navigateSignUp()}>
            <Text style={{color: 'blue', textDecorationLine: 'underline', margin: 10}}> Forgot Password </Text>
          </TouchableHighlight>
        </View>
        <View style={style.container}>
        </View>
      </View>
    );
  }
}
