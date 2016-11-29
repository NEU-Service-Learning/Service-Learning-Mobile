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
} from 'react-native';

import { Title, Icon, Header, Button } from 'native-base';

import Dropmenu from './dropmenu';
import AndroidDatePicker from './datepicker.android';
import AndroidTimePicker from './timepicker.android';

export default class ManualTracking extends Component {

	constructor(props){
    super(props);

    this.state = {
    	notes: "Enter notes here",
    }
  }

  _onPressButton() {
    this.props.navigator.push({title: 'Dashboard'});
  }

	render() {
		return (
			<View>
			<Header>
			  <Button transparent>
          <Icon name='ios-arrow-back' onPress={() => this.props.navigator.pop()}/>
        </Button>
        <Title>Log Hours</Title>
        <View style={{padding:10}} />
      </Header>
      <ScrollView>
      <Dropmenu
        text = {"Project"}
        mode = {"project"}
      />

      {Platform.OS === 'ios' ? 

      // IOS DATE PICKING
      <View>
      <Dropmenu
        text = {"Date"}
        mode = {"date"}
      />

      <Dropmenu
        text = {"Start Time"}
        mode = {"time"}
      />

      <Dropmenu
        text = {"End Time"}
        mode = {"time"}
      /></View> :
        
      // ANDROID DATE PICKING
      <View>
      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
    	  <Text>Date</Text>
    	  <AndroidDatePicker />
      </View> 

      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
    	  <Text>Start Time</Text>
    	  <AndroidTimePicker />
      </View> 

      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
    	  <Text>End Time</Text>
    	  <AndroidTimePicker />
      </View> 

      </View>}
    
      <Dropmenu
        text = {"Category"}
        mode = {"category"}
      />

      <View style={{ paddingTop: 10, paddingLeft: 20, paddingRight: 20}}>
      <Text>Notes</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({notes: text})}
        value = {this.state.notes} />
      </View>

      <Button
        style={styles.button}
        onPress={this._onPressButton.bind(this)}>
        <Text style={{fontSize: 20}}>Log Hours</Text>
      </Button>

      <View style={{padding:10}} />

     </ScrollView>
     </View>
		)
	}
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2ab9f7',
    alignSelf: 'center',
    width: 200,
    height: 50,
    marginTop: 30,
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
})
