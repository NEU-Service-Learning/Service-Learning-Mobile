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
    preset: this.props.autoTime == null ? false : true,
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
      this.props.onStateChange(newTime);
      this.setState({time: newTime});
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
  	return (
  		<View>
          <TouchableWithoutFeedback
            onPress={this.state.preset ? {} : this.showPicker.bind(this, 'preset', {
              hour: this.state.time.getHours(),
              minute: this.state.time.getMinutes(),
            })}>
            <View style={this.state.preset ? styles.presetInput : styles.input}><Text>
              {this.state.preset ? this.props.autoTime : this.state.time.toLocaleTimeString()}
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
    height: 30,
    justifyContent: 'center',
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: '#FFF'
  },
  presetInput: {
    height: 30,
    justifyContent: 'center',
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: '#EEE'
  },
});
