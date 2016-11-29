'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text

} from 'react-native';

var style = require('../../Styles/styles');

export default class ClockIn extends Component {
  render() {
    return(
      <View style={StyleSheet.flatten([style.container, style.alignCenter])}>
      <Text>
      Clock In View
      </Text>
      </View>
    )
  }
}

module.exports = ClockIn;
