'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Navigator,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
  DatePickerIOS,
  DatePickerAndroid,
} from 'react-native';

import { Title, Icon, Header, Container, Card, CardItem, Button } from 'native-base';

export default class AndroidDatePicker extends Component {

  state = {
    presetDate: new Date(),
    allDate: new Date(2020, 4, 5),
    simpleText: 'pick a date',
    minText: 'pick a date, no earlier than today',
    maxText: 'pick a date, no later than today',
    presetText: 'Pick a date',
    allText: 'pick a date between 2020/5/1 and 2020/5/10',
  };

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
  	return (
  		<View>
          <TouchableWithoutFeedback
            onPress={this.showPicker.bind(this, 'preset', {date: this.state.presetDate})}>
            <View style={styles.input}>
            <Text>{this.state.presetDate.toLocaleDateString()}</Text>
            </View>
          </TouchableWithoutFeedback>

      </View>
      )
  	
  }
}

var styles = StyleSheet.create({
  datePicker: {
    borderTopWidth: 1, 
    position: 'absolute', 
    bottom: 0, 
    right: 0, 
    left: 0, 
    height: 100, 
    borderColor: '#CCC', 
    backgroundColor: '#FFF',    
  },
  input: {
    height: 40, 
    justifyContent: 'center', 
    padding: 5, 
    borderColor: 'gray', 
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: '#EEE'
  },
});
