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
} from 'react-native';

import { Title, Icon, Header, Container, Card, CardItem, Button } from 'native-base';

export default class DatePicker extends Component {

	constructor(props){
    super(props);
    
    this.state = {
    	date: new Date(),
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
  	return mode == "date" ? (this.state.date.getMonth() + 1) + "/" + this.state.date.getDate() + "/" + this.state.date.getFullYear()
  	: this.state.date.toLocaleTimeString();
  }

  render() {
  	var picker = (
		  <View style={ styles.datePicker }>
        <TouchableOpacity onPress={ this.toggleVisible.bind(this) } style={{ padding: 5, alignItems: 'flex-end' }}>
          <Text>Done</Text>
        </TouchableOpacity>
        <DatePickerIOS
          date={this.state.date}
          mode={this.props.mode}
          timeZoneOffsetInMinutes={this.props.timeZoneOffsetInHours * 60}
          onDateChange={this.onDateChange.bind(this)}
        />
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