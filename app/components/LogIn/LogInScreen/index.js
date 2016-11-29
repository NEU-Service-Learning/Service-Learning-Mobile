import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Image, TouchableHighlight } from 'react-native';

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
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../../assets/img/Logo.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput
          style={styles.input}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Password</Text>
          <TextInput
          style={styles.text}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button}  onPress={() => this.navigateLogIn()}>
            <Text style={{color: 'white', fontWeight: 'bold'}}> Log In </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button}  onPress={() => this.navigateSignUp()}>
            <Text style={{color: 'white', fontWeight: 'bold'}}> Sign Up </Text>
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
    margin: 20,
    justifyContent : 'center',
  },
  buttonContainer: {
    margin: 30,
    justifyContent : 'center',
    alignItems: 'center'
  },
  input: {
    textAlign : 'center'
  },
  text: {
    textAlign : 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    borderRadius: 64,
    width: 100,
    height: 40
  }
});
