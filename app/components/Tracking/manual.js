'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Navigator,
  Platform,
  Alert,
} from 'react-native';

import { Title, Header, Button } from 'native-base';
import Checkbox from 'react-native-checkbox';

import Dropmenu from './dropmenu';
import AndroidDatePicker from './datepicker.android';
import AndroidTimePicker from './timepicker.android';
import Icon from 'react-native-vector-icons/FontAwesome';

var style = require('../../styles/styles');

export default class ManualTracking extends Component {

	constructor(props){
    super(props);

    this.state = {
      project: this.props.project == null ? 'Time Tracker' : this.props.project,
      date: this.props.start == null ? new Date() : this.props.start.toLocaleDateString(),
      startTime: this.props.start == null ? new Date() : this.props.start,
      endTime: this.props.end == null ? new Date() : this.props.end,
      category: null,
    	notes: "",
    	group_log: false,
    }
  }

  trySubmitHours() {
    if(this.state.category == null) {
      Alert.alert(
        'Incomplete Record',
        'Please check that you have filled out all the relevant fields.',
        [
          {text: 'OK', onPress: () => console.log('Premature submission')},
        ]
      )
    }
    else {
      this.props.navigator.push({title: 'Dashboard'});
    }
  }

  back() {
    Alert.alert(
      'Dismiss Record',
      'Are you sure you want to leave this page? Your hours have not yet been submitted.',
      [
        {text: 'Leave', onPress: () => this.props.navigator.pop()},
        {text: 'Stay', onPress: () => console.log('Stayed on log hours pages')},
      ]
    )

  }

	render() {
		return (
			<View>
			<Header>
			  <Button transparent onPress={() => this.back()}>
          <Icon name='arrow-left' size={30}/>
        </Button>
        <Title style={StyleSheet.flatten([style.header, style.alignCenter, style.font20])}>Log Hours</Title>
        <View style={{padding:10}} />
      </Header>
      <ScrollView>
      <Dropmenu
        text = {"Project"}
        mode = {"project"}
        project = {this.props.project == null ? null : this.props.project}
        onStateChange = {(proj) => this.setState({project: proj})}
      />

      {Platform.OS === 'ios' ?

      // IOS DATE PICKING
      <View>
      <Dropmenu
        text = {"Date"}
        mode = {"date"}
        time = {this.props.start == null ? null : this.props.start.toLocaleDateString()}
        onStateChange = {(date) => this.setState({date: date})}
      />
      <Dropmenu
        text = {"Start Time"}
        mode = {"time"}
        time = {this.props.start == null ? null : this.props.start.toLocaleTimeString()}
        onStateChange = {(time) => this.setState({startTime: time})}
      />
      <Dropmenu
        text = {"End Time"}
        mode = {"time"}
        time = {this.props.end == null ? null : this.props.end.toLocaleTimeString()}
        onStateChange = {(time) => this.setState({endTime: time})}
      /></View> :

      // ANDROID DATE PICKING
      <View>
      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
    	  <Text>Date</Text>
    	  <AndroidDatePicker
          preset = {this.props.start == null ? false : true} />
      </View>

      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
    	  <Text>Start Time</Text>
    	  <AndroidTimePicker
          autoTime = {this.props.start == null ? null : this.props.start.toLocaleTimeString()}/>
      </View>

      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
    	  <Text>End Time</Text>
    	  <AndroidTimePicker
          autoTime = {this.props.end == null ? null : this.props.end.toLocaleTimeString()}/>
      </View>

      </View>}
      <Dropmenu
        text = {"Category"}
        mode = {"category"}
        onStateChange = {(cat) => this.setState({category: cat})}
      />

      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
      <Text>Notes</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({notes: text})}
        value = {this.state.notes} />
      </View>

      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
      <Checkbox
        label='Log hours for entire group'
  			checked={this.state.group_log}
  			onChange={(checked) => this.setState({group_log: checked})}
  	  />
  	  </View>

      <Button
        style={StyleSheet.flatten([style.button, style.alignCenter, style.height50])}
        onPress={this.trySubmitHours.bind(this)}>
        <Text style={StyleSheet.flatten([style.buttonText])}> Submit </Text>
      </Button>

      <View style={{padding:10}} />

     </ScrollView>
     </View>
		)
	}
}

const styles = StyleSheet.create({
   input: {
     height: 30,
     justifyContent: 'center',
     padding: 5,
     borderColor: 'gray',
     borderWidth: 1,
     marginVertical: 10,
     backgroundColor: '#FFF'
   },
 });
