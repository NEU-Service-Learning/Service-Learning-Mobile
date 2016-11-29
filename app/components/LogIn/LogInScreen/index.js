import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

var style = require('../../../Styles/styles');

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
      <View style={style.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput
          style={styles.input}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
          style={styles.text}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={style.button}  onPress={() => this.navigateLogIn()}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}> Log In </Text>
          </TouchableHighlight>
          <TouchableHighlight style={style.button}  onPress={() => this.navigateSignUp()}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}> Sign Up </Text>
          </TouchableHighlight>
          <TouchableHighlight style={style.margin16}  onPress={() => this.navigateSignUp()}>
            <Text style={{color: 'blue', textDecorationLine: 'underline'}}> Forgot Password </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent : 'center'
  },
  inputContainer: {
    margin: 30,
    justifyContent : 'center',
  },
  buttonContainer: {
    margin: 30,
    justifyContent : 'center',
    alignItems: 'center'
  },
  input: {
    textAlign : 'center',
    marginBottom: 30
  },
  text: {
    textAlign : 'center'
  },
});
