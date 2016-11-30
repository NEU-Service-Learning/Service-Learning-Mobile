'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text

} from 'react-native';

var style = require('../../Styles/styles');

export default class Settings extends Component {
  render() {
    return(
      <View style={StyleSheet.flatten([style.container, style.alignCenter])}>
      <Text>
    Settings
      </Text>
      </View>
    )
  }
}

module.exports = Settings;
