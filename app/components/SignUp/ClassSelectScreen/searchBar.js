import React, { Component } from 'react';
import {StyleSheet, View, TextInput } from 'react-native';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search for a class here!"
          onChangeText={(text) => this.props.onChangeText(text)}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  input: {
    height: 40
  }
});
