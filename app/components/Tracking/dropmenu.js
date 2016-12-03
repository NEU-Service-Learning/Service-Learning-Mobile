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
  PickerIOS,
  Platform,
  DatePickerIOS,
} from 'react-native';

const Pick = (Platform.OS === 'ios' ? PickerIOS : Picker);

var projects = [{label:'Time Tracker', key:'0'},
                {label:'Project 1', key:'1'},
                {label:'Project 2', key:'2'}]
const categories = [{label:"Trainings & Orientations", key:"1"},
                    {label:"Direct Service", key:"2"},
                    {label:"Individual Research & Planning", key:"3"},
                    {label:"Team Research & Planning", key:"4"}]

export default class Dropmenu extends Component {

  constructor(props){
    super(props);

    this.state = {
      date: new Date(),
      project: 'Time Tracker',
      visibility: 'hidden',
      category: '',
    }
  }

  onDateChange(date){
    this.setState({date: date});
  }

  // Makes the dropdown menu visible
  toggleVisible() {
    var mode = this.state.visibility == 'hidden' ? 'visible' : 'hidden';
    this.setState({visibility: mode});
  }

  // The text to be displayed
  output(mode) {
    if (mode == "date") {
      return (this.state.date.getMonth() + 1) + "/" + this.state.date.getDate() + "/" + this.state.date.getFullYear()
    }
    else if (mode == "time") {
      return this.state.date.toLocaleTimeString();
    }
  	else if (mode == "project") {
      return this.state.project;
    }
    else return this.state.category;
  }

  render() {
  	var menu;
    if (this.props.mode == "project") {
      menu = ( <Pick
        selectedValue={this.state.project}
        onValueChange={(proj) => this.setState({project: proj})}>
        { projects.map((proj) => (
          <Picker.Item key={proj.key} label={proj.label} value={proj.label}/>)) }
      </Pick> ) }
    else if (this.props.mode == "category") {
      menu = ( <Pick
        selectedValue={this.state.category}
        onValueChange={(cat) => this.setState({category: cat})}>
        { categories.map((cat) => (
          <Picker.Item key={cat.key} label={cat.label} value={cat.label}/>)) }
      </Pick> ) }
    else {
      menu = ( <DatePickerIOS
        style={styles.datepicker}
        date={this.state.date}
        mode={this.props.mode}
        timeZoneOffsetInMinutes={this.props.timeZoneOffsetInHours * 60}
        onDateChange={this.onDateChange.bind(this)}>
      </DatePickerIOS> ) }

    var picker = (
     <View>
        <TouchableOpacity onPress={ this.toggleVisible.bind(this)} style={{marginRight: 20, alignItems: 'flex-end'}}>
          <Text>Done</Text>
        </TouchableOpacity>
            {menu}
      </View>
     )

	return (
	  <View>
      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
        <Text>{this.props.text}</Text>

          {Platform.OS === 'ios' ?
          <TouchableWithoutFeedback onPress={ this.toggleVisible.bind(this) }>
            <View style={ styles.input }>
              <Text>{this.props.time == null ? this.output(this.props.mode) :
              this.props.time}</Text>
            </View>
          </TouchableWithoutFeedback> :
          picker}

      </View>
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
    backgroundColor: '#F0F0F0'
  },
});
