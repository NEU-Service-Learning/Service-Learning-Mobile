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
  },
  map: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  text: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 25
  }
});

export default class Details extends Component {
  render() {
    return(
      <View style={styles.container}>
      <Navigator/>
      <View style={styles.map}>
        <Text style={styles.text} onPress={() => this.props.navigator.push({title: 'Dashboard'})}>Map</Text>
      </View>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Notes:</Text>
        <Text>Field for where the hours go</Text>
        <Text>Bucket</Text>
        <Text>This is where notes go</Text>
        <Text>Place for extra fields</Text>
      </View>
      </View>
    )
  }
}

module.exports = Details;
