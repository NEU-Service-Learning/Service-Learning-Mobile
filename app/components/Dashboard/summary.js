'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text

} from 'react-native';

export default class Summary extends Component {
  render() {
    return(
      <View style={styles.container}>
      <Text style={styles.description}>
      Summary View
      </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal'
  }
});
module.exports = Summary;
