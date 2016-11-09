'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  Picker,
} from 'react-native';

import { Title, Icon, Header, Button } from 'native-base';

import DatePicker from './picker';

export default class ManualTracking extends Component {

	constructor(props){
    super(props);
    
    this.state = {
      project: 'TimeTracker',
    }
  }

  _onPressButton() {
  	this.setState({project: 'Project1'});
  }


	render() {
		return (
			<View>
			<Header>
			  <Button transparent>
          <Icon name='ios-arrow-back' />
        </Button>
        <Title>Log Hours</Title>
      </Header>

      <Text style={{padding: 20}}>Project</Text>

      <Picker
        selectedValue={this.state.project}
        onValueChange={(proj) => this.setState({project: proj})}>
        <Picker.Item label="Time Tracker" value="TimeTracker" />
        <Picker.Item label="Project 1" value="Project1" />
        <Picker.Item label="Project 2" value="Project2" />
      </Picker>

      <DatePicker style={{flex: 1}}
        text = {"Date"}
        mode = {"date"}
      />

      <DatePicker style={{flex: 1}}
        text = {"Start Time"}
        mode = {"time"}
      />

      <DatePicker style={{flex: 1}}
        text = {"End Time"}
        mode = {"time"}
      />

      <Button
        style={styles.button}
        onPress={this._onPressButton.bind(this)}>
        <Text style={{fontSize: 20}}>Log Hours</Text>
      </Button>

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
	}
})
