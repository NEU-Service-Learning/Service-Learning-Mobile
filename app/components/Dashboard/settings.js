'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text

} from 'react-native';

import { Title, Button, Header, Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

var style = require('../../Styles/styles');

export default class Settings extends Component {
  back() {
    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={{flex: 1}}>
      <Header>
      <Button transparent onPress={() => this.back()}>
      <Icon name='arrow-left' size={30} />
      </Button>
      <Title>Settings</Title>
      </Header>

      </View>
    )
  }
}

module.exports = Settings;
