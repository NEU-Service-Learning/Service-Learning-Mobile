'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TabBarIOS

} from 'react-native';

import { Title, Button, Icon, Header, Container, Card, CardItem } from 'native-base';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between'
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

export default class Dashboard extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Header>
          <Button transparent>
          <Icon name='ios-menu' />
      </Button>
      <Title style={{color: '#008080', fontWeight: 'bold'}}>Dashboard</Title>
      </Header>
      <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={() => this.navigate()}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}> Clock In
      </Text>
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
    )
  }
}

module.exports = Dashboard;
