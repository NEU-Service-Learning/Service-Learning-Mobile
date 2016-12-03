'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import { Title, Button, Header, Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

var style = require('../../styles/styles');

export default class Settings extends Component {
  back() {
    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={{flex: 1}}>
      <Header>
      <Button transparent onPress={() => this.back()}>
      <Icon name='arrow-left' size={25} />
      </Button>
      <Title style={StyleSheet.flatten([style.header, style.alignCenter, style.font20])}> Settings </Title>
      </Header>
      <View style={styles.container}>
      <TouchableHighlight style={StyleSheet.flatten([style.button, style.height50])} onPress={() => {this.props.navigator.push({ title: 'LogIn' })}}>
        <Text style={style.buttonText}>Sign Out</Text>
      </TouchableHighlight>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    flexDirection: 'row',
    marginTop: 250
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
    borderRadius: 64,
    width: 100,
    height: 40
  }
});

module.exports = Settings;
