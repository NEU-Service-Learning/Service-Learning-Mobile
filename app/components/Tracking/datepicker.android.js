'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  DatePickerAndroid,
} from 'react-native';

export default class AndroidDatePicker extends Component {

  state = {
    date: new Date(),
  };

  showPicker = async (stateKey, options) => {
    try {
      var newDate = null;
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        // do nothing
      } else {
        newDate = new Date(year, month, day);
        this.setState({date: newDate});
      }
      this.props.onStateChange(newDate);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
  	return (
  		<View>
          <TouchableWithoutFeedback
            onPress={this.props.preset ? {} :
              this.showPicker.bind(this, 'preset', {date: this.state.date})}>
            <View style={this.props.preset ? styles.presetInput : styles.input}>
            <Text>{this.state.date.toLocaleDateString()}</Text>
            </View>
          </TouchableWithoutFeedback>

      </View>
      )

  }
}

var styles = StyleSheet.create({
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
