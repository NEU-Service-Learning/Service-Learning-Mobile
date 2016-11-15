'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});

export default class Details extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  };
  render() {
    return(
      <View>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>Map</Text>
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
