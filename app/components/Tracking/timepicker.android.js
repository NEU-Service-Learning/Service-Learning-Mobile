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
  TimePickerAndroid,
} from 'react-native';

import { Title, Icon, Header, Container, Card, CardItem, Button } from 'native-base';

export default class AndroidTimePicker extends Component {

  _formatTime(hour, minute) {
    return hour + ':' + (minute < 10 ? '0' + minute : minute);
  }

  state = {
    time: new Date(),
  };

  showPicker = async (stateKey, options) => {
    try {
      const {action, minute, hour} = await TimePickerAndroid.open(options);
      var newTime = new Date();
      if (action === TimePickerAndroid.timeSetAction) {
        newTime.setHours(hour);
        newTime.setMinutes(minute);
      } else if (action === TimePickerAndroid.dismissedAction) {
        // do nothing
      }
      this.setState({time: newTime});
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
  	return (
  		<View>
          <TouchableWithoutFeedback
            onPress={this.showPicker.bind(this, 'preset', {
              hour: this.state.time.getHours(),
              minute: this.state.time.getMinutes(),
            })}>
            <View style={styles.input}><Text>
              {this.state.time.toLocaleTimeString().substring(0,5)}
            </Text></View>
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
