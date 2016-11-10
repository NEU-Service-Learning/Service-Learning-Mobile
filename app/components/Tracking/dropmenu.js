'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Picker,
  Platform,
  DatePickerIOS,
} from 'react-native';

import AndroidDatePicker from './picker.android';

const DatePicker = (Platform.OS === 'ios') ? DatePickerIOS : AndroidDatePicker;

export default class Dropmenu extends Component {

	constructor(props){
    super(props);
    
    this.state = {
      date: new Date(),
      project: 'TimeTracker',
      visibility: 'hidden',
    }
  }

  onDateChange(date){
    this.setState({date: date});
  };

  toggleVisible() {
    var mode = this.state.visibility == 'hidden' ? 'visible' : 'hidden';
    this.setState({visibility: mode});
  }

  output(mode) {
    if (mode == "date") {
      return (this.state.date.getMonth() + 1) + "/" + this.state.date.getDate() + "/" + this.state.date.getFullYear()
    }
    else if (mode == "time") {
      return this.state.date.toLocaleTimeString();
    }
  	else return this.state.project;
  }

  render() {
  	var menu = this.props.mode == "project" ? (
      <Picker
        selectedValue={this.state.project}
        onValueChange={(proj) => this.setState({project: proj})}>
        <Picker.Item label="Time Tracker" value="TimeTracker" />
        <Picker.Item label="Project 1" value="Project1" />
        <Picker.Item label="Project 2" value="Project2" />
      </Picker>
      ) : (
      <DatePicker
        style={{zIndex: 0}}
        date={this.state.date}
        mode={this.props.mode}
        timeZoneOffsetInMinutes={this.props.timeZoneOffsetInHours * 60}
        onDateChange={this.onDateChange.bind(this)}
      />
    )
    
    var picker = (
      <View>
        <TouchableOpacity onPress={ this.toggleVisible.bind(this) } style={{ padding: 5, alignItems: 'flex-end' }}>
          <Text>Done</Text>
        </TouchableOpacity>
        { menu }
      </View>
     )
    
	return (
	  <View>
      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
        <Text>{this.props.text}</Text>
          <TouchableWithoutFeedback onPress={ this.toggleVisible.bind(this) }>
            <View style={ styles.input }>
              <Text>{this.output(this.props.mode)}</Text>
            </View>
          </TouchableWithoutFeedback>
      </View>
        { this.state.visibility == 'visible' ? picker : <View/> }
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
    height: 200, 
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
  },
});