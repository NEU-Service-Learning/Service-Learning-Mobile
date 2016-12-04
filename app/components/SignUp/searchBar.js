import React, { Component } from 'react';
import {StyleSheet, View, TextInput } from 'react-native';
var style = require('../../styles/styles');

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={[style.margin16, {flexDirection: 'row'}]}>
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
  input: {
    height: 40,
    flex: 1
  }
});
