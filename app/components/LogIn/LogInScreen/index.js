import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

export default class LogInScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.text}>Username</Text>
          <TextInput
          style={styles.input}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.text}>Password</Text>
          <TextInput
          style={styles.text}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          />
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
  group: {
    margin: 30
  },
  input: {
    textAlign : 'center'
  },
  text: {
    textAlign : 'center'
  }
});
