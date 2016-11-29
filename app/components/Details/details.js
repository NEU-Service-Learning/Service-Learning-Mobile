'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text

} from 'react-native';

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

export default class Details extends Component {
  render() {
    return(
      <View style={styles.container}>
      <View style={styles.container}>
        <Text style={{backgroundColor: 'red', fontWeight: 'bold', fontSize: 25}}>Map</Text>
      </View>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Notes:</Text>
        <Text>This is where notes go.</Text>
        <Text>Place for extra fields</Text>
      </View>
      </View>
    )
  }
}

module.exports = Details;
