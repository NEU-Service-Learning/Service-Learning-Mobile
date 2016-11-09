import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

export default class LogInScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {username: '', password: []};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.next}>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent: 'space-between'
  },
  next: {
    flexDirection: 'row',
    justifyContent:'flex-end',
  }
});
