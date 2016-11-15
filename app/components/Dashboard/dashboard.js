'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { Title, Icon, Header, Container, Card, CardItem } from 'native-base';

export default class Dashboard extends Component {

  render() {
    return(
      <View style={styles.container}>
        <View>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate()}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}> Clock In </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.card}>
          <Card>
          <CardItem button style={styles.card} onPress={() => this.navigate()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Time Tracker</Text>
          </CardItem>
          <CardItem button style={styles.card} onPress={() => this.navigate()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Project 1</Text>
          </CardItem>
          <CardItem button style={styles.card} onPress={() => this.navigate()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Project 2</Text>
          </CardItem>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    borderRadius: 64,
    width: 250,
    marginTop: 50,
    marginBottom: 50,
    height: 60,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#008080',
    borderRadius: 64,
    width: 300,
  }
});

module.exports = Dashboard;
